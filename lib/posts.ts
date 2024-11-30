import { readFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '../types/post';

const postsDirectory = join(process.cwd(), 'posts');

export function getAllPosts(): Post[] {
    try {
        if (!existsSync(postsDirectory)) {
            mkdirSync(postsDirectory, { recursive: true });
            return [];
        }

        const fileNames = readdirSync(postsDirectory);
        const allPosts = fileNames
            .filter(fileName => fileName.endsWith('.md'))
            .map((fileName): Post => {
                const slug = fileName.replace(/\.md$/, '');
                const fullPath = join(postsDirectory, fileName);
                const fileContents = readFileSync(fullPath, 'utf8');
                const { data, content } = matter(fileContents);

                return {
                    slug,
                    title: data.title as string,
                    date: data.date as string,
                    description: (data.description as string) || '',
                    content,
                    header: (data.header as string) || '',
                    author: data.author as string || '',
                };
            });

        return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
    } catch (error) {
        console.error('Error reading posts:', error);
        return [];
    }
}

export function getPostBySlug(slug: string): Post | undefined {
    try {
        const fullPath = join(postsDirectory, `${slug}.md`);
        const fileContents = readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title as string,
            date: data.date as string,
            description: (data.description as string) || '',
            content,
            header: (data.header as string) || '',
            author: data.author as string || '',
        };
    } catch {
        return undefined;
    }
}

export async function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: {
            posts
        }
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts();
    return {
        paths: posts.map((post) => ({
            params: { slug: post.slug }
        })),
        fallback: false
    };
}
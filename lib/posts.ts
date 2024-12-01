import { readFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '../types/post';

const postsDirectory = join(process.cwd(), 'posts');

export function getAllPosts(): Post[] {
    try {
        if (!existsSync(postsDirectory)) {
            console.warn('Posts directory does not exist. Creating a new directory.');
            mkdirSync(postsDirectory, { recursive: true });
            return [];
        }

        const fileNames = readdirSync(postsDirectory);
        if (fileNames.length === 0) {
            console.warn('No markdown files found in the posts directory.');
            return [];
        }

        const allPosts = fileNames
            .filter(fileName => fileName.endsWith('.md'))
            .map((fileName): Post | null => {
                const slug = fileName.replace(/\.md$/, '');
                const fullPath = join(postsDirectory, fileName);
                const fileContents = readFileSync(fullPath, 'utf8');
                const { data, content } = matter(fileContents);

                // 必須フィールドの検証
                if (!data.title || !data.date) {
                    console.warn(`Skipping file ${fileName} due to missing required fields.`);
                    return null; // スキップ
                }

                return {
                    slug,
                    title: data.title as string,
                    date: data.date as string,
                    description: (data.description as string) || '',
                    content,
                    header: (data.header as string) || '',
                    author: (data.author as string) || '',
                };
            })
            .filter(Boolean) as Post[];

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
            author: (data.author as string) || '',
        };
    } catch (error) {
        console.error(`Error reading post with slug "${slug}":`, error);
        return undefined;
    }
}

export async function getStaticProps() {
    try {
        const posts = getAllPosts();
        console.log('Loaded posts:', posts);
        return {
            props: {
                posts
            }
        };
    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return { props: { posts: [] } };
    }
}

export async function getStaticPaths() {
    try {
        const posts = getAllPosts();
        return {
            paths: posts.map((post) => ({
                params: { slug: post.slug }
            })),
            fallback: true
        };
    } catch (error) {
        console.error('Error in getStaticPaths:', error);
        return {
            paths: [],
            fallback: true
        };
    }
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../types/post';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(): Post[] {
    if (typeof window !== 'undefined') {
        throw new Error('getAllPosts should only be called on the server side');
    }

    try {
        if (!fs.existsSync(postsDirectory)) {
            console.warn('Posts directory does not exist. Creating a new directory.');
            fs.mkdirSync(postsDirectory, { recursive: true });
            return [];
        }

        const fileNames = fs.readdirSync(postsDirectory);
        if (fileNames.length === 0) {
            console.warn('No markdown files found in the posts directory.');
            return [];
        }

        const allPosts = fileNames
            .filter(fileName => fileName.endsWith('.md'))
            .map((fileName): Post | null => {
                const slug = fileName.replace(/\.md$/, '');
                const fullPath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const { data, content } = matter(fileContents);

                if (!data.title || !data.date) {
                    console.warn(`Skipping file ${fileName} due to missing required fields.`);
                    return null;
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
    if (typeof window !== 'undefined') {
        throw new Error('getPostBySlug should only be called on the server side');
    }

    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
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

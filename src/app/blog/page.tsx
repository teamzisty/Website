import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import { getAllPosts } from '../../../lib/posts';
import { Post } from '../../../types/post';
import { formatDate } from '../../../lib/dateFormat'
import styles from './page.module.css'

const defaultHeader = "https://zisty.net/images/posts/default-header.jpg";

export const metadata = {
  title: 'Blog',
  description: 'This is a blog maintained by a member of Zisty. Please take a look.',
}

interface BlogProps {
  posts: Post[];
}

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <>
      <Head>
        <title>Blog / Zisty</title>
      </Head>
      <main>
        <section className={styles.blog} id="Blog">
          <div className={styles.container}>
            {posts && posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className={styles.box}>
                    <Image
                      src={post.header || defaultHeader}
                      width={1920}
                      height={1080}
                      alt={post.title}
                    />
                    <div className={styles.content}>
                      <h2 className={styles.togs}>{post.author}・{formatDate(post.date)}</h2>
                      <h2 className={styles.title}>{post.title}</h2>
                      <p className={styles.desc}>{post.description}</p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

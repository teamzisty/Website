import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import { getAllPosts } from '../../../lib/posts';
import { Post } from '../../../types/post';
import { formatDate } from '../../../lib/dateFormat'

// Remove edge runtime since we're using Node.js APIs
// export const runtime = 'edge';

import '@/assets/CSS/blog/blog.css';

const defaultHeader = "https://zisty.net/images/posts/default-header.jpg";

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
        <section className="blog" id="Blog">
          <div className="container">
            {posts && posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="box">
                    <Image
                      src={post.header || defaultHeader}
                      width={1920}
                      height={1080}
                      alt={post.title}
                    />
                    <div className="content">
                      <h2 className="box-togs">{post.author}・{formatDate(post.date)}</h2>
                      <h2 className="box-title">{post.title}</h2>
                      <p className="box-desc">{post.description}</p>
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

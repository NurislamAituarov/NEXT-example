import { NextPageContext } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { MyPost } from '../../interface/post';
import s from '../../styles/Home.module.scss';

interface PostsPageProps {
  posts: MyPost[];
}

export default function Posts({ posts: serverPost }) {
  const [posts, setPosts] = useState(serverPost);

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch(`${process.env.API_URL}/posts`);
  //     const json = await response.json();
  //     setPosts(json);
  //   }

  //   if (!serverPost) {
  //     load();
  //   }
  // }, []);

  if (!posts) {
    return (
      <MainLayout title="Next Posts">
        <p>loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Next Posts">
      <h1>Posts Page</h1>
      <ol className={s.listItem}>
        {posts.map((el) => {
          return (
            <li key={el.id}>
              <Link href={`/posts/[id]`} as={`/posts/${el.id}`}>
                <a>{el.author}</a>
              </Link>
            </li>
          );
        })}
      </ol>
      <Link href="/">
        <a>Back</a>
      </Link>
    </MainLayout>
  );
}

// Posts.getInitialProps = async ({ req }: NextPageContext) => {
//   if (!req) {
//     return { posts: null };
//   }

//   const res = await fetch(`${process.env.API_URL}/posts`);
//   const posts = await res.json();

//   return { posts };
// };

export async function getStaticProps(params) {
  console.log('server');

  console.log(params);

  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

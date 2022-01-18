import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';

export default function Post({ post: serverPost }) {
  // console.log(serverPost);

  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  // useEffect(() => {
  //   async function load() {
  //     const res = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
  //     const data = await res.json();

  //     setPost(data);
  //   }

  //   if (!serverPost) {
  //     load();
  //   }
  // }, []);

  if (!post) {
    return (
      <MainLayout title="Loading...">
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`${post.id}${post.author}`}>
      <h1>Post</h1>
      <p>
        {post.id}-{post.author}
      </p>

      <Link href="/posts">
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  );
}

// Post.getInitialProps = async ({ req, query }) => {
//   // console.log(query); //////id:1
//   // console.log(ctx.req); ///undefined
//   console.log(req);

//   if (!req) {
//     console.log('req');
//     return { posts: null };
//   }
//   console.log('not req');

//   const res = await fetch(`${process.env.API_URL}/posts/${query.id}`);
//   const post = await res.json();

//   return { post };
// };

// export async function getStaticPaths() {
//   console.log('server');

//   // if (!params) {
//   //   return {
//   //     notFound: true,
//   //   };
//   // }

//   const res = await fetch(`${process.env.API_URL}/posts`);
//   const post = await res.json();
//   return {
//     props: { post },
//   };
// }

export async function getServerSideProps(context) {
  console.log('server');

  console.log(context);

  const response = await fetch(`http://localhost:4200/posts/${context.query.id}`);
  const post = await response.json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return { props: { post } };
}

// export async function getStaticProps(context) {
//   console.log(context);
//   // const response = await fetch(`http://localhost:4200/posts/${context.params.id}`);
//   // const post = await response.json();
//   // return { props: { post } };
// }

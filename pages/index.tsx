import Image from 'next/image';
import MainLayout from '../layout/MainLayout';
import styles from '../styles/Home.module.scss';
import img from '../public/woman.jpg';
import { Htag } from '../components';

import { SvgApple } from './svg.star';

export default function Pages({ post }) {
  console.log(post);

  return (
    <MainLayout title="Next Home">
      <Htag tag="h1">Hello World</Htag>
      <p>{post[0].body}</p>
      <SvgApple />
      {/* <svg
        className={styles.svg}
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="64px"
        height="64px">
        <path d="M 31 4 C 20.523438 4 12 12.523438 12 23 C 12 27.972656 14.78125 31.6875 17.472656 35.28125 C 19.621094 38.152344 21.644531 40.886719 22 44 L 22 51 C 22 54.519531 24.613281 57.433594 28 57.921875 L 28 59 C 28 60.101563 28.898438 61 30 61 L 32 61 C 33.101563 61 34 60.101563 34 59 L 34 57.921875 C 37.386719 57.433594 40 54.519531 40 51 L 40 44.898438 C 40.015625 41.402344 42.222656 38.429688 44.5625 35.28125 C 47.238281 31.6875 50 27.972656 50 23 C 50 12.523438 41.476563 4 31 4 Z M 31 6 C 40.375 6 48 13.625 48 23 C 48 27.3125 45.4375 30.757813 42.960938 34.089844 C 40.71875 37.105469 38.40625 40.210938 38.046875 43.9375 L 32 43.9375 L 32 41 C 32 40.449219 31.550781 40 31 40 C 30.449219 40 30 40.449219 30 41 L 30 43.941406 L 24.027344 43.941406 C 23.664063 40.214844 21.332031 37.101563 19.074219 34.082031 C 16.578125 30.75 14 27.308594 14 23 C 14 13.625 21.625 6 31 6 Z M 30.863281 8.996094 C 28.191406 9.019531 25.582031 9.804688 23.3125 11.296875 C 22.851563 11.597656 22.726563 12.21875 23.03125 12.679688 C 23.222656 12.972656 23.539063 13.128906 23.863281 13.128906 C 24.054688 13.128906 24.242188 13.078125 24.414063 12.964844 C 27.003906 11.261719 30.117188 10.636719 33.183594 11.199219 C 33.730469 11.296875 34.25 10.9375 34.347656 10.394531 C 34.449219 9.851563 34.089844 9.332031 33.546875 9.234375 C 32.652344 9.066406 31.757813 8.988281 30.863281 8.996094 Z M 37.859375 10.875 C 37.476563 10.820313 37.074219 10.996094 36.859375 11.347656 C 36.574219 11.824219 36.726563 12.4375 37.203125 12.722656 C 38.027344 13.222656 38.796875 13.824219 39.484375 14.515625 C 39.679688 14.710938 39.9375 14.808594 40.191406 14.808594 C 40.449219 14.808594 40.707031 14.710938 40.902344 14.515625 C 41.292969 14.125 41.292969 13.492188 40.902344 13.101563 C 40.09375 12.296875 39.199219 11.59375 38.234375 11.011719 C 38.117188 10.941406 37.988281 10.894531 37.859375 10.875 Z M 5.023438 11.511719 C 4.632813 11.519531 4.265625 11.753906 4.109375 12.136719 C 3.90625 12.648438 4.152344 13.234375 4.664063 13.4375 L 8.375 14.9375 C 8.496094 14.988281 8.621094 15.011719 8.746094 15.011719 C 9.140625 15.011719 9.519531 14.773438 9.675781 14.386719 C 9.882813 13.871094 9.632813 13.289063 9.121094 13.082031 L 5.414063 11.582031 C 5.285156 11.53125 5.152344 11.507813 5.023438 11.511719 Z M 56.976563 11.511719 C 56.847656 11.507813 56.714844 11.53125 56.585938 11.582031 L 52.878906 13.082031 C 52.367188 13.289063 52.117188 13.871094 52.324219 14.386719 C 52.480469 14.773438 52.859375 15.011719 53.253906 15.011719 C 53.378906 15.011719 53.503906 14.988281 53.625 14.9375 L 57.335938 13.4375 C 57.847656 13.234375 58.09375 12.648438 57.890625 12.136719 C 57.734375 11.753906 57.367188 11.519531 56.976563 11.511719 Z M 1 22 C 0.449219 22 0 22.449219 0 23 C 0 23.550781 0.449219 24 1 24 L 7 24 C 7.550781 24 8 23.550781 8 23 C 8 22.449219 7.550781 22 7 22 Z M 55 22 C 54.449219 22 54 22.449219 54 23 C 54 23.550781 54.449219 24 55 24 L 61 24 C 61.550781 24 62 23.550781 62 23 C 62 22.449219 61.550781 22 61 22 Z M 27 26 C 26.746094 26 26.488281 26.097656 26.292969 26.292969 C 25.902344 26.683594 25.902344 27.316406 26.292969 27.707031 L 28.292969 29.707031 C 28.488281 29.902344 28.742188 30 29 30 C 29.257813 30 29.511719 29.902344 29.707031 29.707031 C 30.097656 29.316406 30.097656 28.683594 29.707031 28.292969 L 27.707031 26.292969 C 27.511719 26.097656 27.253906 26 27 26 Z M 35 26 C 34.746094 26 34.488281 26.097656 34.292969 26.292969 L 30.292969 30.292969 C 30.105469 30.480469 30 30.734375 30 31 L 30 37 C 30 37.550781 30.449219 38 31 38 C 31.550781 38 32 37.550781 32 37 L 32 31.414063 L 35.707031 27.707031 C 36.097656 27.316406 36.097656 26.683594 35.707031 26.292969 C 35.511719 26.097656 35.253906 26 35 26 Z M 8.765625 30.988281 C 8.632813 30.988281 8.5 31.011719 8.375 31.0625 L 4.664063 32.5625 C 4.152344 32.765625 3.90625 33.351563 4.109375 33.863281 C 4.269531 34.253906 4.644531 34.488281 5.039063 34.488281 C 5.164063 34.488281 5.292969 34.464844 5.414063 34.417969 L 9.121094 32.917969 C 9.632813 32.710938 9.882813 32.128906 9.675781 31.613281 C 9.519531 31.230469 9.152344 30.996094 8.765625 30.988281 Z M 53.234375 30.992188 C 52.847656 31 52.480469 31.234375 52.324219 31.617188 C 52.117188 32.128906 52.367188 32.714844 52.878906 32.921875 L 56.585938 34.417969 C 56.707031 34.46875 56.835938 34.488281 56.960938 34.488281 C 57.355469 34.488281 57.730469 34.253906 57.890625 33.863281 C 58.09375 33.351563 57.847656 32.769531 57.335938 32.5625 L 53.625 31.0625 C 53.5 31.011719 53.367188 30.988281 53.234375 30.992188 Z M 24 46 L 38 46 L 38 47.117188 L 24 48.867188 Z M 38 49.132813 L 38 51 C 38 51.039063 37.988281 51.078125 37.988281 51.121094 L 27.832031 52.390625 C 27.285156 52.457031 26.898438 52.957031 26.96875 53.503906 C 27.03125 54.011719 27.460938 54.378906 27.957031 54.378906 C 28 54.378906 28.039063 54.378906 28.082031 54.371094 L 37.46875 53.199219 C 36.652344 54.851563 34.964844 56 33 56 L 29 56 C 26.242188 56 24 53.757813 24 51 L 24 50.882813 Z M 30 58 L 32 58 L 32 59 L 30 59 Z" />
      </svg> */}
      <Image
        className={styles.img}
        width="600"
        height="600"
        src={img}
        alt="картнка девушки"
        placeholder="blur"
      />
    </MainLayout>
  );
}

export async function getStaticProps({ params }) {
  console.log('server');
  console.log(params);

  // if (!params) {
  //   return {
  //     notFound: true,
  //   };
  // }

  const response = await fetch(`${process.env.API_URL}/comments`);
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

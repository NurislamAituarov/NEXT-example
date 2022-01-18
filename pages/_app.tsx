import '../styles/globals.scss';
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

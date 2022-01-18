import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Dancing+Script&family=Estonia&family=Fruktur&family=Lobster&family=Merriweather&family=Noto+Serif&family=Noto+Serif+Display:wght@200&family=Roboto:wght@100&family=Zen+Antique&family=Zilla+Slab:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import Link from 'next/link';

export default function Error() {
  return (
    <>
      <h1>Error</h1>
      <p>
        <Link href="/">
          <a>на главную</a>
        </Link>
      </p>
    </>
  );
}

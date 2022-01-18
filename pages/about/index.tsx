import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../../layout/MainLayout';
import Image from 'next/image';
import img from '../../public/womanS.jpg';
import { Button, Htag, P, Rating, Tag } from '../../components';
import s from '../../styles/Home.module.scss';
import { useState } from 'react';

export default function About() {
  const [rating, setRating] = useState<number>(2);

  return (
    <MainLayout title="Next About">
      <Htag tag="h3">About Page</Htag>
      <P size="l">lorem ipsum dolor sit amet</P>
      <P size="m">lorem ipsum dolor sit amet</P>
      <P size="s">lorem ipsum dolor sit amet</P>

      <Button arrow="right" appearance="primary">
        Click me
      </Button>
      <Button appearance="ghost">Click me</Button>

      <Tag size="m" color="primary">
        One
      </Tag>
      <Tag size="s" color="red">
        Two
      </Tag>
      <Tag size="s" color="green">
        Three
      </Tag>
      <Tag size="m" color="grey">
        Four
      </Tag>
      <Tag size="s" color="ghost">
        Four
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />

      <div className={s.imgAbout}>
        <Image src={img} alt="чудо девшка" width="880" height="500" placeholder="blur" />
      </div>
      <p>
        <Link href="/">
          <a>back</a>
        </Link>
      </p>
    </MainLayout>
  );
}

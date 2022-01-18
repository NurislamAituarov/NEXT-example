import MainLayout from '../../layout/MainLayout';
import { FC } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AuthForm from '../../components/AuthForm';
import s from '../../styles/Auth.module.scss';

export default function TypeScript({ item }) {
  return (
    <>
      <MainLayout title="TypeScript">
        <div className={s.auth_page}>
          <AuthForm item={item} />
        </div>
      </MainLayout>
    </>
  );
}

export async function getStaticProps() {
  console.log('server');

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=27fea4477bdb8c2af91b743f1f6cc1ff`,
  );
  const item = await response.json();

  if (item.cod === '404') {
    return {
      notFound: true,
    };
  }
  return {
    props: { item },
  };
}

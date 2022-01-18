import s from '../styles/Auth.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';
import { Tag } from '../components';

export default function AuthForm({ item }) {
  const [weather, setWeather] = useState('');
  const [rating, setRating] = useState(2);
  const [arr, setArray] = useState(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  function changeDisplay(num) {
    constructRating(num);
  }

  function onClick(num) {
    setRating(num);
  }

  const constructRating = (CurrentRating) => {
    const updatedArray = arr.map((item, i) => {
      return (
        <svg
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          className={cn(s.tinder, {
            [s.active]: i < CurrentRating,
          })}
          key={i}
          width="35"
          height="31"
          viewBox="0 0 35 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.4592 1.96474L20.9236 12.2334L21.0384 12.5736H21.3974L32.5548 12.5736L23.5446 18.8782L23.2378 19.0929L23.3575 19.4477L26.8092 29.6786L17.7459 23.3369L17.4592 23.1363L17.1726 23.3369L8.10932 29.6786L11.561 19.4477L11.6807 19.0929L11.3739 18.8782L2.36372 12.5736L13.5211 12.5736H13.8801L13.9949 12.2334L17.4592 1.96474Z"
            stroke="#6F6E6E"
          />
        </svg>
      );
    });

    setArray(updatedArray);
  };

  function openWeather(obj) {
    setWeather(obj);
  }
  return (
    <>
      <Formik
        // className={s.auth_form}
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поля'),
          password: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поля'),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(JSON.stringify(values, null, 2));
          // resetForm({ values: '' });
        }}>
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      {arr.map((item, i) => {
        return <span key={i}>{item}</span>;
      })}

      <Tag onClick={() => openWeather(item)} size="m" color="green">
        Погода
      </Tag>
      <p>{weather['name']}</p>
    </>
  );
}

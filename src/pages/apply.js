import React, { useState } from 'react';
import Head from 'next/head';
import DefaultLayout from '../layouts/DefaultLayout';
import { Col, Container, Row } from 'react-bootstrap';
import { ApplyConfig, fetchContent, GeneralConfig } from '../api';

import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Pixel from '../components/facebook/Pixel';
import Router from 'next/router';


export default function Apply({ data, general }) {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <>
      <Head>
        <title>Откликнуться на вакансию – AK Investment</title>
        <meta name="keywords" content="AK, Investment, AK Investment, Строительство судов, Работа в Польше" />
        <meta name="description" content="Мы профессиональная и стабильная компания, непрерывно работающая на рынке услуг, связанных со строительством судов с 2015 года. Нашей целью является предоставление качественных услуг нашим партнерам, производителям яхт и катамаранов."/>
        <link rel="icon" href="/favicon.png"/>
        <Pixel />
      </Head>
      <DefaultLayout data={general}>
        <section className="hero-banner">
          <Container>
            <Row>
              <Col xs={12}>
                <h1>
                  {data.Title}
                </h1>
                <p dangerouslySetInnerHTML={{__html: data.Description}} />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="application">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="shadow-container">
                  <Formik
                    initialValues={{
                      fullname: '',
                      email: '',
                      phone: '',
                      vacancy: '',
                      experience: '',
                    }}
                    validationSchema={
                      Yup.object().shape({
                        fullname: Yup.string().required(`Обязательное поле`),
                        email: Yup.string().required(`Обязательное поле`),
                        phone: Yup.string().required(`Обязательное поле`),
                        vacancy: Yup.string().required(`Обязательное поле`),
                        experience: Yup.string().required(`Обязательное поле`),
                      })
                    }

                    onSubmit={(values, { setSubmitting } ) => {
                      emailjs.send(
                        'service_d754ast',
                        'template_rh60klx',
                        values,
                        'qAKFpZUW6yGyXLK2G',
                      ).then(() => {
                        console.log(values);
                        setSubmitSuccess(true);
                        setTimeout(() => {
                          setSubmitSuccess(false);
                          Router.push('/thank-you');
                        }, 2000);
                      });
                    }}
                  >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue
                        /* and other goodies */
                      }) => (
                      <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <Row className="gy-4">
                          <Col xs={12}>
                            <label htmlFor="name">
                              Полное имя
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="fullname"
                              placeholder="Alexander McKinsey"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.fullname}
                            />
                            <div className="form-error">
                              {errors.fullname && touched.fullname && errors.fullname}
                            </div>
                          </Col>
                          <Col xs={12}>
                            <label htmlFor="email">
                              E-mail
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="careers@ak-inverstment.pl"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            <div className="form-error">
                              {errors.email && touched.email && errors.email}
                            </div>
                          </Col>
                          <Col xs={12}>
                            <label htmlFor="phone">
                              Контактный телефон
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              placeholder="+373 (22) 34-92-79"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                            />
                            <div className="form-error">
                              {errors.phone && touched.phone && errors.phone}
                            </div>
                          </Col>
                          <Col xs={12}>
                            <label htmlFor="phone">
                              Выберите вакансию
                            </label>
                            <select
                              className="form-select"
                              name="vacancy"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.position}
                            >
                              <option selected disabled value="">
                                Выберите со списка
                              </option>
                              <option value="Шлифовщик-ламиновщик">
                                Шлифовщик-ламиновщик
                              </option>
                              <option value="Электрик">
                                Электрик
                              </option>
                              <option value="Столяр">
                                Столяр
                              </option>
                              <option value="Лакировщик">
                                Лакировщик
                              </option>
                              <option value="Обойщик">
                                Обойщик
                              </option>
                              <option value="Гидравлик">
                                Гидравлик
                              </option>
                              <option value="Установщик стекл">
                                Установщик стекл
                              </option>
                              <option value="Тиковый плотник">
                                Тиковый плотник
                              </option>
                              <option value="Лакировщик мебели">
                                Лакировщик мебели
                              </option>
                            </select>
                            <div className="form-error">
                              {errors.vacancy && touched.vacancy && errors.vacancy}
                            </div>
                          </Col>
                          <Col xs={12}>
                            <label htmlFor="phone">
                              Опыт работы
                            </label>
                            <select
                              className="form-select"
                              name="vacancy"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.experience}
                            >
                              <option selected disabled value="">
                                Выберите со списка
                              </option>
                              <option value="Нету">
                                Нету
                              </option>
                              <option value="Меньше 1 года">
                                Меньше 1 года
                              </option>
                              <option value="От 1 до 3 лет">
                                От 1 до 2 лет
                              </option>
                              <option value="От 3 до 5 лет">
                                От 3 до 5 лет
                              </option>
                              <option value="5 лет и больше">
                                5 лет и больше
                              </option>
                            </select>
                            <div className="form-error">
                              {errors.experience && touched.experience && errors.experience}
                            </div>
                          </Col>
                          <Col xs={12}>
                            <Row className="justify-content-center">
                              <Col xs="auto">
                                <button className={`btn btn-primary ${submitSuccess && 'disabled'}`} type="submit">
                                  {data.Button}
                                </button>
                              </Col>
                            </Row>
                          </Col>
                          {
                            submitSuccess && (
                              <Col xs={12}>
                                <div className="form-success">
                                  Ваш запрос успешно отправлено!
                                </div>
                              </Col>
                            )
                          }
                        </Row>
                      </form>
                    )}
                  </Formik>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const data = await fetchContent('applypage', ApplyConfig);
    const general = await fetchContent('general', GeneralConfig);

    return {
      props: {
        data,
        general
      },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {},
  };
};
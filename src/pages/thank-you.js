import React from 'react';
import Head from 'next/head';
import DefaultLayout from '../layouts/DefaultLayout';
import { Col, Container, Row } from 'react-bootstrap';
import { fetchContent, GeneralConfig } from '../api';
import Pixel from '../components/facebook/Pixel';
import Link from 'next/link';

export default function ThankYou({general}) {
  return (
    <>
      <Head>
        <title>Успешно! – AK Investment</title>
        <meta name="keywords" content="AK, Investment, AK Investment, Строительство судов, Работа в Польше" />
        <meta name="description" content="Мы профессиональная и стабильная компания, непрерывно работающая на рынке услуг, связанных со строительством судов с 2015 года. Нашей целью является предоставление качественных услуг нашим партнерам, производителям яхт и катамаранов."/>
        <link rel="icon" href="/favicon.png"/>
        <Pixel />
      </Head>
      <DefaultLayout data={general}>
        <section className="privacy-policy">
          <Container>
            <Row>
              <section className="hero-banner">
                <Container>
                  <Row>
                    <Col xs={12}>
                      <h1>
                        Заявку успешно отправлено!
                      </h1>
                      <p>
                        Спасибо! Ваша заявка получена.<br />
                        Менеджер свяжется с вами в ближайшем времени.
                      </p>
                      <Link href="/">
                        <button className="btn btn-primary">
                          Вернуться на главную
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const general = await fetchContent('general', GeneralConfig);

    return {
      props: {
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
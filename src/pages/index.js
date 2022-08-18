import Head from 'next/head'
import DefaultLayout from '../layouts/DefaultLayout';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import _ from 'lodash';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useRef } from 'react';

import Electrician from '../images/icons/jobs/electrician.svg';
import SliderImage from '../images/slider/placeholder.jpg';
import SliderArrowLeft from '../images/icons/slider-arrow-left.svg';
import SliderArrowRight from '../images/icons/slider-arrow-right.svg';
import PhoneIcon from '../images/icons/phone.svg';
import EmailIcon from '../images/icons/email.svg';
import LocationIcon from '../images/icons/location.svg';
import PartnerImage from '../images/partners/placeholder.png';
import MapPlaceholder from '../images/map/placeholder.jpg';

export default function Home() {
  // swiper arrows
  const sliderRef = useRef();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    console.log(sliderRef);
  }, []);

  return (
    <>
      <Head>
        <title>AK Investment</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <DefaultLayout>
        <section className="hero-banner">
          <Container>
            <Row>
              <Col xs={12}>
                <h1>
                  We are looking for talents!
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <button className="btn btn-primary">
                  Apply for position
                </button>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="opened-positions">
          <Container>
            <Row>
              <Col xs={12}>
                <Row className="title-row justify-content-between align-items-center">
                  <Col xs="auto">
                    <h4>
                      Opened positions
                    </h4>
                  </Col>
                  <Col xs="auto">
                    <div className="vacancies-slider-arrows">
                      <div className="arrow-button" onClick={handlePrev}>
                        <Image src={SliderArrowLeft} width={18} height={18} alt="Arrow Left Icon"/>
                      </div>
                      <div className="arrow-button" onClick={handleNext}>
                        <Image src={SliderArrowRight} width={18} height={18} alt="Arrow Right Icon"/>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Swiper
                  ref={sliderRef}
                  spaceBetween={15}
                  slidesPerView={4}
                  speed={800}
                  className="vacancies-slider"
                >
                  {
                    _.times(6, () => (
                      <SwiperSlide>
                        <div className="vacancy-block">
                          <div className="block-title">
                            <div className="block-icon">
                              <Image src={Electrician} alt="AK Invsetment – Electrician Icon" width={48} height={48}/>
                            </div>
                            <Link href="#">
                              Electrician
                            </Link>
                          </div>
                          <div className="block-description">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="block-action">
                            <Link href="#">
                              <a className="link-with-arrow">
                                Read more
                              </a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="wide-slider">
          <Container>
            <Row>
              <Col xs={12}>
                <h3>
                  Timely payments, housing,
                  comfortable working conditions
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </Col>
            </Row>
          </Container>
          <Container fluid className="p-0">
            <Row>
              <Col xs={12}>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={800}
                  className="homepage-slider"
                >
                  <SwiperSlide>
                    <Image src={SliderImage} layout="fill" objectFit="cover" objectPosition="center"
                           alt="AK Investment – Slider Image 1"/>
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="double-section">
          <Container>
            <Row>
              <Col lg={8}>
                <Row>
                  <Col xs={12} className="about-us">
                    <h3>
                      Who we are?
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.<br /><br />

                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </p>
                    <a href="#" className="link-with-arrow arrow-down">
                      Read more
                    </a>
                  </Col>
                  <Col xs={12} className="partners">
                    <h4>
                      Our partners
                    </h4>
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={3}
                      speed={800}
                      className="partners-slider"
                    >
                      {
                        _.times(4, () => (
                          <SwiperSlide>
                            <Image src={PartnerImage} layout="fill" objectFit="contain" objectPosition="left"
                                   alt="AK Investment – Partner Placeholder" />
                          </SwiperSlide>
                        ))
                      }
                    </Swiper>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} className="employment">
                <h3>
                  Employment steps
                </h3>
                <div className="steps">
                  <div className="step-block">
                    <div className="block-number">
                      1
                    </div>
                    <div className="block-content">
                      <div className="block-title">
                        Application
                      </div>
                      <div className="block-description">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="step-block">
                    <div className="block-number">
                      2
                    </div>
                    <div className="block-content">
                      <div className="block-title">
                        Gathering required documents
                      </div>
                      <div className="block-description">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="step-block">
                    <div className="block-number">
                      3
                    </div>
                    <div className="block-content">
                      <div className="block-title">
                        Happy employment
                      </div>
                      <div className="block-description">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">
                  Apply for position
                </button>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="contacts">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="contacts-container">
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <h3>
                        Contacts
                      </h3>
                      <div className="contacts-blocks">
                        <div className="contacts-block">
                          <div className="block-icon">
                            <Image src={PhoneIcon} width={18} height={18} alt="AK Investment – Phone Icon" />
                          </div>
                          <div className="block-title">
                            <Link href="tel:+38 (000) 00 00 000">
                              +38 (000) 00 00 000
                            </Link>
                          </div>
                        </div>
                        <div className="contacts-block">
                          <div className="block-icon">
                            <Image src={EmailIcon} width={18} height={18} alt="AK Investment – Email Icon" />
                          </div>
                          <div className="block-title">
                            <Link href="mailto:careers@ak-investment.com">
                              careers@ak-investment.com
                            </Link>
                          </div>
                        </div>
                        <div className="contacts-block">
                          <div className="block-icon">
                            <Image src={LocationIcon} width={18} height={18} alt="AK Investment – Location Icon" />
                          </div>
                          <div className="block-title">
                            <Link href="#">
                              Gdansk, Poland
                            </Link>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary">
                        Callback
                      </button>
                    </Col>
                    <Col lg={6}>
                      <div className="map-block">
                        <Image src={MapPlaceholder} layout="fill" objectFit="cover" objectPosition="center"
                               alt="AK Investment – Map Placeholder" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  )
}

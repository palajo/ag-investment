import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { strapiImage } from '../../api';
import Script from 'next/script';
import { useRouter } from 'next/router';

function Footer({ data }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', 'G-QZRJV9EX2B', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <footer>
        <Container>
          <Row className="justify-content-between gy-5">
            <Col xs="auto">
              <Link href="/">
                <a>
                  <Image src={strapiImage(data.LogoWhite.data.attributes.url)} layout="fixed" height={72} width={120}
                         objectFit="contain" objectPosition="left" alt="icon" />
                </a>
              </Link>
            </Col>
            <Col xs="auto">
              <Row>
                <Col xs={12}>
                  <div className="contacts-blocks">
                    {data.FooterContacts.Contact.map((contact, index) => (
                      <div className="contacts-block" key={index}>
                        <div className="block-icon">
                          <Image src={strapiImage(contact.Icon.data.attributes.url)} layout="fixed" width={18} height={18} alt="icon" />
                        </div>
                        <div className="block-title">
                          {
                            contact.Type === 'Phone' ? (
                              <Link href={`tel:${contact.Text}`}>
                                {contact.Text}
                              </Link>
                            ) : contact.Type === 'Email' ? (
                              <Link href={`mailto:${contact.Text}`}>
                                {contact.Text}
                              </Link>
                            ) : (
                              <Link href="#">
                                {contact.Text}
                              </Link>
                            )
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-between">
            <Col xs="auto">
              <p className="copyright">
                {data.Copyright}
              </p>
            </Col>
            <Col xs="auto">
              <Link href="/privacy-policy">
                <a className="privacy-policy-link">
                  Privacy Policy
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>

      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-QZRJV9EX2B" />
      <Script strategy="lazyOnload" id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QZRJV9EX2B', { page_path: window.location.pathname });
        `}
      </Script>

      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-240948004-1" />
      <Script strategy="lazyOnload" id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-240948004-1', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}

export default Footer;
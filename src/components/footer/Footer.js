import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { strapiImage } from '../../api';
import Script from 'next/script';

function Footer({ data }) {
  return (
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
        <Row>
          <Col xs="auto">
            <p className="copyright">
              {data.Copyright}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

import { strapiImage } from '../../api';

export default function Header({ data }) {
  return (
    <header>
      <Container fluid>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Link href="/">
              <a>
                <Image src={strapiImage(data.Logo.data.attributes.url)} layout="fixed" height={72} width={120}
                       objectFit="contain" objectPosition="left" alt="icon" />
              </a>
            </Link>
          </Col>
          <Col xs="auto" className="d-none d-lg-block">
            <ul className="header-contacts">
              {data.HeaderContacts.Contact.map((contact, index) => (
                <li key={index}>
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
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
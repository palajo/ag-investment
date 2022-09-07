import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../images/logo-2.svg';

function Header() {
  return (
    <header>
      <Container fluid>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Link href="/">
              <a>
                <Image src={Logo} alt="AK Investment – Logo" height={72} objectFit="contain" objectPosition="left" />
              </a>
            </Link>
          </Col>
          <Col xs="auto" className="d-none d-lg-block">
            <ul className="header-contacts">
              <li>
                <Link href="#">
                  Gdansk, Poland
                </Link>
              </li>
              <li>
                <Link href="tel:+48 (739) 441 878">
                  +48 (739) 441 878
                </Link>
              </li>
              <li>
                <Link href="mailto:akinvestpolka@gmail.com">
                  akinvestpolka@gmail.com
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
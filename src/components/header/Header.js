import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../images/logo.svg';

function Header() {
  return (
    <header>
      <Container fluid>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Link href="/">
              <a>
                <Image src={Logo} alt="AK Investment – Logo" />
              </a>
            </Link>
          </Col>
          <Col xs="auto">
            <ul className="header-contacts">
              <li>
                <Link href="#">
                  Gdansk, Poland
                </Link>
              </li>
              <li>
                <Link href="tel:+38 (000) 00 00 000">
                  +38 (000) 00 00 000
                </Link>
              </li>
              <li>
                <Link href="mailto:careers@ak-investment.com">
                  careers@ak-investment.com
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
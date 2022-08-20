import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

import LogoWhite from '../../images/logo-white.svg';
import PhoneIcon from '../../images/icons/phone.svg';
import EmailIcon from '../../images/icons/email.svg';

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="justify-content-between gy-5">
          <Col xs="auto">
            <Link href="/">
              <a>
                <Image src={LogoWhite} alt="AK Investment – Logo" />
              </a>
            </Link>
          </Col>
          <Col xs="auto">
            <Row>
              <Col xs={12}>
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
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs="auto">
            <p className="copyright">
              © Copyright 2022 — AK Investment. All rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
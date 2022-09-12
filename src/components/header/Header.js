import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

import { strapiImage } from '../../api';
import CloseIcon from '../../images/icons/close.svg';

export default function Header({ data }) {
  const [showBrugermenu, setShowBurgermenu] = useState(false);

  const handleShowBurgermenu = () => setShowBurgermenu(!showBrugermenu);

  return (
    <>
      <header>
        <Container fluid>
          <Row className="justify-content-between align-items-center align-items-lg-start">
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
            <Col xs="auto" className="d-lg-none">
              <div className="burgermenu-toggle" onClick={() => handleShowBurgermenu()}>
                <div className="title">
                  Меню
                </div>
                <div className="icon">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className={`burgermenu ${showBrugermenu ? 'active' : null}`}>
        <Row className="gy-3 justify-content-end">
          <Col xs="auto">
            <div className="close-icon" onClick={() => handleShowBurgermenu()}>
              <Image src={CloseIcon} layout="fixed" width={36} height={36} />
            </div>
          </Col>
          <Col xs={12}>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">
                    Главная
                  </a>
                </Link>
                <Link href="/vacancies">
                  <a className="nav-link">
                    Вакансии
                  </a>
                </Link>
                <Link href="/apply">
                  <a className="nav-link">
                    Откликнуться на вакансию
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
}
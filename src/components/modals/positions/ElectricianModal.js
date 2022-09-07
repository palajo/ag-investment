import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import Image from 'next/image';
import Electrician from '../../../images/icons/jobs/electrician.svg';
import LocationIcon from '../../../images/icons/location.svg';
import ApplyModal from '../ApplyModal';
import Link from 'next/link';

function ElectricianModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="link-with-arrow arrow-down" onClick={handleShow}>
        В деталях
      </a>
      <Modal className="position-modal" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton/>
        <Modal.Body>
          <div className="position-modal-block">
            <div className="block-title">
              <div className="block-icon">
                <Image src={Electrician} width={48} height={48} alt="AK Investment – Electrician Icon"/>
              </div>
              <div className="block-name">
                Електрик
              </div>
            </div>
            <div className="block-benefits">
              <Row className="gy-3">
                <Col xs="auto">
                  <div className="benefit-block">
                    <div className="block-icon">
                      <Image src={LocationIcon} width={14} height={14}
                             alt="AK Investment – Location Icon"/>
                    </div>
                    <div className="block-title">
                      Польща, Гданськ
                    </div>
                  </div>
                </Col>
                <Col xs="auto">
                  <div className="benefit-block">
                    <div className="block-icon">
                      <Image src={LocationIcon} width={14} height={14}
                             alt="AK Investment – Location Icon"/>
                    </div>
                    <div className="block-title">
                      20-25 злотих /год.
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="block-description">
              <p>
                Робота електриком на виробництві кораблів-катамаранів.<br />
                Стака залежить від рівню знань, досвід роботи та вміння читати креслення обов&apos;язкові.
              </p>
            </div>
            <div className="block-requirements">
              <div className="block-title">
                Ми пропонуємо
              </div>
              <ul className="requirements-list">
                <li>
                  Вчасну вилпати заробітної плати
                </li>
                <li>
                  Стабільний графік роботи
                </li>
                <li>
                  Допомогу з житлом (за необхідності)
                </li>
              </ul>
            </div>
            <div className="block-requirements">
              <div className="block-title">
                Вимоги
              </div>
              <ul className="requirements-list">
                <li>
                  Довсід роботи
                </li>
                <li>
                  Вміння читати креслення
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ElectricianModal;
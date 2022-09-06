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
        In details
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
                Electrician
              </div>
            </div>
            <div className="block-benefits">
              <Row>
                <Col xs="auto">
                  <div className="benefit-block">
                    <div className="block-icon">
                      <Image src={LocationIcon} width={14} height={14}
                             alt="AK Investment – Location Icon"/>
                    </div>
                    <div className="block-title">
                      Poland, Gdasnk
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
                      15 zl/hr
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="block-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque et illum iure neque perspiciatis
                saepe voluptas? Deleniti, ea nobis! Corporis dolorum facilis itaque laboriosam laborum magnam
                necessitatibus repellendus voluptates.<br /><br/>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque et illum iure neque perspiciatis
                saepe voluptas? Deleniti, ea nobis! Corporis dolorum facilis itaque laboriosam laborum magnam
                necessitatibus repellendus voluptates.
              </p>
            </div>
            <div className="block-requirements">
              <div className="block-title">
                Benefits
              </div>
              <ul className="requirements-list">
                <li>
                  Punct numero uno
                </li>
                <li>
                  Punct numero duo
                </li>
                <li>
                  Punct numero tres
                </li>
              </ul>
            </div>
            <div className="block-requirements">
              <div className="block-title">
                Requirements
              </div>
              <ul className="requirements-list">
                <li>
                  Punct numero uno
                </li>
                <li>
                  Punct numero duo
                </li>
                <li>
                  Punct numero tres
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
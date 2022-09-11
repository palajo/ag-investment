import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import Image from 'next/image';
import { strapiImage } from '../../api';

function PositionModal({ data, buttonTitle }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="link-with-arrow arrow-down" onClick={handleShow}>
        {buttonTitle}
      </a>
      <Modal className="position-modal" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton/>
        <Modal.Body>
          <div className="position-modal-block">
            <div className="block-title">
              <div className="block-icon">
                <Image src={strapiImage(data.Icon.data.attributes.url)} layout="fixed" width={48} height={48} alt="icon" />
              </div>
              <div className="block-name">
                {data.Title}
              </div>
            </div>
            <div className="block-benefits">
              <Row className="gy-3">
                {data.Benefits.map((benefit, index) => (
                  <Col xs="auto" key={index}>
                    <div className="benefit-block">
                      <div className="block-icon">
                        <Image src={strapiImage(benefit.Icon.data.attributes.url)} layout="fixed" width={14} height={14} alt="icon" />
                      </div>
                      <div className="block-title">
                        {benefit.Text}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="block-description">
              <p dangerouslySetInnerHTML={{__html: data.Description}} />
            </div>
            <div className="block-requirements">
              <div className="block-title">
                {data.Offer.Title}
              </div>
              <ul className="requirements-list">
                {data.Offer.Punct.map((punct, index) => (
                  <li key={index}>
                    {punct.Text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="block-requirements">
              <div className="block-title">
                {data.Requirements.Title}
              </div>
              <ul className="requirements-list">
                {data.Requirements.Punct.map((punct, index) => (
                  <li key={index}>
                    {punct.Text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PositionModal;
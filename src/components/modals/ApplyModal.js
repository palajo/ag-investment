import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

function ApplyModal({ handleClosePreviousModal }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (handleClosePreviousModal) {
      setTimeout(() => setShow(true), 300);
    } else {
      setShow(true)
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Apply for position
      </button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <h3>
            Apply for position
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <form action="#">
            <Row className="gy-4">
              <Col xs={12}>
                <label htmlFor="name">
                  Full name
                </label>
                <input type="text" className="form-control" name="name" placeholder="Alexander McKinsey"/>
              </Col>
              <Col xs={12}>
                <label htmlFor="email">
                  E-mail
                </label>
                <input type="text" className="form-control" name="email"
                       placeholder="careers@ak-inverstment.pl"/>
              </Col>
              <Col xs={12}>
                <label htmlFor="phone">
                  Contact phone
                </label>
                <input type="text" className="form-control" name="phone" placeholder="+38 (000) 00 00 000"/>
              </Col>
              <Col xs={12}>
                <label htmlFor="phone">
                  Upload your CV
                </label>
                <input className="form-control form-file" type="file" id="cv" />
              </Col>
              <Col xs={12}>
                <label htmlFor="phone">
                  Choose position
                </label>
                <select className="form-select" name="position">
                  <option selected disabled>
                    Select from the list
                  </option>
                  <option value="electrician">
                    Electrician
                  </option>
                  <option value="electrician">
                    Electrician
                  </option>
                  <option value="electrician">
                    Electrician
                  </option>
                  <option value="electrician">
                    Electrician
                  </option>
                </select>
              </Col>
              <Col xs={12}>
                <button className="btn btn-primary">
                  Apply
                </button>
              </Col>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ApplyModal;
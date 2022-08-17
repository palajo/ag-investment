import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col xs={12}>
            Header
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
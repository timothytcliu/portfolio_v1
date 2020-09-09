import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Navbar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>LinkedIn</p>
          </Col>
          <Col>
            <p>Github</p>
          </Col>
          <Col>
            <p>timothytcliu@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;

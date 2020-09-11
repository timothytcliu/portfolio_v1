import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Navbar = () => {
  return (
    <>
      <Container>
        <Row
          style={{
            margin: '0',
            padding: '0',
            fontSize: 'calc(8px + 1.5vmin)',
          }}
        >
          <Col>
            <p>
              <FaLinkedin color="#0e76a8" />
            </p>
          </Col>
          <Col>
            <p>
              <FaGithub />
            </p>
          </Col>
          <Col>
            <p>
              <FiMail color="#D44638" />
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;

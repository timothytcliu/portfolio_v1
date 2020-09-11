import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <>
      <Jumbotron fluid style={{ backgroundColor: '#8080806b' }}>
        <Container fluid>
          <Row>
            <Col s="12">
              <h1 className="display-1"> Timothy Liu </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Front-End Software Developer</h3>
              <br />
            </Col>
          </Row>
          <Row
            style={{
              margin: '0',
              padding: '0',
            }}
          >
            <Col>
              <h2>
                <FaLinkedin color="#0e76a8" /> <FaGithub />{' '}
                <FiMail color="#D44638" />
              </h2>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Hero;

import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Contacts from './contact';
import '../App.css';

const Hero = () => {
  return (
    <>
      <Jumbotron fluid className="hero">
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
          <Contacts />
        </Container>
      </Jumbotron>
    </>
  );
};

export default Hero;

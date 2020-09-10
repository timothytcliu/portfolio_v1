import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

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
          <p>Welcome To My Portfolio</p>
          <hr />
        </Container>
      </Jumbotron>
    </>
  );
};

export default Hero;

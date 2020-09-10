import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const Projects = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>[Project Title]</CardTitle>
              </CardBody>
              <img
                width="100%"
                src="#"
                alt="[project image/gif]"
                style={{ backgroundColor: 'gray' }}
              />
              <CardBody>
                <CardText>[Card subtitle]</CardText>
                <Button href="#">Code</Button>
                <Button href="#">Live</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>[Project Title]</CardTitle>
              </CardBody>
              <img
                width="100%"
                src="#"
                alt="[project image/gif]"
                style={{ backgroundColor: 'gray' }}
              />
              <CardBody>
                <CardText>[Card subtitle]</CardText>
                <Button href="#">Code</Button>
                <Button href="#">Live</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>[Project Title]</CardTitle>
              </CardBody>
              <img
                width="100%"
                src="#"
                alt="[project image/gif]"
                style={{ backgroundColor: 'gray' }}
              />
              <CardBody>
                <CardText>[Card subtitle]</CardText>
                <Button href="#">Code</Button>
                <Button href="#">Live</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>[Project Title]</CardTitle>
              </CardBody>
              <img
                width="100%"
                src="#"
                alt="[project image/gif]"
                style={{ backgroundColor: 'gray' }}
              />
              <CardBody>
                <CardText>[Card subtitle]</CardText>
                <Button href="#">Code</Button>
                <Button href="#">Live</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;

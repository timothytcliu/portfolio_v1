import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

const Projects = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>[Project Title]</CardTitle>
              </CardBody>
              <img
                width="100%"
                src="#"
                alt="[project screenshot/gif]"
                style={{ backgroundColor: 'gray' }}
              />
              <CardBody>
                <CardText>[Card subtitle]</CardText>
                <Button href="#" className="mr-3">
                  Code
                </Button>
                <Button href="#" className="ml-3">
                  Live
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>[Project Title]</CardTitle>
              </CardBody>
              <img
                width="100%"
                src="#"
                alt="[project screenshot/gif]"
                style={{ backgroundColor: 'gray' }}
              />
              <CardBody>
                <CardText>[Card subtitle]</CardText>
                <Button href="#" className="mr-3">
                  Code
                </Button>
                <Button href="#" className="ml-3">
                  Live
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>[Project Title]</CardTitle>
              </CardBody>
              <img
                width="100%"
                src="#"
                alt="[project screenshot/gif]"
                style={{ backgroundColor: 'gray' }}
              />
              <CardBody>
                <CardText>[Card subtitle]</CardText>
                <Button href="#" className="mr-3">
                  Code
                </Button>
                <Button href="#" className="ml-3">
                  Live
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>[Project Title]</CardTitle>
              </CardBody>
              <img
                width="100%"
                src="#"
                alt="[project screenshot/gif]"
                style={{ backgroundColor: 'gray' }}
              />
              <CardBody>
                <CardText>[Card subtitle]</CardText>
                <Button href="#" className="mr-3">
                  Code
                </Button>
                <Button href="#" className="ml-3">
                  Live
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;

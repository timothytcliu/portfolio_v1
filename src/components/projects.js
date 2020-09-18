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
import BootstrapNucamp from '../img/bootstrap-nucamp-project.png';

/**
 * Displays app projects in reactstrap card elements
 */
const Projects = () => {
  return (
    <>
      <Container fluid="lg">
        <Row>
          <Col className="px-0">
            <Card className="mb-4">
              <img
                width="100%"
                src={BootstrapNucamp}
                alt="bootstrap-nucamp-project"
              />
              <CardBody style={{ backgroundColor: 'gray' }}>
                <CardTitle>Nu Camping</CardTitle>
                <CardText>Technologies: HTML, Bootstrap 4</CardText>
                <Button
                  href="https://github.com/timothytcliu/Bootstrap-Nucamp-project"
                  target="_blank"
                  className="mr-3"
                  size="sm"
                >
                  Code
                </Button>
                <Button
                  href="https://timothytcliu.github.io/Bootstrap-Nucamp-project/index.html"
                  target="_blank"
                  className="ml-3"
                  size="sm"
                >
                  Live
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
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
                <Button href="#" className="mr-3" size="sm">
                  Code
                </Button>
                <Button href="#" className="ml-3" size="sm">
                  Live
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
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
                <Button href="#" className="mr-3" size="sm">
                  Code
                </Button>
                <Button href="#" className="ml-3" size="sm">
                  Live
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
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
                <Button href="#" className="mr-3" size="sm">
                  Code
                </Button>
                <Button href="#" className="ml-3" size="sm">
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

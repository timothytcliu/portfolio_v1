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
import { projectsInfo } from './projectsInfo';
import '../App.css';

/**
 * Displays app projects in reactstrap card elements,
 * dynamically rendered from imported projectsInfo array.
 */
const Projects = () => {
  const renderProjects = projectsInfo.map(project => {
    return (
      <Container fluid="lg">
        <Row>
          <Col className="px-0">
            <Card className="mb-4">
              <img width="100%" src={project.image} alt={project.alt} />
              <CardBody className="card-color">
                <CardTitle>{project.name}</CardTitle>
                <CardText>{project.technologies}</CardText>
                <Button
                  href={project.github}
                  target="_blank"
                  className="mr-3"
                  size="sm"
                  color="info"
                >
                  See Code
                </Button>
                <Button
                  href={project.website}
                  target="_blank"
                  className="ml-3"
                  size="sm"
                  color="info"
                >
                  See Website
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  });

  return <>{renderProjects}</>;
};

export default Projects;

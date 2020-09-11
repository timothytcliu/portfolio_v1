import React, { useState } from 'react';
import { Container, Row, Col, Popover, PopoverHeader } from 'reactstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const EmailPopover = props => {
  return (
    <Popover
      placement="bottom"
      isOpen={props.popoverOpen}
      target="emailPopper"
      toggle={props.toggle}
    >
      <PopoverHeader>timothytcliu@gmail.com</PopoverHeader>
    </Popover>
  );
};

const Contacts = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
      <Container>
        <Row
          style={{
            margin: '0',
            padding: '0',
          }}
        >
          <Col>
            <h2>
              <a
                href="https://www.linkedin.com/in/timothy-liu-784990138/"
                target="_blank"
              >
                <FaLinkedin color="#0e76a8" />
              </a>{' '}
              <a href="https://github.com/timothytcliu" target="_blank">
                <FaGithub color="white" />
              </a>{' '}
              <FiMail color="#D44638" />
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contacts;

import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import eu from "../img/about_us/EN_FundedbytheEU_RGB_POS.png";
import tier2 from "../img/about_us/63a57763ef1dd939001828.png";


const LearnMore = () => {

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>What is SCHEMA lab?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            SCHEMA Lab is an open-source platform developed to assist researchers and scientists in managing and executing computational tasks efficiently. The platform specializes in submitting and monitoring containerized task execution requests, providing a seamless environment for your computational needs.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>The key features currently supported:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item className="border-0 text-muted">
              <strong>Task Management</strong>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 text-muted">
              <strong>Submit and Run Tasks:</strong> Easily submit and run computational tasks.
            </ListGroup.Item>
            <ListGroup.Item className="border-0 text-muted">
              <strong>Track Task Status:</strong> Stay informed with clear status indicators showing whether tasks are submitted, running, completed, or have encountered errors.
            </ListGroup.Item>
            <ListGroup.Item className="border-0 text-muted">
              <strong>Manage with Ease:</strong> Cancel tasks with just a click, ensuring flexibility and control over your computational workflows.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    <Row className="mt-4">
        <Col>
            <ListGroup variant="flush">
                <ListGroup.Item className="border-0 text-muted">
                    <strong>Computational Experiments</strong>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 text-muted">
                    This interface provides a streamlined experience for creating and managing computational experiments.
                </ListGroup.Item>
                <ListGroup.Item className="border-0 text-muted">
                    <strong>Create Experiments:</strong> Combine one or more tasks into a computational experiment.
                </ListGroup.Item>
                <ListGroup.Item className="border-0 text-muted">
                    <strong>Manage Tasks:</strong> Easily select and group tasks using checkboxes.
                </ListGroup.Item>
                <ListGroup.Item className="border-0 text-muted">
                    <strong>View Details:</strong> Access detailed information about each task and experiment.
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>
      <Row className="mt-3">
        <Col>
          <p>
            Open-source code for SCHEMA lab is available here: <a href="https://github.com/athenarc/schema-lab" target="_blank" rel="noopener noreferrer" className='text-dark'>SCHEMA lab</a>
          </p>
        </Col>
      </Row>
        <Row className="justify-content-center">
            <Col className="justify-content-center mb-4">
                <Row>
                    <Col xs={12}>
                        SCHEMA lab was developed during <Link to={'https://www.tier2-project.eu/'} target={'_blank'}>TIER2 project</Link>. It receives funding from the European Union's Horizon Europe research and innovation programme under grant agreement No 101094817. Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union or the European Research Executive Agency (REA). Neither the EU nor REA can be held responsible for them.
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                    <Image
                        src={eu}
                        alt='EU flag'
                        style={{ width: 'auto', height: '50px' }}
                    />
                    <Image
                        src={tier2}
                        alt='Tier2 logo'
                        style={{ width: 'auto', height: '50px' }}
                    />
                </Row>
            </Col>
        </Row>
    </Container>
  );
};

export default LearnMore;
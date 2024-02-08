import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container class="page-container">
            <Row>
                <Col md={4}>
                    <h1 className="display-5">About</h1>
                </Col>
                <Col md={8}>
                    <p className="display-6 about" style={{ fontWeight: '600' }}>

                    </p> 
                </Col>
            </Row>
            <Row style={{ paddingTop: '60px' }}>
                <Col md={4}></Col>
                <Col md={4}>
                    <p>
                        <span>Aenean et tortor at risus. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Ac felis donec et odio pellentesque diam volutpat. Id velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci a.</span>
                    </p>
                </Col>
                <Col md={2}></Col>
                <Col md={2}>
                    <h5>
                        Dillon Han
                    </h5>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
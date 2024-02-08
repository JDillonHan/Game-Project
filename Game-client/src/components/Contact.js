import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="page-container">
            <Row>
                <Col md={4}>
                    <h1>Contact Us</h1>
                </Col>
                <Col md={8}>
                    <p>Thank you for your interest! If you have any questions or problems, feel free to reach out to me using my contact information below.</p>
                    <p>
                        <strong>Phone</strong>
                        <br />
                        <a href="tel: +1 123-456-7890" className="contact-link">
                            +1 123-456-7890
                        </a>
                    </p>
                    <p>
                        <strong>Email</strong>
                        <br />
                        <a href="mailto:contact@games.com" className="contact-link">
                            contact@example.com
                        </a>
                    </p>

                    <p>I am available from Monday to Friday, 10:00 AM - 5:00 PM.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact
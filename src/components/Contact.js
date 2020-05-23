import React from 'react';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Soical Icons
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return (
        <Container className="contact-page pt-5 text-center" id="Contact">
            <Row className="pb-4">
                <Col className="text-center">
                    <h1>Contact Me</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={true} className="p-2">
                    <SocialIcon className="socialLink" url="https://www.linkedin.com/in/martha-schiebel" />
                    <SocialIcon className="socialLink" url="https://github.com/Sapfirelove" />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
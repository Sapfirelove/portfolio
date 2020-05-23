import React from 'react';

import Profile from '../Assets/profile.jpeg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

function About() {

    return (
        <Container className="border-bottom about-page pt-5" id="About">
            <Jumbotron className="bg-transparent">
                <Row className="justify-content-center pb-4">
                    <Col className="text-center">
                    <h1>About Me</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg={true} className="p-2 text-center">
                        <img src={Profile} alt="profile of Martha" style={{width: 'auto', maxWidth: '100%', height: 'auto'}} />
                    </Col>
                    <Col lg={true} className="p-2">
                        <p>In 2016, I combined my love of computers with my artistic passion to become a web developer. </p>
                        <p>In 2017, I stumbled upon a course on HTML/CSS. I was intrigued, falling into a hole of code. I was hooked, excited, thrilled to find any information on other languages. </p>
                        <p>In 2018, I enrolled in a Bachelor’s program, Cloud and System Administration, at Western Governors University. </p>
                        <p>Currently, I am completing my goal of becoming a Full-Stack Developer. </p>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
        
    );
}

export default About;
import React from 'react';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

import marthaduzzart from '../Assets/marthaduzzart.png';
import backgroundcolorgen from '../Assets/backgroundcolorgen.png';
import robofriends from '../Assets/robofriends.png';

function Projects() {

    return (
        <Container className="border-bottom projects-page p-5 text-center" id="Projects">
            <Row className="pb-4">
                <Col className="text-center">
                <h1>Featured Works</h1>
                </Col>
            </Row>
                <Container className="justify-content-center">
                    <CardDeck>
                        <Card className="CardShadow">
                            <Card.Img variant="top" src={marthaduzzart} />
                            <Card.Body>
                                <Card.Title>MarthaDuzzArt's Website <br /> (Unsupported) </Card.Title>
                                <Card.Text>
                                    React website created to showcase my artistc side. 
                                </Card.Text>
                                <Button 
                                href="https://marthaduzzart.netlify.app/#/" 
                                target="_blank" 
                                variant="dark">View</Button>
                            </Card.Body>
                        </Card>
                        <Card className="CardShadow">
                            <Card.Img variant="top" src={backgroundcolorgen} />
                            <Card.Body>
                                <Card.Title>Background Color Generator</Card.Title>
                                <Card.Text>
                                    My solution ZTM Episode 134. 
                                </Card.Text>
                                <Button 
                                href="https://sapfirelove.github.io/background-generator/" 
                                target="_blank" 
                                variant="dark">View</Button>
                            </Card.Body>
                        </Card>
                        <Card className="CardShadow">
                            <Card.Img variant="top" src={robofriends} />
                            <Card.Body>
                                <Card.Title>Robofriends</Card.Title>
                                <Card.Text>
                                    A very basic React app I created while following the Udemy course by Andrei Neagoie. 
                                </Card.Text>
                                <Button 
                                href="https://sapfirelove.github.io/robofriends/"
                                target="_blank" 
                                variant="dark">View</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
        </Container>
    );
}

export default Projects;
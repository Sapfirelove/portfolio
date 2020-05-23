import React from 'react';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <Container className="p-0" fluid={true}>
      <Header />
      <Row className="text-center p-5">
        <Col className="text-center">
        <h1>Hello! Check out my work, and get in touch below.</h1>
        </Col>
      </Row>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;

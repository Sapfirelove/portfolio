import React from 'react';

//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//React-Scroll
import { Link } from 'react-scroll';

class Header extends React.Component {
    render() {
        return (
            <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand href="">Martha Schiebel</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                    <Link
                        to="Projects" 
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500} 
                        className='nav-link'
                        activeClass='active'
                        >
                            Projects
                        </Link>

                        <Link
                        to='About' 
                        spy={true} 
                        smooth={true}
                        offset={0} 
                        duration={500} 
                        className='nav-link'
                        activeClass='active'
                        >
                            About
                        </Link>
                        
                        <Link
                        to="Contact" 
                        spy={true} 
                        smooth={true}
                        offset={0}  
                        duration={500} 
                        className='nav-link'
                        activeClass='active'
                        >
                            Contact
                        </Link>
                    </Nav>     
                </Navbar.Collapse>
            </Navbar>
        );
    }
 }

export default Header;
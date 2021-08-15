import React, { Component }  from 'react';
import { Container, Nav} from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

    class Title extends Component{
      render() {
        return(
        
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand>Yu-Gi-Oh! React Searcher</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link to="about">About Me</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}  
    };
export default Title
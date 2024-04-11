import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Todo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/Signup'>SignUp</Link></Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
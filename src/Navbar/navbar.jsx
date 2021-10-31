import React from "react";
import {Container, Nav, NavDropdown, Form, FormControl, Button,Navbar} from 'react-bootstrap';

function MainNavbar() {
    return(
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">GreenChilli</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Sign In</Nav.Link>
        <Nav.Link href="#action2">Help</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search For Dishes"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-warning">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default MainNavbar;
import React from "react";
import {Container, Nav, NavDropdown, Form, FormControl, Button,Navbar} from 'react-bootstrap';
import "typeface-cinzel";
import "typeface-bungee";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpIcon from '@mui/icons-material/Help';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function CheckoutNavbar() {
    return(
      <>
        <Navbar bg="light" variant="light" expand="xxl">
  <Container fluid>
    <Navbar.Brand href="#" style ={{fontFamily: "Bungee, cursive"}}>GreenChilli</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-3 ms-5"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="ms-3" style= {{fontFamily: "Cinzel, serif"}} href="/menu"><MenuBookIcon/>Menu</Nav.Link>
        <Nav.Link className="ms-3"  style= {{fontFamily: "Cinzel, serif"}} href="#action2"><HelpIcon/>Help</Nav.Link>
        <Nav.Link className="ms-3"  style= {{fontFamily: "Cinzel, serif"}} href="/Cart"><AddShoppingCartIcon/>Cart</Nav.Link>
        <NavDropdown className="ms-3"  style= {{fontFamily: "Cinzel, serif"}}title="About Us" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Policy</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Team Members</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            KIET GROUPS OF INSTITUTIONS
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
</>
    )}

export default CheckoutNavbar;
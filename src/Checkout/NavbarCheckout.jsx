import React from "react";
import {Container, Nav, NavDropdown,Navbar} from 'react-bootstrap';
import "typeface-cinzel";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpIcon from '@mui/icons-material/Help';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import logo from "../images/logo.png";
import { useStateValue } from "../StateProvider";


function NavbarCheckout() {
  const [{basket}] = useStateValue();
    return(
      <>
        <Navbar style={{background:"#150f0f",position:"sticky", top:"0"}} expand="xxl">
  <Container fluid>
    <Navbar.Brand href="/home"><img src={logo}  height="70vh" alt=""/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-3 ms-5"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="ms-3" style= {{fontFamily: "Cinzel, serif",color:"white"}} href="/menu"><MenuBookIcon/>Menu</Nav.Link>
        <Nav.Link className="ms-3"  style= {{fontFamily: "Cinzel, serif",color:"white"}} href="#action2"><HelpIcon/>Help</Nav.Link>
        <Nav.Link className="ms-3"  style= {{fontFamily: "Cinzel, serif",color:"white"}} href="/checkout"><AddShoppingCartIcon/>
        <span>{basket?.length}</span>
        </Nav.Link>
        <NavDropdown className="ms-3" title={
        <span style= {{fontFamily: "Cinzel, serif",color:"white"}} className=" my-auto">About Us</span>
    } id="navbarScrollingDropdown">
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
    </Navbar.Collapse>
  </Container>
</Navbar>


</>
    );
}

export default NavbarCheckout;
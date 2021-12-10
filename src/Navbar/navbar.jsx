import React from "react";
import {Container, Nav, NavDropdown, Form, FormControl, Button,Navbar} from 'react-bootstrap';
import "typeface-cinzel";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpIcon from '@mui/icons-material/Help';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MainCarousel from "./Carousel/Carousel";
import Products from "./Products";
import {productData, productDataTwo} from "./Products/data";
import Feature from "../Feature";
import JSONDATA from "../search/menu.json";
import {useState} from 'react';
import logo from "../images/logo.png";
import { useStateValue } from "../StateProvider";
import {Link} from "react-router-dom"



function MainNavbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [{basket},dispatch] = useStateValue();
    return(
      <>
        <Navbar style={{background:"#150f0f",position:"sticky", top:"0"}} expand="xxl">
  <Container fluid>
    <Navbar.Brand to="/home"><img src={logo}  height="70vh" alt=""/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-3 ms-5"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="ms-3" style= {{fontFamily: "Cinzel, serif",color:"white"}} as={Link} to="/menu"><MenuBookIcon/>Menu</Nav.Link>
        <Nav.Link className="ms-3"  style= {{fontFamily: "Cinzel, serif",color:"white"}}><HelpIcon/>Help</Nav.Link>
        <Nav.Link className="ms-3"  style= {{fontFamily: "Cinzel, serif",color:"white"}} as={Link} to="/checkout"><AddShoppingCartIcon/>
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
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search For Dishes"
          onChange={(event) =>{
            setSearchTerm(event.target.value);
          }}
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-warning">Search</Button>
        {JSONDATA.filter((val)=> {if (searchTerm ==="") {
          return val
          } else if (val.item.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((val, key) => {
          return (
           <div 
           style={{position:"absolute", display:"inline-block",top: "70%",
           left: "84%",
           right: "0",
           borderBottom: "none",
           borderTop: "none",
           zIndex: "99",
           padding: "10px"
          }}
           key={key}>
             <p>{val.item}</p>
           </div>
          );
          })}
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<MainCarousel/>
<Products heading= "Choose your favorite" data= {productData}/>
<Feature/>
<Products heading= "Sweet Treats For You" data= {productDataTwo}/>


</>
    );
}

export default MainNavbar;
import React from "react";
import {Card,CardGroup,Button} from "react-bootstrap";
import CustomizedRating from "./Rating";
import "./Product.css";


function FoodItems() {
    return(
        <>
        <CardGroup>
  <Card  className="product" >
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80" />
    <Card.Body>
      <Card.Title>Veg Burger</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <CustomizedRating/>
          <Button variant="success">Add to Basket</Button>
    </Card.Body>
   
  </Card><br/>&nbsp;&nbsp;&nbsp;&nbsp;
  <Card  className="product">
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
    <Card.Body>
      <Card.Title>Pizza</Card.Title>
      <Card.Text>
         This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <CustomizedRating/>
          <Button variant="success">Add to Basket</Button>
    </Card.Body>
    
  </Card><br/>&nbsp;&nbsp;&nbsp;&nbsp;
  
  <Card  className="product">
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card><br/>&nbsp;&nbsp;&nbsp;&nbsp;

  <Card  className="product">
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card><br/>&nbsp;&nbsp;&nbsp;&nbsp;
</CardGroup>
<br/><br/>

<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80" />
    <Card.Body>
      <Card.Title>Veg Burger</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <CustomizedRating/>
          <Button variant="success">Add to Basket</Button>
    </Card.Body>
   
  </Card><br/>&nbsp;&nbsp;&nbsp;&nbsp;
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80" />
    <Card.Body>
      <Card.Title>Card2</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card><br/>&nbsp;&nbsp;&nbsp;&nbsp;
  
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card><br/>&nbsp;&nbsp;&nbsp;&nbsp;

  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card><br/>&nbsp;&nbsp;&nbsp;&nbsp;
</CardGroup>
</>
    )
}


export default FoodItems;

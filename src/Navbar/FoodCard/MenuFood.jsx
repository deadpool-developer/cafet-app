import React from "react";
import {Card,Button, Row,Col} from "react-bootstrap"
import "./Product.css";

function MenuFood({id,title,image,price,rating,caption}) {
    return(
       
        <Row md="4">
<Col xs={6} md={4}>
        
        <Card className="product">
  <Card.Img variant="top" src={image} alt="image"/>
  <Card.Body className="product__info">
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {caption}
    </Card.Text>
    <p className="product__price">
        <p>Price:  <small>₹</small>
        <strong className = "product__priceColor">{price}</strong></p>
    </p>
    <div className="product__rating">
            {Array(rating).fill().map((_,i) => (
                <p>⭐</p>
            ))}
          
        </div>
    <Button variant="success">Add to Cart</Button>
  </Card.Body>
</Card>
</Col>
</Row>
    )
}

export default MenuFood;
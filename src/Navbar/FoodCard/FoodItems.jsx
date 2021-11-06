import React from "react";
import {Card,Row,Col,Button} from "react-bootstrap";
import "./Product.css";
// import { Rating } from "@mui/material";
import CustomizedRating from "./Rating";

function ProductItems({title, image,price,caption}) {
return(
    <Row xs={1} md={4} className="g-4">
  {Array.from({ length: 4}).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} alt= "image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {caption}
          </Card.Text>
          <p>₹{price}</p>
          <CustomizedRating/>
          <Button variant="success">Add to Basket</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

)
}

export default ProductItems;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import menu1 from "../../images/menu1.png";
import menu2 from "../../images/menu2.png";
import menu3 from "../../images/menu3.png";
import menu4 from "../../images/menu4.png";
import menu5 from "../../images/menu5.png";
import menu6 from "../../images/menu6.png";
import menu7 from "../../images/menu7.png";
import menu8 from "../../images/menu8.png";
import menu9 from "../../images/menu9.png";


const MenuCarousel = () => {
    return (
        <div style={{
            background:'linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1))',
            height:'100vh',
            backgroundPosition:'center',
            backgroundSize:'cover'}}>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={menu1}
       alt="First slide"
    />
  </Carousel.Item>

    <Carousel.Item>
    <img
      className="d-block w-100"
      src={menu2}
       alt="second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={menu3}
       alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={menu4}
       alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={menu5}
       alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={menu6}
       alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={menu7}
       alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={menu8}
       alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={menu9}
       alt="Third slide"
    />
  </Carousel.Item>

</Carousel>
        </div>
    )
}

export default MenuCarousel

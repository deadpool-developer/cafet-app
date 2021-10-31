import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>

    <div className="home_main">
      <div style={{ display: "inline", marginLeft: "40px", marginTop: "60px" }}>
        <span
          style={{ color: "green", fontSize: "40px", fontFamily: "cursive" }}
        >
          GREENCHILLI
        </span>

       <NavLink to="/Login" ><button className="btn_1">Sign in</button> </NavLink>
        <button className="btn_2">Login</button>
      </div>
      
      <div className="typewriter">
       <Typewriter
       onInit = {(typewriter) => {
         typewriter
         .typeString("Hello")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Welcome you")
         .start();
         
       }}
       />
      </div>

        

      <div style={{ marginLeft: "40px" ,marginTop:"80px" }}>
        <h1>Order your favourite cuisine</h1>
      </div>

      <img
        src="https://thumbs.dreamstime.com/b/indian-dal-traditional-indian-soup-lentils-indian-dal-food-traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-indian-139348337.jpg"
        width="830"
        height="650"
        className="home_img"
        alt =""
      />

      <input
        type="text"
        name="delivery"
        placeholder="Enter your choice"
        className="home_input"
      />
      <button className="find_food_btn">
        FIND FOOD
      </button>

</div>
    </>
  );
}
export default Home;

import React from "react";
import "./Home.css";

function Home()
{
    return(
        <>

        <h1>GREENCHILLI </h1>

        <button>Sign in</button>
          <button>Login</button>

        <h3>Order your favourite cuisine</h3>
          <img src="https://thumbs.dreamstime.com/b/indian-dal-traditional-indian-soup-lentils-indian-dal-food-traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-indian-139348337.jpg"
            width="580" height="580"
            className="home_img"
          />

         

          <input type="text" placeholder="Enter your delivery location"/>
        </>
    );
}
export default Home;
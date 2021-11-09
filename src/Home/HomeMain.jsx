import React from "react";
import { useSpring, animated ,config} from 'react-spring'
import {useState} from "react";
import "typeface-bungee";
import "./Home.css"


function HomeMain() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip)
  })
  
  return (
      <>
      <div className="d-inline">
  <animated.h1 style={props} className="head">WELCOME &nbsp;&nbsp;TO</animated.h1>
 </div>
  </>
  )
}

export default HomeMain;
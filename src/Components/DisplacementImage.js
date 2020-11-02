import React, { useEffect, useRef } from "react"
import hoverEffect from "hover-effect"

export default () => {
    const imgref = useRef(null)
    useEffect(() => {
        new hoverEffect({
            parent: imgref.current,
            intensity: -1,
            image1: require("../Assets/how.png"),
            image2: require("../Assets/submit.png"),
            displacementImage: require("../Assets/8.jpg"),
            easing: "Expo.easeOut", 
        })  
    },[])
    return (
        <div ref={imgref} className="illustration-container--1">
       
      
      </div>
    )
}
'use client'
import React, { useEffect, useState } from "react";

const RealTimeWindowSize = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeWindow = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    }

  }, [])
  

  return (
  <div>
      Window Size
      <span>Height is: {windowHeight}</span>
      <span>Width is: {windowWidth}</span>
  </div>
  )
}

export default RealTimeWindowSize
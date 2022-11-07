import React from 'react';
import { useEffect } from 'react'
import Canvas from './Canvas';
import { useState } from 'react';
import './index.css';



const Game = () => {

const [widthOld, setWidth] = useState(window.innerWidth >= 680 ? 680 : window.innerWidth);
const [heightOld, setHeight] = useState(window.innerWidth >= 680 ? 250 : (window.innerWidth *8/17));

// change the width and height of the canvas when the window is resized
useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth >= 680 ? 680 : window.innerWidth);
    setHeight(window.innerWidth >= 680 ? 250 : (window.innerWidth *8/17));
    console.log("width: " + widthOld + " height: " + heightOld);
    window.location.reload();
  }
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  }
}, []);


let options = {
  fps: 200,
  skySpeed: 40,
  groundSpeed: 320,
  skyOffset: 0,
  groundOffset: 0,
  jumpMaxHeight: 100,
  jumpDelta: 15,
  gravity: 0.1,
  font: "Bold 18px Arial",
  textAlign: "right",
  fillStyle: "#595959",
  tolerance: 2
};


return (
  < Canvas width={widthOld} height={heightOld} defaultOptions={options} />
);
};

export default Game;
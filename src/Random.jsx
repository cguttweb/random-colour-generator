import React from 'react'
import { useState } from 'react'

const Random = () => {

  const [color, setColor] = useState([255, 255, 255])

  function handleClick(){
    setColor([255, 0, 0])
    console.log(`colour is ${color}`)
  }

  function chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  function formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  // function isLight() {
  //   const rgb = setColor(color)
  //   return rgb.reduce((a,b) => a+b) < 127 * 3;
  // }

  function applyColor() {
    const color = formatColor(setColor(color));
    document.body.style.background = color;
  }

  return (
    <div>
      <h1>
        Your RGB color is {color}
      </h1>
      <button onClick={handleClick}>click for colour</button>
    </div>
  );
}

export default Random
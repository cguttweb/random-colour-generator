import React from 'react'
import { useState } from 'react'

const Random = () => {

  const [color, setColor] = useState([255, 255, 255])

  function handleClick(){
    setColor(chooseColor(color))
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



  return (
    <div>
      <h1>
        Your RGB color is {formatColor(color)}
      </h1>
      <button onClick={handleClick}>click for colour</button>
    </div>
  );
}

export default Random

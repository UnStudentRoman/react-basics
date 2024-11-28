'use client'
import { previousDay } from "date-fns";
import React, { useState, useMemo } from "react";


// The idea of this example of useMemo is to see the delay only when the number is changing. The button press is instant.

// Function to double the number with a visible delay. 
const double = (number) => {
  for(let i = 0; i<= 1000000000; i++);
  return number*2;
};

const NumberDouble = () => {
  const [number, setNumber] = useState(0);
  
  // State of button and the style of the button.
  const [dark, setDark] = useState(false);
  const style = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  };

  // useMemo will trigger the double function only if number changes.
  const doublenumber = useMemo(() => {
    return double(number);
  }, [number])

  return (
    <div>
      <span>
        <p>Input Number:</p>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
      </span>
      <button style={style} onClick={() => setDark(prevDark => !prevDark)}>Dark</button>
      <span>
        <p>Output Number:</p>
        <div>{doublenumber}</div>
      </span>

    </div>
  )
}



export default NumberDouble
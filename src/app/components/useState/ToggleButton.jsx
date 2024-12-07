'use client'
import React, {useState} from 'react'


const ToggleButton = () => {
  // We use a variable to know if the component should be visible or not.
  const [visible, setVisible] = useState(true);
  
  // We adjust the style accordingly to the visibility
  const style = {
    opacity: visible ? 100 : 0,
    backgroundColor: visible ? 'red' : 'white',
  };

  // Function to change the visibility from True to False when called.
  const visibility = () => {
    setVisible(prevVisible => !prevVisible);
  };

  return (
    <div>
      <div>Toggle visibility</div>
      <button onClick={visibility}>Visible</button>
      <div style={style}>TEST</div>
    </div>

  )
}

export default ToggleButton
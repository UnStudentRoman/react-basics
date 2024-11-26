'use client'
import { useState } from "react";
import styles from './counter.module.css'

const Counter = () => {
  let [ counter, setCounter ] = useState(0);

  const addCounter = () => {
    setCounter(counter += 1);
  };

  const rmCounter = () => {
    setCounter(counter -= 1 ? counter > 0 : counter);
  };

  const rstCounter = () => {
    setCounter(0);
  };

  return (
    <div>
      <div>
        Counter: {counter}
      </div>
      <div className={styles.btn_container}>
        <button className={styles.btn} onClick={addCounter}>Add</button>
        <button className={styles.btn} onClick={rmCounter}>Remove</button>
        <button className={styles.btn} onClick={rstCounter}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
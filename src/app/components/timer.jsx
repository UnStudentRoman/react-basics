'use client'
import {useState, useEffect, useRef} from 'react'
import styles from './timer.module.css'


const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalId = useRef(null);
  const startTime = useRef(0);

  useEffect( () => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime.current);
        }, 10);
      }

      return () => {
        clearInterval(intervalId.current);
      }
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
    startTime.current = Date.now() - elapsedTime;
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const displayTime = () => {
      let hours = `${Math.floor(elapsedTime / (1000 * 60 * 60))}`.padStart(2, "0");
      let minutes = `${Math.floor(elapsedTime / (1000 * 60) % 60)}`.padStart(2, "0");
      let seconds = `${Math.floor(elapsedTime / 1000 % 60)}`.padStart(2, "0");

    
      return `${hours}:${minutes}:${seconds}`
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>TIMER</div>
      <div>
        <div className={styles.timer}>{displayTime()}</div>
        <div className={styles.btn_container}>
          <button className={styles.btn} onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Timer
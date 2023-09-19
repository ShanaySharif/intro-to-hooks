import React, { useState, useEffect } from 'react';

function Timer() {
    const [isActive, setIsActive] = useState(false);
    const [timer, setTimer] = useState(0); //timer & active are two state variables
  
    useEffect(() => { //usereffect hook
      let interval;
  
      if (isActive) {
        interval = setInterval(() => {
          setTimer(timerState => timerState + 1) // set the state in a callback-like manner.
        }, 1000
      )}
  
      return () => clearInterval(interval);
    }, [isActive]);
  
    return (
      <React.Fragment>
        {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}
        <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
      </React.Fragment>
    );
  }
  
  export default Timer;
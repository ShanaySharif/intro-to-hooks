import React from 'react';
import useTimer from './hooks/useTimer';

function Timer() {
  const [isOn, stopwatch, setIsOn] = useTimer();

  return (
    <React.Fragment>
      {isOn ? <h1>{stopwatch}</h1> : <h1>Timer Stopped</h1>}
      <button onClick={() => setIsOn(!isOn)}>Start/Stop</button>
    </React.Fragment>
  );
}

export default Timer;
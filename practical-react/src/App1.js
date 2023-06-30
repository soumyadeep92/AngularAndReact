import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
const App1 = () => {
    const {
        start,
        pauseResume,
        reset,
        update
      } = useCountUp({
        ref: "counter",
        start: 0,
        end: 1234567,
        delay: 2,
        duration: 5,
        onReset: () => console.log('Reseted!'),
        onUpdate: () => console.log('Updated!'),
        onPauseResume: () => console.log('Paused or resumed!'),
        onStart: () => console.log('Started! 💨'),
        onEnd: () => console.log('Ended! 👏')
      });
  return (
    <div>
        <div>
          <div id="counter"/>
          <button onClick={start}>Start</button>
          <button onClick={reset}>Reset</button>
          <button onClick={pauseResume}>Pause / Resume</button>
          <button onClick={()=>update(2000)}>Update to 2000</button>
        </div>
    </div>
  )
}

export default App1
import React,{useState, useEffect, useRef} from 'react';
import './assets/main.css';
import TimeLeft from './components/TimeLeft';
import Break from './components/Break';
import Session from './components/Session';

function App() {
  const audioElement = useRef(null);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [currentSessionType, setCurrentSessionType] = useState('Session'); 
  const [IntervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  
  
  //Change time left whenever sessionLength changes
  useEffect(()=>{
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect(() => {
    if(timeLeft === 0) {
      audioElement.current.play();
      if(currentSessionType === 'Session') {
        setCurrentSessionType('Break');
        setTimeLeft(breakLength);
      }else if (currentSessionType === 'Break') {
        setCurrentSessionType('Session');
        setTimeLeft(sessionLength);
      }
    }
  }, [breakLength, currentSessionType, sessionLength, timeLeft]);

  
  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
  };
  
  const incrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength + 60;
    if(newBreakLength <= 60 * 60){
      setBreakLength(newBreakLength);
    }
    
  };
  
  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    }
  };
  
  const incrementSessionLengthByOneMinute = () =>{
    const newSessionLength = sessionLength + 60;
    if(newSessionLength <= 60 * 60){
      setSessionLength(newSessionLength);
    }
    
  }

  const isStarted = IntervalId !== null;
  const handleStartStopClick = () => {
      if(isStarted){
          // If we are in start mode,
      //we want to stop the timer
      clearInterval(IntervalId);
      setIntervalId(null);
      }else{
          // If we are in stop mode,
      //decrement timeleft by one every 1000ms second 
      //using setInterval function

      const newIntervalId = setInterval(() => {
          setTimeLeft(prevTimeLeft => prevTimeLeft -1);
      }, 100);

    setIntervalId(newIntervalId);
    }
  };
   

  const handleResetButtonClick = () => {
    //reset audio
    audioElement.current.load();
    // clear the timeout interval
    clearInterval(IntervalId);
    // set interalId to null
    setIntervalId(null);
    // set the sessiontype to 'session'
    setCurrentSessionType('Session');
    // reset the session length to 25 minutes
    setSessionLength(60 * 25);
    // reset breaklenght to 5 mins
    setBreakLength(60 * 5);
    // reset the timer to 25 minutes (initial session length)
    setTimeLeft(60 * 25);
  }
    

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-green-800">
      <div className="flex w-full justify-around">
      <Break 
        breakLength = {breakLength}
        decrementBreakLengthByOneMinute = {decrementBreakLengthByOneMinute}
        incrementBreakLengthByOneMinute = {incrementBreakLengthByOneMinute}
      />
      <TimeLeft
        handleResetButtonClick = {handleResetButtonClick}
        timerLabel = {currentSessionType} 
        handleStartStopClick = {handleStartStopClick}
        starStopButtonLabel = {isStarted? 'Stop' : 'Start'}
        timeLeft = {timeLeft}/>

      <Session 
        sessionLength = {sessionLength}
        decrementSessionLengthByOneMinute = {decrementSessionLengthByOneMinute}
        incrementSessionLengthByOneMinute = {incrementSessionLengthByOneMinute}
      />
      </div>
      <audio id="beep" ref={audioElement}><source src="http://www.orangefreesounds.com/wecker-sound/" type="audio/mpeg"></source></audio>
     
    </div>
    );
  }
  
export default App;
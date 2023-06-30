import './App.css';
import {FaReact} from 'react-icons/fa';
import {MdAlarm} from 'react-icons/md';
import React,{useState,forwardRef,useRef} from 'react';
import { IconContext } from 'react-icons/lib';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import CountUp, { useCountUp } from 'react-countup';
import {useIdleTimer} from 'react-idle-timer';
import ChromePicker from 'react-color';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const ColoredTooltip =()=>{
  return <span style={{color:'yellow'}}>Colored Component</span>
}
const CustomToast=({closeToast})=>{
  return(
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  )
}
const CustomChild=forwardRef((props,ref)=>{
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  )
})
toast.configure();
Modal.setAppElement('#root');
function App() {
  const sessionTimerRef=useRef(null);
  const onIdle=()=>{
    setModalIsOpen(true);
    console.log("Timer is Idle");
    sessionTimerRef.current=setTimeout(logout,3000);
  }
  const idleTimerRef=useRef(null);
  const idletimer = useIdleTimer({
    crossTab: true,
    ref: idleTimerRef,
    timeout: 3 * 1000,
    onIdle: onIdle})
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
    const notify=()=>{
      toast('Basic Notification',{position:toast.POSITION.TOP_LEFT});
      toast.success('Success Notification',{position:toast.POSITION.TOP_RIGHT,autoClose:8000});
      toast.info('Info Notification',{position:toast.POSITION.TOP_CENTER});
      toast.warn(<CustomToast/>,{position:toast.POSITION.TOP_LEFT});
      toast.error('Error Notification',{position:toast.POSITION.TOP_RIGHT});
      toast('Basic Notification',{position:toast.POSITION.TOP_CENTER});
    }
    const [modalOpen,setModalOpen]=useState(false);
    const [modalIsOpen,setModalIsOpen]=useState(true);
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    const stayActive=()=>{
      setModalIsOpen(false);
      console.log('User is active');
      clearTimeout(sessionTimerRef.current);
    }
    const logout=()=>{
      setModalIsOpen(false);
      setIsLoggedIn(false);
      console.log('User has logged out');
      clearTimeout(sessionTimerRef.current);
    }
    const [color,setColor]=useState('#fff');
    const [showColorPicker,setShowColorPicker]=useState(false);
    const [selectedDate,setSelectedDate]=useState(null);
    return (
      <div>
        <DatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)} dateFormat='dd/MM/yyyy' maxDate={new Date()} isClearable showYearDropdown scrollableMonthYearDropdown/>
        <button onClick={()=>setShowColorPicker(showColorPicker=>!showColorPicker)}>{showColorPicker?'Choose color picker':'Pick a color'}</button>
        {showColorPicker && <ChromePicker color={color} onChange={updatedColor=>{setColor(updatedColor)}}/>}
        <p>You picked {color.hex}</p>
        {isLoggedIn?<div>Hello Soumya!</div>:<div>Hello Guest!</div>}
        <Modal isOpen={modalIsOpen}>
          <h2>You are waiting for a long time</h2>
          <p>You will be logged out soon</p>
          <div>
            <button onClick={logout}>Logout</button>
            <button onClick={stayActive}>Stay Signed in</button>
          </div>
        </Modal>
        <div idletimer={idletimer}></div>
        <div>
          <div id="counter"/>
          <button onClick={start}>Start</button>
          <button onClick={reset}>Reset</button>
          <button onClick={pauseResume}>Pause / Resume</button>
          <button onClick={()=>update(2000)}>Update to 2000</button>
        </div>
        <CountUp end={200}/>
        <br/>
        <CountUp start={500} end={1000} duration={10}/>
        <br/>
        <CountUp end={200} duration={5}/>
        <br/>
        <h1>
          <CountUp end={1000} duration={100} prefix='$' decimals={2}/>
        </h1>
        <h1>
          <CountUp end={1000} duration={100} suffix='USD' decimals={2}/>
        </h1>
        <div style={{paddingBottom:'20px'}}>
          <Tippy arrow={false} placement='right' delay={1000} content='Basic Tooltip'>
            <button>Hover</button>
          </Tippy>
        </div>
        <div style={{paddingBottom:'20px'}}>
          <Tippy content={<span style={{color:'orange'}}>Colored</span>}>
            <button>Hover</button>
          </Tippy>
        </div>
        <div style={{paddingBottom:'20px'}}>
          <Tippy content={<ColoredTooltip/>}>
            <button>Hover</button>
          </Tippy>
        </div>
        <div style={{paddingBottom:'20px'}}>
          <Tippy placement='top-start' content={<ColoredTooltip/>}>
            <CustomChild/>
          </Tippy>
        </div>
        <button onClick={()=>setModalOpen(true)}>Open Modal</button>
        <Modal isOpen={modalOpen} onRequestClose={()=>setModalOpen(false)} shouldCloseOnOverlayClick={false} style={{overlay:{backgroundColor:'grey'},content:{color:'orange'}}}>
          <h2>Modal Title</h2>
          <p>Modal Body</p>
          <button onClick={()=>setModalOpen(false)}>Close Modal</button>
        </Modal>
        <IconContext.Provider value={{color:'blue',size:'5rem'}}>
          <div className="App">
            <FaReact/>
            <MdAlarm/>
            <button onClick={notify}>Notify!</button>
          </div>
        </IconContext.Provider>
      </div>
  );
}

export default App;

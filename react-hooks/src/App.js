import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterFour from './HookCounterFour';
import HookCounterThree from './HookCounterThree';
import HookCounterTwo from './HookCounterTwo';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './HookMouse';
import MouseContainer from './MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentContextA from './components/ComponentContextA';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ClassTimer from './components/ClassTimer';
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className="App">
      <DataFetching/>
      <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <ClassCounterOne/>
      <HookCounterOne/>
      <ClassMouse/>
      <HookMouse/>
      <MouseContainer/>
      <IntervalClassCounter/>
      <IntervalHookCounter/>
      <CounterOne/>
      <CounterTwo/>
      <CounterThree/>
      <ComponentContextA/>
      <DataFetchingOne/>
      <DataFetchingTwo/>
      <ClassTimer/>
      <HookCounter/>
      <ParentComponent/>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import LifecycleA from './components/LifecycleA';
class App extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <div className="App">
        <LifecycleA/>
      </div>
    );
  }
}

export default App;

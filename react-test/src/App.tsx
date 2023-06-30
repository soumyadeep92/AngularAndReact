import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/application';
import { Skills } from './components/skills/skills';
import { Counter } from './components/counter/counter';
import { AppProviders } from './providers/app-providers';
import { MuiMode } from './components/mui/mui-mode';
function App() {
  const skills=['HTML','CSS','Javascript'];
  return (
    <div className="App">
      <p>
          Learn React
      </p>
      <Application/>
      <Skills skills={skills}/>
      <Counter/>
      <AppProviders>
        <div>
          <MuiMode/>
        </div>
      </AppProviders>
    </div>
  );
}

export default App;

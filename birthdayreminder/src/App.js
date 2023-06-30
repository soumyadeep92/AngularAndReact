import './App.css';
import React, {useState} from 'react';
import List from './List';
import data from './data';
function App() {
  const [people,setPeople]=useState(data);
  return (
    <main>
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people}/>
          <button onClick={()=>setPeople([...people,{'id':6,'name':'Sam Fret','age':28,'image':''}])}>clear all</button>
        </section>
    </main>
  );
}

export default App;

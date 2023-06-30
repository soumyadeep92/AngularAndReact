import './App.css';
import React,{useState} from 'react';
import Question from './Question';
import data from './data';
function App() {
  const [questions,setQuestions]=useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question)=>{
              return (<Question key={question.id} {...question}/>);
            })
          };
        </section>
      </div>
    </main>
  );
}

export default App;

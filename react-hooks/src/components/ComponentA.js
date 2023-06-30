import React from 'react'
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
export const ContextOne=React.createContext();
export const ContextTwo=React.createContext();
function ComponentA() {
  return (
    <div>
        <ContextOne.Provider value={'Soumya'}>
            <ContextTwo.Provider value={'CodeEvolution'}>
                <ComponentC/>
                <ComponentB/>
            </ContextTwo.Provider>
        </ContextOne.Provider>
    </div>
  )
}

export default ComponentA
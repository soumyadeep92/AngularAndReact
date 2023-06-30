import React from 'react'
import {ContextOne,ContextTwo} from './ComponentA'
function ComponentB() {
  return (
    <div>
        <ContextOne.Consumer>
            {
                user=>{
                  return (
                    <ContextTwo.Consumer>
                    {
                        two=>{
                            return(<div>User-{user} Channel-{two}</div>)
                        }
                    }
                    </ContextTwo.Consumer>
                  )
                }
            }
        </ContextOne.Consumer>
    </div>
  )
}

export default ComponentB
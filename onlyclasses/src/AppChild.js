import React, { Component } from 'react'
import App from './App.js';
class AppChild extends Component {
  constructor(props)
  {
    super(props);
    this.state=({
        name:''
    })
  }
  render() {
    return (
      <div><App name='Soumya'/></div>
    )
  }
}

export default AppChild
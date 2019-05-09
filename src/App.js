import React, { Component } from "react";
import animate from '../src/actions/actions'

class App extends Component {

  componentDidMount() {
    animate();
  }
  
  render() {
    return (
      <div />
    )
  }
}

export default App;

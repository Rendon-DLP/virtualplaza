import React, { Component } from "react";
import animate from './actions/render'

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

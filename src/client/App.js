import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       	<p>Hello I am App component</p>
       	<p>State:{this.props.state.color} </p>
      </div>
    );
  }
}

export default App;

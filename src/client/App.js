import React, { Component } from 'react';
import './App.css';

class App extends Component {
	 componentDidMount() {
   		 this.props.getBooks(); // FB DB object set to redux
   		 console.log("prop fx called");
  }
  
  render() {
    return (
      <div className="App">
       	<p>Hello I am App component</p>
       	{this.props.book_state.color}
      </div>
    );
  }
}

export default App;

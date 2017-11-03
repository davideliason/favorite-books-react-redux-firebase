import React, { Component } from 'react';
import './App.css';

class App extends Component {
	 componentDidMount() {
   		 this.props.getBooks(); // FB DB object set to redux
   		 console.log("prop fx called");
  }
  
  render() {
  	const {color,slogan,books} = this.props.book_state;
    return (
      <div className="App">
       	<p>Hello I am App component</p>
       	<p>All systems are: {color}</p>
       	<p>All systems are: {slogan}</p>


      </div>
    );
  }
}

export default App;

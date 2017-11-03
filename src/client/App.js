import React, { Component } from 'react';
import './App.css';
const colorStyle = {
	color: 'green'
}

class App extends Component {

	constructor(){
		super();
		this.state = {
			title : "coffeemug"
		};
	}
   

	 componentDidMount() {
   		 this.props.getBooks(); // FB DB object set to redux
   		 this.props.onAddBook(this.state.title);
  	 }
  
     render() {
     	
	  	const {slogan,books} = this.props.book_state;
	    return (
	      <div className="App">
	       	<h2> {this.state.currentUser} : {slogan} :)</h2>
	       	<h3>All Books</h3>

	       	{books && books.length > 0 ? (
	            <ul>
	              {books.map((book, index) => {
	                return (
	                  <li key={index} style={colorStyle} >
	                    {book.title} by {book.author}
	                  </li>
	                );
	              })}
	            </ul>
	          ) : null}


	      </div>
	    );
	  }
	}

export default App;

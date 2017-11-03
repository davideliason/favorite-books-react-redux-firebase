import React, { Component } from 'react';
import './App.css';
const colorStyle = {
	color: 'green'
}

class App extends Component {

	constructor(){
		super();
		this.state = {
			title : "new_espresso",
			author: "espresso_author",
			owned: false,
			genre: "fantasy"
		};
	}
   

	 componentDidMount() {
   		 this.props.getBooks(); // FB DB object set to redux
   		 // this.props.onAddBook("frankenstein","spooky spock",false,'scifi');//works
  	 }
  
     render() {
     	
	  	const {slogan,books} = this.props.book_state;
	    return (
	      <div className="App">
	       	<h2>  {slogan} :)</h2>
	       	<h3>All Books</h3>


                <input
                  type="text"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
                <input
                  type="text"
                  value={this.state.author}
                  onChange={e => this.setState({ author: e.target.value })}
                />
                <input
                  type="text"
                  value={this.state.owned}
                  onChange={e => this.setState({ owned: e.target.value })}
                />
                <input
                  type="text"
                  value={this.state.genre}
                  onChange={e => this.setState({ genre: e.target.value })}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => this.props.onAddBook(this.state.title,this.state.author,this.state.owned,this.state.genre)}
                >
                  Add Book
                </button>

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

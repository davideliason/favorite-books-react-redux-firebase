import React, { Component } from 'react';
import './App.css';
const colorStyle = {
	color: 'green'
}

class App extends Component {

	constructor(){
		super();
		this.state = {
			title : "",
			author: "",
			owned: false,
			genre: "",
      filter: ""
		};
	}
   

	 componentDidMount() {
   		 this.props.getBooks(); // FB DB object set to redux
   		 // this.props.onAddBook("frankenstein","spooky spock",false,'scifi');//works
  	 }
  
     render() {
     	console.log("look: state: " + this.state.filter);
	  	const {books} = this.props.books;
	    return (
	      <div>
            <div className="col-xs-12">
                <input
                  placeholder = "title"
                  type="text"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
                <input
                  type="text"
                  placeholder = "author"
                  value={this.state.author}
                  onChange={e => this.setState({ author: e.target.value })}
                />
                <input
                  type="text"
                  placeholder = "owned"
                  value={this.state.owned}
                  onChange={e => this.setState({ owned: e.target.value })}
                />
                <input
                  type="text"
                  placeholder = "genre"
                  value={this.state.genre}
                  onChange={e => this.setState({ genre: e.target.value })}
                />
                <input
                  type="text"
                  placeholder = "filter"
                  value={this.state.filter}
                  onChange={e => this.setState({ filter: e.target.value })}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => this.props.onAddBook(this.state.title,this.state.author,this.state.owned,this.state.genre)}
                >
                  Add Book
                </button>

                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => this.props.onChangeFilter(this.state.filter)}
                >
                  Change Filter
                </button>
            </div>

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

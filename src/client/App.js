import React, { Component } from 'react';
import './App.css';
const colorStyle = {
	color: 'green'
}

class App extends Component {
	 componentDidMount() {
   		 this.props.getBooks(); // FB DB object set to redux
  }
  
  render() {
  	const {slogan,books} = this.props.book_state;
    return (
      <div className="App">
       	<h2> {slogan} :)</h2>
       	<h3>Books</h3>
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

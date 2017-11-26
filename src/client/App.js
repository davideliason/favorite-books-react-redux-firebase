import React, { Component } from 'react';
import './App.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';
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

  handleOnChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  handleOnChangeGenre = (e) => {
    this.setState({
      genre: e.target.value
    })
  }
  
     render() {
     	console.log("look: state: " + this.state.filter);
	  	const {books} = this.props.books;
      const filteredBooks = this.props.filteredBooks;
	    return (
	      <div>
              <Jumbotron>
                <h3>Favorite Books</h3>
              </Jumbotron>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>

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
                <select defaultValue = "SCIFI" onChange={this.handleOnChangeGenre}>
                  <option value="MYSTERY" >MYSTERY</option>
                  <option value="SCIFI" >SCI-FI</option>
                </select>
               
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => this.props.onAddBook(this.state.title,this.state.author,this.state.owned,this.state.genre)}
                >
                  Add Book
                </button>
            </Col>
            <Col xs={3}></Col>
          </Row>
          <Row></Row>
          <Row>
            <Col xs={3}>
            </Col>
            <Col xs={6}>
               <h3>All Books:</h3>
            </Col>
            <Col xs={3}></Col>
          </Row>

           <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
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
            </Col>
            <Col xs={3}></Col>
          </Row>

	       	
            <Row>
            <Col xs={3}>
            </Col>
            <Col xs={6}>
               <h3>Filtered Books:</h3>
               <select defaultValue = "MYSTERY" onChange={this.handleOnChange}>
                <option value="MYSTERY" >MYSTERY</option>
                <option value="SCIFI" >SCI-FI</option>
                <option value="SHOW_ALL" >SHOW ALL</option>

             </select>

             <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => this.props.onChangeFilter(this.state.filter)}
                >
                  Change Filter
                </button>
            </Col>
            <Col xs={3}></Col>
          </Row>

          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>


            {filteredBooks && filteredBooks.length > 0 ? (
              <ul>
                {filteredBooks.map((book, index) => {
                  return (
                    <li key={index} style={colorStyle} >
                      {book.title} by author {book.author}
                    </li>
                  );
                })}
              </ul>
            ) : null}
            </Col>
            <Col xs={3}></Col>
          </Row>
	      </div>
	    );
	  }
	}

export default App;

import database from '../database.js';


export default function addBook(title,author,owned,genre){
	return dispatch => {
			dispatch(addBookRequestedAction());
			const booksRef = database.ref('/books');
			booksRef.push({
				title,
				author,
				owned,
				genre
			});
	}
}

function addBookRequestedAction(){
	return {
		type: 'AddBookRequested'
	}
}

function addBookRejectedAction(){
	return {
		type: 'AddBookRejected'
	}
}

function addBookFulfilledAction(book){
	return {
		type: 'AddBookFulfilled',
		book
	}
}
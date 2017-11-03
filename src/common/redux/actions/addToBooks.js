import database from '../database.js';


export default function addBook(title){
	return dispatch => {
			dispatch(addBookRequestedAction());
			const booksRef = database.ref('/books');
			booksRef.push({
				title : title
			});
			console.log("title is:" + title);
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
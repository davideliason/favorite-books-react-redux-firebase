import database from '../database.js';


export default function addBook(book){
	return dispatch => {
			dispatch(addBookRequestedAction());
			const booksRef = database.ref('/books');
			booksRef.push({
				author: "me",
				title: "me_title",
				owned: true,
				genre: "sci-fi"
			})
			.then(() => {
			   dispatch(addBookFulfilledAction({book}));
			})
			.catch((error) => {
				console.log(error);
				dispatch(addBookRejectedAction());
			})
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
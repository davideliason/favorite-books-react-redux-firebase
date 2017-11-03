import database from '../database.js';

export default function addBook(book){
	return dispatch => {
			dispatch(addBookRequestedAction());
		// return(

			// DB action here
			// dispatch(addBookFulfilledAction());

			// )
		// .catch((error) => {
		// 	console.log(error);
		// 	dispatch(addBookRejectedAction());
		// })
	}
}

function addBookRequestedAction(){
	return {
		type: 'AddBookRequested'
	}
}

function addBookRejectedAction(){
	return {
		type: 'AddUserRejected'
	}
}

function addBookFulfilledAction(book){
	return {
		type: 'AddBookFulfilled',
		book
	}
}
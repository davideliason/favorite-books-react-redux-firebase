
export default function booksReducer(state={},action){
	switch(action.type){
		case 'GetBooksRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		}

		case 'GetBooksRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'GetBooksFulfilled': {
			const {books} = action.books;
			const newState = Object.assign({},state,{
				inProgress: false,
				error: false
			});
			newState.books = [];
			if(books){
				newState.books = Object.keys(books).map(k => books[k]);
			}
			return newState;
		}

		case 'AddBookRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		}

		case 'AddBookRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'AddBookFulfilled': {
			return Object.assign({},state,{
				inProgress: false,
				error: false
			})
		}

		case 'bookAdded': {
			const newState = Object.assign({}, state);
      		newState.books = newState.books || [];
      		newState.books = newState.books.slice();
      		newState.books.push(action.book);
      		return newState;
		}

		default:
			return state;
	}
}



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
			return Object.assign({},state,{
				inProgress: false,
				error: false,
				books: action.books
			});
		}
		default:
			return state;
	}
}


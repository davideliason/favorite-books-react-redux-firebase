
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
			const {slogan, books} = action.book_state;
			const newState = Object.assign({},state,{
				inProgress: false,
				error: false,
				color: "green",
				slogan: slogan
			});
			newState.books = [];
			if(books){
				newState.books = Object.keys(books).map(k => books[k]);
			}
			return newState;
		}

		default:
			return state;
	}
}


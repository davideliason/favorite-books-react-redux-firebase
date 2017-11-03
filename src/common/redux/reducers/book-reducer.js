
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
			return Object.assign({},state,{
				inProgress: false,
				error: false,
				books: books,
				color: "green",
				slogan: slogan
			});
		}



		default:
			return state;
	}
}


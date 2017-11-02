
export default function booksReducer(state={},action){
	switch(action.type){
		case 'GetBooksRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		}

		case 'GetInviteRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'GetInviteFulfilled': {
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


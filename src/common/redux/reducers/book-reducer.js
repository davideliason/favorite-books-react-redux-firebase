export default function booksReducer(state={},action){
	switch(action.type){
		case 'SHOW_BOOKS': {
			return Object.assign({},state,{
				inProgress: true,
				color: "blue"
			});
		}
		default:
			return state;
	}
}


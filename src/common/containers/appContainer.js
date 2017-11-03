import App from '../../client/App.js';
import {connect} from 'react-redux';
import getBooks from '../redux/actions/get_books.js';
import addBook from '../redux/actions/addToBooks.js';
import watchIfBookAdded from '../redux/actions/watch_if_book_added.js';

function mapStateToProps(state){
	return {
		book_state: state
	}
}

function mapDispatchToProps(dispatch){
    watchIfBookAdded(dispatch);
	return {
		getBooks : () => dispatch(getBooks()),
		onAddBook : (title,author,owned,genre) => dispatch(addBook(title,author,owned,genre))
	}
}

const appContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default appContainer;
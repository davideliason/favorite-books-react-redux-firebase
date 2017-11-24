import App from '../../client/App.js';
import {connect} from 'react-redux';
import getBooks from '../redux/actions/get_books.js';
import addBook from '../redux/actions/addToBooks.js';
import watchIfBookAdded from '../redux/actions/watch_if_book_added.js';
import changeFilter from '../redux/actions/changeFilter.js';
function mapStateToProps(state){
	return {
		books: state.books
	}
}

function mapDispatchToProps(dispatch){
    watchIfBookAdded(dispatch);
	return {
		onChangeFilter : (filter) =>dispatch(changeFilter(filter)),
		getBooks : () => dispatch(getBooks()),
		onAddBook : (title,author,owned,genre) => dispatch(addBook(title,author,owned,genre))
	}
}

const appContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default appContainer;
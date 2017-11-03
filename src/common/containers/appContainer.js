import App from '../../client/App.js';
import {connect} from 'react-redux';
import getBooks from '../redux/actions/get_books.js';
import addBook from '../redux/actions/addToBooks.js';

function mapStateToProps(state){
	return {
		book_state: state
	}
}

function mapDispatchToProps(dispatch){
	return {
		getBooks : () => dispatch(getBooks()),
		addBook : () => dispatch(addBook())
	}
}

const appContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default appContainer;
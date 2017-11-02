import App from '../../client/App.js';
import {connect} from 'react-redux';
import getBooks from '../redux/actions/get_books.js';

function mapStateToProps(state){
	return {
		state: state
	}
}

function mapDispatchToProps(dispatch){
	return {
		getBooks : () => dispatch(getBooks())
	}
}

const appContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default appContainer;
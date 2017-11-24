import {combineReducers} from 'redux';
import booksReducer from './books-reducer.js';

const rootReducer = combineReducers({
	books: booksReducer
});

export default rootReducer;
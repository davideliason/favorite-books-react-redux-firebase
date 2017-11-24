import {combineReducers} from 'redux';
import booksReducer from './books-reducer.js';
import filterReducer from './filter-reducer.js';

const rootReducer = combineReducers({
	books: booksReducer,
	filter: filterReducer
});

export default rootReducer;
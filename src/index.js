import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './common/containers/appContainer.js';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import book_reducer from './common/redux/reducers/book-reducer.js';

let logger = createLogger({
	timestamp:true,
	duration:true
});

const store = createStore(book_reducer, {}, applyMiddleware(thunk,logger));

store.dispatch({type:'SHOW_BOOKS'}); // works correctly
console.log(store.getState());

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));

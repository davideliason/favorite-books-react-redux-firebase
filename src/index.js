import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App.js';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './common/redux/reducers/book-reducer.js';

let logger = createLogger({
	timestamp:true,
	duration:true
});

const store = createStore(reducer, {}, applyMiddleware(thunk,logger));

store.dispatch({type:'SHOW_BOOKS'});
console.log(store.getState());

ReactDOM.render(<Provider store={store}><App  /></Provider>, document.getElementById('root'));

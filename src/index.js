import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './common/containers/appContainer.js';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './common/redux/reducers/root-reducer.js';

let logger = createLogger({
	timestamp:true,
	duration:true
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk,logger));
store.dispatch({type: 'SET_FILTER', filter: 'SCI_FI'});
// store.dispatch({type:'SHOW_BOOKS'}); // works correctly
ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));

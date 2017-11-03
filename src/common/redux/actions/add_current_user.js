import database from '../database.js';

export default function addUser(){
	return dispatch => {
		dispatch(addCurrentUserRequestedAction());
	}
}

function addUserRequestedAction(){
	return {
		type: 'AddUserRequested'
	}
}

function addUserRejectedAction(){
	return {
		type: 'AddUserRejected';
	}
}

function addUserFulfilledAction(user){
	return {
		type: 'AddUserFulfilled',
		user
	}
}
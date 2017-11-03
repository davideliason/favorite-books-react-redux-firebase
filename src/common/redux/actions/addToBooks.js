import database from '../database.js';

export default function addUser(name){
	return dispatch => {
		dispatch(addUserRequestedAction());
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
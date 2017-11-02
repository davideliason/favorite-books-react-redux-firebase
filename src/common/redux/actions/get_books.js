import database from '../database.js';

export default function getBooks() {
  return dispatch => {
    dispatch(getBooksRequestedAction());
    return database.ref('/').once('value', snap => {
      const books = snap.val(); // FB DB object
      dispatch(getBooksFulfilledAction(books))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getBooksRejectedAction());
    });
  }
}


function getBooksRequestedAction() {
  return {
    type: 'GetBooksRequested'
  };
}

function getBooksRejectedAction() {
  return {
    type: 'GetInviteRejected'
  }
}

function getBooksFulfilledAction(books) {
  return {
    type: 'GetInviteFulfilled',
    books: books
  };
}

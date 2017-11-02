import database from '../database.js';

export function getBooks() {
  return dispatch => {
    dispatch(getBooksRequestedAction());
    return database.ref('/').once('value', snap => {
      const books = snap.val();
      dispatch(getInviteFulfilledAction(books))
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

function getInviteFulfilledAction(books) {
  return {
    type: 'GetInviteFulfilled',
    books: books
  };
}

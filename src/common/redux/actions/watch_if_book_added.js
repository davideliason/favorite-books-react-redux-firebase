import database from '../database.js';

export default function watchIfBooktAdded(dispatch) {
  database.ref('/books').on('child_added', (snap) => {
    dispatch(getBookAddedAction(snap.val()))
  });
}

function getBookAddedAction(book){
	return {
		type: 'bookAdded',
		book
	};
}



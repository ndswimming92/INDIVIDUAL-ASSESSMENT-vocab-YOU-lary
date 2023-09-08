import { signOut } from '../utils/auth';
import { getVocab, searchVocab } from '../api/vocabData';
import { emptyVocab, showVocab } from '../pages/vocabulary';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        emptyVocab();
      }
    });
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE
      searchVocab(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showVocab(search);
          } else {
            emptyVocab();
          }
        });
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;

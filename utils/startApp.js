import getVocab from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { emptyVocab, showVocab } from '../pages/vocabulary';
// import { showBooks } from '../pages/books';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT

  getVocab(user.uid).then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      emptyVocab();
    }
  });
};

export default startApp;

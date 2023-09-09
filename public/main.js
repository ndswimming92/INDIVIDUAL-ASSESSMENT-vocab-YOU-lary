import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <h1>Welcome to VocabuLaRy!</h1>`;
  ViewDirectorBasedOnUserAuthStatus();
};

init();

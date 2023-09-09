import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocabulary';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-Vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#languageTech').value,
        uid: user.uid
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebasekey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('update-Vocab')) {
      const [, firebasekey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        languageTech: document.querySelector('#languageTech').value,
        uid: user.uid,
        firebasekey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;

import { deleteVocab, getVocab, getSingleVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../pages/vocabulary';
// import viewVocab from '../pages/viewVocab';

/* eslint-disable no-alert */
const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(getVocab).then(showVocab);
      }
    }

    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(user.uid);
    }

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(user.uid, vocabObj));
    }
  });
};

export default domEvents;

import { deleteVocab, getVocab, getSingleVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../pages/vocabulary';
// import viewVocab from '../pages/viewVocab';

/* eslint-disable no-alert */
const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-Vocab')) {
      if (window.confirm('Want to delete?')) {
        const [, firebasekey] = e.target.id.split('--');
        deleteVocab(firebasekey).then(getVocab).then(showVocab);
      }
    }

    if (e.target.id.includes('add-Vocab-btn')) {
      addVocabForm(user.uid);
    }

    if (e.target.id.includes('edit-Vocab-btn')) {
      const [, firebasekey] = e.target.id.split('--');
      getSingleVocab(firebasekey).then((VocabObj) => addVocabForm(user.uid, VocabObj));
    }
  });
};

export default domEvents;

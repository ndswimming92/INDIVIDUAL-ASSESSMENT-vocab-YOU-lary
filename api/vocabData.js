import client from '../utils/client';
// API CALLS FOR Vocabulary

const endpoint = client.databaseURL;

const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteVocab = (firebasekey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebasekey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleVocab = (firebasekey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebasekey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${payload.firebasekey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

//  Searching Vocabulary
const searchVocab = (searchValue, uid) => new Promise((resolve, reject) => {
  getVocab(uid).then((VocabArray) => {
    const searchResults = VocabArray.filter((Vocab) => (
      Vocab.title.toLowerCase().includes(searchValue)
      || Vocab.definition.toLowerCase().includes(searchValue)
      || Vocab.languageTech.toLowerCase().includes(searchValue)
    ));

    resolve(searchResults);
  }).catch(reject);
});

export {
  getVocab,
  createVocab,
  deleteVocab,
  getSingleVocab,
  updateVocab,
  searchVocab,
};

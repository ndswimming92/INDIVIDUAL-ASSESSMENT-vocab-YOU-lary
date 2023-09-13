import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary Found</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocabulary</button>';

  renderToDOM('#add-button', btnString);
  let domString = '';

  if (!array.length) {
    domString += '<p>No Vocabulary Found</p>';
  } else {
    array.forEach((element) => {
      domString += `
        <div class="card">
          <div class="card-body" style="height: autopx;">
            <h5 class="card-title">${element.title}</h5>
              <hr>              
              <p>${element.definition || ''}</p>
              <hr>
              <p>${element.languageTech || ''}</p>
              <hr>
              <p>${element.dateTime || ''}</p>
        </div>
        <div class="fa">
              <i id="edit-Vocab-btn--${element.firebasekey}" class="fa fa-edit"></i>
              <i id="delete-Vocab-btn--${element.firebasekey}" class="fa fa-trash-alt"></i>
        </div>
          </div>
        </div>`;
    });
  }

  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };

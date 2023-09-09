import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary Found</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-Vocab-btn">Add Vocabulary</button>';
  renderToDOM('#add-button', btnString);
  let domString = '';

  if (!array.length) {
    domString += '<p>No Vocabulary Found</p>';
  } else {
    array.forEach((item) => {
      domString += `
        <div class="card">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.title}</h5>
              <hr>
              <i id="edit-Vocab-btn--${item.firebasekey}" class="fas fa-edit btn btn-info"></i>
              <i id="delete-Vocab-btn--${item.firebasekey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
        </div>`;
    });
  }

  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };

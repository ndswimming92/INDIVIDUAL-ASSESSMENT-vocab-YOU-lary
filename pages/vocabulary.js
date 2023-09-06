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
    array.forEach((item) => {
      domString += `
        <div class="card">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.title}</h5>
              <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
              <hr>
              <i class="btn btn-success fas fa-eye" id="view-vocab-btn--${item.firebaseKey}"></i>
              <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
              <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
        </div>`;
    });
  }

  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };

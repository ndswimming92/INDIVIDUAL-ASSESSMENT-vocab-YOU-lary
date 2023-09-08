import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="First Name" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Definition</label></label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}"required>
      </div>
      <div class="form-group">
        <label for="title">Language/Tech</label>
        <input type="email" class="form-control" id="languageTech" aria-describedby="Language/Tech" placeholder="Enter Email" value="${obj.email || ''}"required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Vocabulary</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;

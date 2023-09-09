import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebasekey ? `update-Vocab--${obj.firebasekey}` : 'submit-Vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="VocabTitle" placeholder="Enter Vocab Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Vocab Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="languageTech">Language/Tech</label>
        <input type="text" class="form-control" id="languageTech" placeholder="LanguageTech" value="${obj.languageTech || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocabulary
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;

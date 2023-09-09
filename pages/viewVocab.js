import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocab = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-Vocab-btn--${obj.firebasekey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-Vocab--${obj.firebasekey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.title} 
     <hr>
     <p>${obj.definition || ''}</p> 
     <hr>    
     <p>${obj.languageTech || ''}</p> 
      </div>
   </div>`;

  renderToDOM('#view', domString);
};

export default viewVocab;

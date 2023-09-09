import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocab = (array) => {
  clearDom();
  let domString = '';
  array.forEach((element) => {
    domString += `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-Vocab-btn--${element.firebasekey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-Vocab--${element.firebasekey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${element.title} 
     <hr>
     <p>${element.definition || ''}</p> 
     <hr>    
     <p>${element.languageTech || ''}</p> 
      </div>
   </div>`;

    renderToDOM('#view', domString);
  });
};

export default viewVocab;

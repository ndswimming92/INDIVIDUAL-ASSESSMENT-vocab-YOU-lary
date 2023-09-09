import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;

const surveyCheckbox = document.querySelector('#has-assets');
const assetContainer = document.querySelector('#assets');
const formContainer = document.querySelector('#form-container');

surveyCheckbox.addEventListener('change', () => {
    assetContainer.classList.toggle('active');
    formContainer.classList.toggle('active');
})
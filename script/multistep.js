const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');

const nextBtn = document.querySelector('#next');
const previousBtn = document.querySelector('#previous');

nextBtn.addEventListener('click', () => {
    page1.style.left = '-100%';
    page2.style.left = '0vw';
});

previousBtn.addEventListener('click', () => {
    page1.style.left = '0vw';
    page2.style.left = '100%';
});
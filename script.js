// Sidebar menu

const sidebar = document.querySelector('.sidebar');
const openSide = document.querySelector('nav ul li:last-child');
const closeSide = document.querySelector('.closebtn');

openSide.addEventListener('click', () => {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-100%';
    } else {
        sidebar.style.left = '0px';
    }
});

closeSide.addEventListener('click', () => {
    sidebar.style.left = '-100%';
});

const AddBtn = document.querySelector('#add');
const CloseAddModal = document.querySelector('#close');


AddBtn.addEventListener('click', () => { 
    const AddModal = document.querySelector('#add-modal'); 
    AddModal.style.transform = 'translate(-50%, -50%)';
})

CloseAddModal.addEventListener('click', () => { 
    const AddModal = document.querySelector('#add-modal'); 
    AddModal.style.transform = 'translate(-50%, -500%)';
})

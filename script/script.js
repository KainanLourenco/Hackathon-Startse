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

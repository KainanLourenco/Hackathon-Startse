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

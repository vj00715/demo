
// Navbar 
const toggleButton = document.getElementsByClassName('toggle_btn')[0];
const navbarLinks = document.getElementsByClassName('navbar_links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navbarLinks2.classList.remove('active');
});
// 
const toggleButton2 = document.getElementsByClassName('toggle_btn_2')[0];
const navbarLinks2 = document.getElementsByClassName('sideBar')[0];

toggleButton2.addEventListener('click', () => {
    navbarLinks2.classList.toggle('active');
    navbarLinks.classList.remove('active');
});

const navbarToggle = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-link')[0]

navbarToggle.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
});
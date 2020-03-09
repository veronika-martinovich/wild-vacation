document.addEventListener('DOMContentLoaded', function () {

    let navIcon = document.querySelector('.nav-ico');
    let navList = document.querySelector('.nav__list');

    navIcon.onclick = function () {
        navList.classList.toggle('nav__list_hidden');
    }
})
document.addEventListener('DOMContentLoaded', function () {

    let navIcon = document.querySelector('.nav-icon');
    let navList = document.querySelector('.nav-list');
    let directionsItems = document.querySelectorAll('.directions__item');

    navIcon.onclick = function () {
        navList.classList.toggle('nav-list_hidden');
    }
})
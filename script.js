const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}

burgerButton.addEventListener('click', hideShow);

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = 0;
    } else {
        document.getElementById("navbar").style.top = "-98px";
    }
    prevScrollPos = currentScrollPos;
}

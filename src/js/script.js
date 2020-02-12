window.onload = () => {

    let menuBtn = document.querySelector('.header__button-menu');
    let container = document.querySelector('.container');
    let menuNav = document.querySelector('.header__nav');

    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        container.classList.toggle('active');
        menuNav.classList.toggle('active');   
    })
}
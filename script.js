'use strict'

// картинки часов

let elem = document.querySelector('.greetings__container');

let watch = elem.querySelector('.greetings__btn');

let cart = document.querySelector('.cart');
console.log(cart);

watch.addEventListener('click', event => {

    let cartNum = cart.innerHTML;

    if (+cartNum <= 1) {
        cart.innerHTML++;

        console.log(cartNum);
    }

    event.target.style.background = 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)';
    event.target.style.color = '#FFFFFF';
})

let iWatch = document.querySelector('.greetings__btn_iWatch');

let watchBlack = iWatch.querySelector('.iWatch-btn_black');

watchBlack.addEventListener('click', (event) => {

    event.target.style.border = '0.188rem solid #FFFFFF';
    event.target.style.width = '1.875rem';
    event.target.style.height = '1.875rem';

    let imgBlue = document.getElementById('imgBlue');

    if (imgBlue) {

        imgBlue.src = './images/Blackwatch.png';

    } else {
        imgBlue.src = './images/watch-blue.png';

    }
});

let watchBlue = iWatch.querySelector('.iWatch-btn_blue');

watchBlue.addEventListener('click', (event) => {

    event.target.style.border = '0.188rem solid #FFFFFF';
    event.target.style.width = '1.875rem';
    event.target.style.height = '1.875rem';

    let imgBlue = document.getElementById('imgBlue');

    if (imgBlue) {

        imgBlue.src = './images/watch-blue.png';

    }
});

let watchGreen = iWatch.querySelector('.iWatch-btn_green');

watchGreen.addEventListener('click', (event) => {

    event.target.style.border = '0.188rem solid #FFFFFF';
    event.target.style.width = '1.875rem';
    event.target.style.height = '1.875rem';

    let imgBlue = document.getElementById('imgBlue');

    if (imgBlue) {

        imgBlue.src = './images/greenwatch.png';

    } else {
        imgBlue.src = './images/watch-blue.png';

    }
});

let watchPink = iWatch.querySelector('.iWatch-btn_pink');

watchPink.addEventListener('click', (event) => {

    event.target.style.border = '0.188rem solid #FFFFFF';
    event.target.style.width = '1.875rem';
    event.target.style.height = '1.875rem';

    let imgBlue = document.getElementById('imgBlue');

    if (imgBlue) {

        imgBlue.src = './images/pinkwatch.png';

    } else {
        imgBlue.src = './images/watch-blue.png';

    }
});

// слайдер

let catalog = document.querySelector('.catalog__container');

let catalogBlack = catalog.querySelector('.catalog__iwatch-black');

let catalogGreen = catalog.querySelector('.catalog__iwatch-green');

let catalogPink = catalog.querySelector('.catalog__iwatch-pink');

let swiper = document.querySelector('.swiper-button');

let btnPrev = swiper.querySelector('.swiper-button-prev');

let images = catalog.querySelectorAll('.catalog__item');


btnPrev.addEventListener('click', (event) => {
    console.log(event.type);

    let prev = images[0].innerHTML;
    images[0].innerHTML = images[1].innerHTML;
    images[1].innerHTML = images[2].innerHTML;
    images[2].innerHTML = prev;

    let number = swiper.querySelector('.swiper-number');

    let num = number.innerHTML;

    if (+num >= 2) {
        number.innerHTML--;
    }


});

let btnNext = swiper.querySelector('.swiper-button-next');

btnNext.addEventListener('click', (event) => {
    console.log(event.type);

    let next = images[0].innerHTML;
    images[0].innerHTML = images[2].innerHTML;
    images[2].innerHTML = images[1].innerHTML;
    images[1].innerHTML = next;

    let number = swiper.querySelector('.swiper-number');

    let num = number.innerHTML;

    if (+num <= 2) {
        number.innerHTML++;
    }
})
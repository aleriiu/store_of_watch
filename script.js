'use strict'

let elem = document.querySelector('.greetings__container');

let watch = elem.querySelector('.greetings__btn');

watch.addEventListener('click', event => {
    event.target.style.background = 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)';
})

let iWatch = document.querySelector('.greetings__btn_iWatch');

let watchBlack = iWatch.querySelector('.iWatch-btn_black');


watchBlack.addEventListener('click', (event) => {

    console.log('Произошло событие', event.type);

    let imgBlue = document.getElementById('imgBlue');

    if (imgBlue) {

        imgBlue.src = './images/Blackwatch.png';

    } else {
        imgBlue.src = './images/watch-blue.png';

    }
});

let watchBlue = iWatch.querySelector('.iWatch-btn_blue');

watchBlue.addEventListener('click', (event) => {

    console.log('Произошло событие', event.type);

    let imgBlue = document.getElementById('imgBlue');

    if (imgBlue) {

        imgBlue.src = './images/watch-blue.png';

    } else {
        imgBlue.src = './images/watch-blue.png';

    }
});

let watchGreen = iWatch.querySelector('.iWatch-btn_green');

watchGreen.addEventListener('click', (event) => {

    console.log('Произошло событие', event.type);

    let imgBlue = document.getElementById('imgBlue');

    if (imgBlue) {

        imgBlue.src = './images/greenwatch.png';

    } else {
        imgBlue.src = './images/watch-blue.png';

    }
});

let watchPink = iWatch.querySelector('.iWatch-btn_pink');

watchPink.addEventListener('click', (event) => {

    console.log('Произошло событие', event.type);

    let imgBlue = document.getElementById('imgBlue');

    if (imgBlue) {

        imgBlue.src = './images/pinkwatch.png';

    } else {
        imgBlue.src = './images/watch-blue.png';

    }
});
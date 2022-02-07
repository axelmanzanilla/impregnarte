var imageList = document.querySelector('.slider-image-list');
var previousBtn = document.querySelector('.slider-previous-button');
var nextBtn = document.querySelector('.slider-next-button');
var sliderDots = document.querySelectorAll('input[name="slider-dot"]');

var widthImage = document.querySelector('.slider-image').offsetWidth || screen.width;
var numberImages = document.querySelectorAll('.slider-image').length - 2;

var isUp = true;
var sx;
var cx = -widthImage;
var indexImage = 0;
imageList.style.webkitTransform = `translate3d(${-widthImage}px, 0px, 0px)`;
sliderDots[0].checked = true;

imageList.addEventListener('touchstart', e => {
    e.preventDefault();
    sx = e.changedTouches[0].pageX - cx;
    isUp = false;
});

imageList.addEventListener('touchmove', e => {
    isUp || (imageList.style.webkitTransform = `translate3d(${e.changedTouches[0].pageX - sx}px, 0px, 0px)`);
});

imageList.addEventListener('touchend', e => {
    let newIndex;
    let value = (-1 * (new WebKitCSSMatrix(window.getComputedStyle(imageList).transform)).m41) / widthImage;

    if(cx + sx - e.changedTouches[0].pageX > 0){ // Positivo
        if(value % 1 >= 0.2) newIndex = Math.trunc(value);
        else newIndex = Math.trunc(value) - 1;
    }
    else{ // Negativo
        if(value % 1 <= 0.8) newIndex = Math.trunc(value) - 1;
        else newIndex = Math.trunc(value);
    }

    makeTransition(newIndex);
    isUp = true;
});


for(let i = 0; i < sliderDots.length; i++){
    sliderDots[i].addEventListener('change', e => {
        makeTransition(parseInt(e.target.value));
    })
}

previousBtn.addEventListener('click', () => makeTransition(indexImage - 1));
nextBtn.addEventListener('click', () => makeTransition(indexImage + 1));

function makeTransition(index){
    coordX = -(index + 1) * widthImage;
    imageList.style.transition = '-webkit-transform 275ms ease 0s';
    imageList.style.webkitTransform = `translate3d(${coordX}px, 0px, 0px)`;
    cx = coordX;
    
    if(index == -1) indexImage = numberImages - 1;
    else if(index == numberImages) indexImage = 0;
    else indexImage = index;

    sliderDots[indexImage].checked = true;

    setTimeout(() => {
        imageList.style.transition = '';
        if(index == -1){
            imageList.style.webkitTransform = `translate3d(${-numberImages*widthImage}px, 0px, 0px)`;
            cx = -numberImages*widthImage;
        }
        else if(index == numberImages){
            imageList.style.webkitTransform = `translate3d(${-widthImage}px, 0px, 0px)`;
            cx = -widthImage;
        }
    }, 275);
}

window.addEventListener('resize', function() {
    widthImage = document.querySelector('.slider-image').offsetWidth || screen.width;
    let cx = -widthImage;
    imageList.style.webkitTransform = `translate3d(${-widthImage}px, 0px, 0px)`;
});

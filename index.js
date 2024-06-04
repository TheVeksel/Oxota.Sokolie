let pictureshowed = false;
const cards = document.querySelectorAll('.gallery__card'),
    pictures = document.querySelectorAll('.gallery__img'),
    slider = document.querySelector('.slider'),
    sliderContainer = document.querySelector('.slider__container'),
    sliderBtnLeft = document.querySelector('.slider__btn-left'),
    sliderBtnRight = document.querySelector('.slider__btn-right'),
    sliderClose = document.querySelector('.slider__btn-close');

let cardIndex = 0,
    pictureFull = null,
    newPictureFull = null;

sliderBtnLeft.addEventListener('click', () => changePicture('left'));
sliderBtnRight.addEventListener('click', () => changePicture('right'));
sliderClose.addEventListener('click', () => closeSlider());

pictures.forEach(picture => {
    picture.addEventListener('click', () => {
        openFullscreen(picture);
    });
});

const openFullscreen = (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }
}

cards.forEach((item, index) => {
    item.addEventListener('click', () => {
        cardIndex = index;
        showPicture();
    });
});

const showPicture = () => {
    pictureFull = pictures[cardIndex].cloneNode();
    pictureFull.style.maxWidth = '500px';
    sliderContainer.append(pictureFull);
    slider.classList.remove('hidden');
    pictureshowed = true;
}

const changePicture = (dir) => {

    if (dir === 'left') {
        cardIndex > 0 ? cardIndex-- : cardIndex = cards.length - 1;

    } else if (dir === 'right') {
        cardIndex < cards.length - 1 ? cardIndex++ : cardIndex = 0;

    } else {
        return;
    }

    newPictureFull = pictures[cardIndex].cloneNode();
    newPictureFull.style.maxWidth = '500px';
    pictureFull.replaceWith(newPictureFull);
    pictureFull = newPictureFull;
}

const closeSlider = () => {
    pictureFull && pictureFull.remove();
    newPictureFull && newPictureFull.remove();
    slider.classList.add('hidden');
    pictureshowed = false;
}

let touchStartX = 0;
let touchEndX = 0;

sliderContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener('touchmove', e => {
    touchEndX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener('touchend', () => {
    handleSwipe();
});

function handleSwipe() {
    const threshold = 100; // Минимальное расстояние свайпа в пикселях

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) >= threshold) {
        changePicture(distance > 0 ? 'left' : 'right');
    }

    touchStartX = 0;
    touchEndX = 0;
}

const videos = document.querySelectorAll('.gallery__vid');

videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
});

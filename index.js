document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.gallery__card');
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider__container');
    const sliderBtnLeft = document.querySelector('.slider__btn-left');
    const sliderBtnRight = document.querySelector('.slider__btn-right');
    const sliderClose = document.querySelector('.slider__btn-close');
    let cardIndex = 0;
    let pictureFull = null;
    
    sliderBtnLeft.addEventListener('click', () => changePicture('left'));
    sliderBtnRight.addEventListener('click', () => changePicture('right'));
    sliderClose.addEventListener('click', closeSlider);
    
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            cardIndex = index;
            showPicture();
        });
    });
    
    function showPicture() {
        pictureFull = cards[cardIndex].querySelector('.gallery__img').cloneNode();
        pictureFull.style.maxWidth = '500px';
        sliderContainer.innerHTML = '';
        sliderContainer.appendChild(pictureFull);
        slider.classList.remove('hidden');
    }
    
    function changePicture(dir) {
        if (dir === 'left') {
            cardIndex = (cardIndex - 1 + cards.length) % cards.length;
        } else if (dir === 'right') {
            cardIndex = (cardIndex + 1) % cards.length;
        }
    
        pictureFull = cards[cardIndex].querySelector('.gallery__img').cloneNode();
        pictureFull.style.maxWidth = '500px';
        sliderContainer.innerHTML = '';
        sliderContainer.appendChild(pictureFull);
    }
    
    function closeSlider() {
        slider.classList.add('hidden');
    }
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    cards.forEach(card => {
        card.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
    
        card.addEventListener('touchmove', e => {
            e.preventDefault(); // Prevent scrolling while swiping
            touchEndX = e.changedTouches[0].screenX;
        });
    
        card.addEventListener('touchend', () => {
            handleSwipe();
        });
    });
    
    function handleSwipe() {
        const threshold = 100; // Minimum swipe distance in pixels
        const distance = touchEndX - touchStartX;
    
        if (Math.abs(distance) >= threshold) {
            changePicture(distance > 0 ? 'left' : 'right');
        }
    }
});

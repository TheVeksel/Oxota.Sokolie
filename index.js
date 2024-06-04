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

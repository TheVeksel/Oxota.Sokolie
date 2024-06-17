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


    "use strict"
    //==========================================
    
    //! ============== 1 вариант SWIPER ==============
    const swiper = new Swiper('.swiper', {
    
        //! Основные настройки 
        direction: 'horizontal', // 'vertical', 'horizontal'
        loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
        speed: 500, // скорость переключения слайдов
        effect: 'slider', // cards, coverflow, flip, fade, cube
        // initialSlide: 2, // Начинаем со 2 слайдера
        // freeMode: true, // можно перетаскивать как ленту
        slidesPerView: 1, // кол-во активных слайдов
        // centeredSlides: true, // центрирование слайдов
        
        //! Пагинация (точки)
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // true - Пагинация становится кликабельной
        },
    
        //! Кнопки вперед и назад 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        //! Автоматическое перелистывание
        // autoplay: {
        //     delay: 1000, //Задержка перед перелистыванием 1с = 1000мл/с
        // },
    });
    
    
    //! ============== 2 вариант SWIPER ==============
    const gallary = new Swiper('.gallary', {
    
        //! Основные настройки 
        direction: 'horizontal', 
        loop: true, 
        spaceBetween: 20,
        slidesPerView: 3, 
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
    
        breakpoints: {
            1251: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
    
            951: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
    
            0: {
                spaceBetween: 0,
                slidesPerView: 1,
            },
        },
    });
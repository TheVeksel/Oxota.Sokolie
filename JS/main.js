// Обработка события клика по элементам меню
$(".header__nav-item").on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1300);
});

// Плавная прокрутка наверх и появление кнопки вверх
const buttn = document.getElementById('topBtnn');
let prevScrollpos = window.scrollY;

function handleScroll() {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos || window.scrollY < 10) {
      buttn.style.display = "block";
    } else {
      buttn.style.display = "none";
    }

    if (prevScrollpos > currentScrollPos && window.scrollY > 10) {
      buttn.style.opacity = "1";
    } else {
      buttn.style.opacity = "0";
    }

    prevScrollpos = currentScrollPos;
};

window.onscroll = function() {
    handleScroll();
};

function topFunction() {
  smoothScrollToTop();
}

function smoothScrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
      window.requestAnimationFrame(smoothScrollToTop);
      window.scrollTo(0, c - c / 8);
  }
}

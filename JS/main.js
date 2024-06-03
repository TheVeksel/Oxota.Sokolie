// Обработка события клика по элементам меню
$(".header__nav-item").on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1300);
});

// Плавная прокрутка наверх и появление кнопки вверх
const butt = document.getElementById('topBtn');
let prevScrollpos = window.scrollY;

function handleScroll() {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos || window.scrollY < 10) {
      butt.style.display = "block";
    } else {
      butt.style.display = "none";
    }

    if (prevScrollpos > currentScrollPos && window.scrollY > 10) {
      butt.style.opacity = "1";
    } else {
      butt.style.opacity = "0";
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

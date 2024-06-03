$(function () {

$(".header__nav-item").on("click", function (e) {
  e.preventDefault()
  var id = $(this).attr('href'),
    top = $(id).offset().top
  $('body,html').animate({ scrollTop: top }, 1300)
})

$(window).scroll(function() {
  $(".animated-element").each(function() {
    var position = $(this).offset().top;
    var scrollPosition = $(window).scrollTop();
    if (position < scrollPosition + $(window).height() - 100) { // Подстройте значение 100 по вашему усмотрению
      $(this).addClass("visible");
    }
  });
});
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const butt = document.getElementById('topBtn');
let prevScrollpos = window.scrollY;

mybutton.addEventListener("click", function() {
  topFunction();
});

window.onscroll = function() {
  handleScroll();
};

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
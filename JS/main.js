
$(function () {

$(".header__nav-item, .header__nav, .footer__go-top").on("click", function (e) {
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

function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  const changingText = document.getElementById('changing-text');

  if (screenWidth <= 1135) {
      changingText.textContent = "Союз ООРО Всеволожского района Ленинградской области";
  } else {
      changingText.textContent = "МОО «Союз ООРО Всеволожского района Ленинградской области»";
  }
}

window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;

})
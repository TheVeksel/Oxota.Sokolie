
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
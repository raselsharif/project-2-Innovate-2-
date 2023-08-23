$(function () {
  $('.service__menu').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".prev__arrow",
    nextArrow: ".next__arrow",
    dots: true,
  });
})

// $(function(){
//       $(".team__icon").click(function(){
//         $(".team__icon__menu").toggleClass("team__icon__menu__active");
//         $(this).toggleClass("team__icon__active");
//         $(".team__overlay").toggleClass("team__overlay__active");
//         $(this).find('i').toggleClass("fa-solid fa-plus fa-solid fa-xmark");
//       })
// })

function toggleClass(toggle) {
  toggle.parentNode.childNodes[7].classList.toggle('team__icon__menu__active');
  toggle.parentNode.childNodes[3].classList.toggle('team__overlay__active');
  toggle.parentNode.childNodes[5].childNodes[1].classList.toggle('fa-xmark');
}
$(function(){
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
//       $(".team__item__btn").click(function(){
//         $(".team__item__btns").toggleClass("team__item__btns-modify");
//         $(".team__item__blog").toggleClass("team__item__blog-modify");
//         $(".team__item__btn").toggleClass("team__item__btn-modify");
//         $(".team__item__blog__p").toggleClass("team__item__blog__p-active");
//         $(".team__item__blog__span").toggleClass("team__item__blog__span-modify");
//         $("..team__item__btn__2").toggleClass("team__item__btn__2-modify");
//       })
// })
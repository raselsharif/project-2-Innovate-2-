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

$(function(){
      $(".team__icon").click(function(){
        $(".team__icon__menu").toggleClass("team__icon__menu__active");
        $(this).toggleClass("team__icon__active");
        $(".team__overlay").toggleClass("team__overlay__active");
        $(this).find('i').toggleClass("fa-solid fa-plus fa-solid fa-xmark");
      })
})
$(document).ready(function () {
  $(document).scroll(function() {
    var coordTop = $(window).scrollTop();
    var mainNav = $('.main-nav');
    var navOffset = mainNav.data('offset');

    if (navOffset > 0) {
      if (mainNav.hasClass("main-nav--fix")) {
        if (coordTop > 75 && coordTop < 150 ) {
          $(".main-nav--fix").hide();
        }
        if (navOffset <= coordTop) {
          $(".main-nav--fix").slideDown(150);
        }
        if (navOffset > coordTop) {
          $(".main-nav--fix").slideUp(150);
        }
      }
    } else {
      mainNav.addClass('main-nav--fix');
    }
  });
});


$(document).ready(function () {
  $('.form__input--num-text').attr('readonly', true);
  $('.form__input--up').on('click', function(event) {
    event.preventDefault();
    var num = +$(this).closest('.form__input').find('.form__input--num-text').val();
    $(this).closest('.form__input').find('.form__input--num-text').val(num + 1);
  });

  $('.form__input--down').on('click', function(event) {
    event.preventDefault();
    var num = +$(this).closest('.form__input').find('.form__input--num-text').val();
    if (num > 0) {
      $(this).closest('.form__input').find('.form__input--num-text').val(num - 1);
    }
  });
});

$(document).ready(function() {
  $(".range-filter__slider").slider({
    min: 0,
    max: 3500,
    range: true,
    animate: true,
    values: [0, 3000],
    stop: function(event, ui) {
      $(".js-price-min").val($(".range-filter__slider").slider("values",0));
      $(".js-price-max").val($(".range-filter__slider").slider("values",1));
    },
    slide: function(event, ui) {
      $(".js-price-min").val($(".range-filter__slider").slider("values",0));
      $(".js-price-max").val($(".range-filter__slider").slider("values",1));
    }
  });
  $(".js-price-min").change(function(){
    var value1 = $(".js-price-min").val();
    var value2 = $(".js-price-max").val();
    if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $(".js-price-min").val(value1);
    }
    $(".range-filter__slider").slider("values", 0, value1);
    if(value1 > 3500){
      value1 = 3500;
      $(".js-price-min").val(3500)
    }
  });
  $(".js-price-max").change(function(){
    var value1 = $(".js-price-min").val();
    var value2 = $(".js-price-max").val();
    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $(".js-price-max").val(value2);
    }
    $(".range-filter__slider").slider("values", 1, value2);
    if(value2 > 3500){
      value2 = 3500;
      $(".js-price-max").val(3500)
    }
  });
});
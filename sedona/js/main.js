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


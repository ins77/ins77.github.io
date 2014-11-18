$('.js-show-tab').on('click', function(event) {
  event.preventDefault();
  if (! $(this).hasClass('active')) {
    $('.tab-item.active').removeClass('active');
    $('.tab.active').removeClass('active');
    $(this).closest('.tab-item').addClass('active');
    var link = $(this).attr('href');
    $(link).addClass('active');
  }
});

$('.js-modal-feedback').on('click', function(event) {
  event.preventDefault();
  $('.modal-feedback').fadeIn();
  var link = $(this).attr('href');
  $(link).addClass('active');
});

$('.js-modal-basket').on('click', function(event) {
  event.preventDefault();
  $('.modal-basket').fadeIn();
  if (! $('.top-menu-basket').hasClass('active')) {
      $('.top-menu-basket').addClass('active');
  }
  var n = +$('.top-menu-basket').children('.count').text();
  $('.top-menu-basket').children('.count').text(++n); 
});

$('.modal').on('click', '.btn-no', function() {
  $('.modal').fadeOut();
}).on('click', '.btn-yes', function() {
  event.preventDefault();
});

$('.catalog-sorting-link').on('click', function(event) {
  event.preventDefault();
  if (! $(this).hasClass('active')) {
      $('.catalog-sorting-link.active').removeClass('active');
      $(this).addClass('active');
  }
});

$('.filter-options').on('click', '.filter-up', function(event) {
  event.preventDefault();
  $(this).closest('.filter-options').find('.filter-options-list').slideToggle();
  if ($(this).hasClass('icon-up')) {
    $(this).removeClass('icon-up');
    $(this).addClass('icon-down');
  } else {
    $(this).removeClass('icon-down');
    $(this).addClass('icon-up');
  }
});

$('.range-filter').on('click', '.filter-up', function(event) {
  event.preventDefault();
  $(this).closest('.range-filter').find('.range-filter-box').slideToggle();
  if ($(this).hasClass('icon-up')) {
    $(this).removeClass('icon-up');
    $(this).addClass('icon-down');
  } else {
    $(this).removeClass('icon-down');
    $(this).addClass('icon-up');
  }
});

$('.js-account-enter').on('click', function(event) {
  event.preventDefault();
  $('.header-account-enter').hide();
  $('.header-account-user').show();
});

$('.js-account-logout').on('click', function(event) {
  event.preventDefault();
  $('.header-account-user').hide();
  $('.header-account-enter').show();
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    stagePadding: 0,
    loop:true,
    margin:0,
    nav:true,
    dots: true,
    items: 1
});
$(document).ready(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $('.tabs li').on('click', function() {
    var tab = $(this).data('tab');

    $('.tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('.tab-content').hide();
    $('#' + tab + '-content').show();
  });
});
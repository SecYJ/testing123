$(document).ready(function () {
  // mobile版header區塊漢堡選單
  $('.show-menu').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('open-menu');
  });
});
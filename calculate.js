$(document).ready(function () {
  $('.inputElements').on('click', function () {
    $('#calculatorInput').append($(this).text());
  });
  $('.clear').on('click', function () {
    $('#calculatorInput').empty();
  });
  $('.evaluate').on('click', function () {
    eval($('#calculatorInput').val());
  });
});

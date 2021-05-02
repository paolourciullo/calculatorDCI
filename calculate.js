$(document).ready(function () {
  $('.inputElements').on('click', function () {
    $('#calculatorInput').append($(this).text());
  });
});

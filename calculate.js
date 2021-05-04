$(document).ready(function () {
  $('.inputElements').on('click', function () {
    $('#calculatorInput').append($(this).text());
  });
  $('.clear').on('click', function () {
    $('#calculatorInput').empty();
  });
  $('.evaluate').on('click', function () {
    // calcIn = $('#calculatorInput').text();
    // console.log(calcIn);
    // console.log(typeof calcIn);

    calcOut = eval($('#calculatorInput').text());
    $('#calculatorInput').text(calcOut);
  });
});

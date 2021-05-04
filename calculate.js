$(document).ready(function () {
  $('.inputElements').on('click', function () {
    $('#calculatorInput').append($(this).text());
  });
  $('.clear').on('click', function () {
    $('#calculatorInput').empty();
  });

  $('.evaluate').on('click', function () {
    calcOut = eval($('#calculatorInput').text());
    try{
      if(calcOut == '' ) throw 'empty';
      
      
    $('#calculatorInput').text(calcOut);

  }
  catch(err) {
    $('#calculatorInput').text('Input is ' + err)
  }
  );
  // try {
  // } catch (err) {
  //   $('#calculatorInput').text(err.message);
  // }
});

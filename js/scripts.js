// Business Logic
var romanConverter = function(number){
  if(number === 1){
    return "I";
  } else if(number === 5){
    return "V";
  } else if(number === 10){
    return "X";
  } else if(number === 50){
    return "V";
  } else if(number === 100){
    return "C";
  } else if(number === 500){
    return "D";
  } else if(number === 1000){
    return "M";
  } else {
    return "Out Of Range";
  };
};















// User Interface
$(document).ready(function(){
  $("#roman-form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#input-number").val());
    var result = romanConverter(userInput);
    $('#user-output').text(result);
  });



});

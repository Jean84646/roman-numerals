// Business Logic
var romanConverter = function(number){
  return number;
};















// User Interface
$(document).ready(function(){
  $("#roman-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#input-number").val();
    var result = romanConverter(userInput);
    $('#user-output').text(result);
  });



});

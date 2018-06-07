// Business Logic
var romanConverter = function(number){
  var output = ""

  if(number < 5){
    for(i=1; i<= number; i +=1){
      output = output.concat(singleNumberConverter(1));
    };
  } else if(number < 10){
    output = output.concat(singleNumberConverter(5));
    for(i=6; i<= number; i +=1){
      output = output.concat(singleNumberConverter(1));
    };
  } else if(number < 50){
    var tenCount = parseInt(number/10);
    for(i=1; i<= tenCount; i +=1){
      output = output.concat(singleNumberConverter(10));
    };
    var singleRemainder = number%10;
      if(singleRemainder >=5){
        output = output.concat(singleNumberConverter(5));
        for(i=6; i<= singleRemainder; i +=1){
          output = output = output.concat(singleNumberConverter(1));
        };
      } else {
        for(i=1; i<= singleRemainder; i +=1){
          output = output = output.concat(singleNumberConverter(1));
        };
      };
    } else if (number < 100){
      output = output.concat(singleNumberConverter(50));
      var tenRemainder = (number - 50);
      var tenCount = parseInt(tenRemainder/10);
      var singleRemainder = tenRemainder%10;
        for (i=1; i<= tenCount; i +=1){
          output = output.concat(singleNumberConverter(10));
        };
          if(singleRemainder >=5){
            output = output.concat(singleNumberConverter(5));
            for(i=6; i<= singleRemainder; i +=1){
              output = output = output.concat(singleNumberConverter(1));
            };
          } else {
            for(i=1; i<= singleRemainder; i +=1){
            output = output = output.concat(singleNumberConverter(1));
          };
        };
      } else if (number < 500){
        






      };

  return output;
};


var singleNumberConverter = function(number){
  if(number === 1){
    return "I";
  } else if(number === 5){
    return "V";
  } else if(number === 10){
    return "X";
  } else if(number === 50){
    return "L";
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

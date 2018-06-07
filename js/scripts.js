// Business Logic
var romanConverter = function(number){
  var output = "";

  if (number > 3999){
    return "Out Of Range";
  } else if (number >= 1000){
    var thousandCount = parseInt(number/1000);
    var remainder = number%1000;
    output = output.concat(joinRomanNumeral(thousandCount,"M"));
    output = output.concat(romanConverter(remainder));
  } else if (number >= 900){
    output = output.concat("CM");
    output = output.concat(romanConverter(number-900));
  } else if (number >= 500){
    output = output.concat("D");
    output = output.concat(romanConverter(number-500));
  } else if (number >= 400){
    output = output.concat("CD");
    output = output.concat(romanConverter(number-400));
  } else if (number >= 100){
    var hundredCount = parseInt(number/100);
    var remainder = number%100;
    output = output.concat(joinRomanNumeral(hundredCount,"C"));
    output = output.concat(romanConverter(remainder));
  } else if (number >= 90){
    output = output.concat("XC");
    output = output.concat(romanConverter(number-90));
  } else if (number >= 50){
    output = output.concat("L");
    output = output.concat(romanConverter(number-50));
  } else if (number >= 40){
    output = output.concat("XL");
    output = output.concat(romanConverter(number-40));
  } else if (number >= 10){
    var tenCount = parseInt(number/10);
    var remainder = number%10;
    output = output.concat(joinRomanNumeral(tenCount,"X"));
    output = output.concat(romanConverter(remainder));
  } else if (number === 9){
    output = output.concat("IX");
  } else if (number >= 5){
    output = output.concat("V");
    output = output.concat(romanConverter(number-5));
  } else if (number === 4){
    output = output.concat("IV");
  } else {
    output = joinRomanNumeral(number, "I");
  };
  return output;
};




var joinRomanNumeral = function(number, letter){
  var output = "";
  for (var i = 1; i <= number; i += 1){
    output = output.concat(letter);
  }
  return output;
};










// var romanConverter = function(number){
//   var output = ""
//
//   if(number < 5){
//     for(i=1; i<= number; i +=1){
//       output = output.concat(singleNumberConverter(1));
//     };
//   } else if(number < 10){
//     output = output.concat(singleNumberConverter(5));
//     for(i=6; i<= number; i +=1){
//       output = output.concat(singleNumberConverter(1));
//     };
//   } else if(number < 50){
//     var tenCount = parseInt(number/10);
//     for(i=1; i<= tenCount; i +=1){
//       output = output.concat(singleNumberConverter(10));
//     };
//     var singleRemainder = number%10;
//       if(singleRemainder >=5){
//         output = output.concat(singleNumberConverter(5));
//         for(i=6; i<= singleRemainder; i +=1){
//           output = output = output.concat(singleNumberConverter(1));
//         };
//       } else {
//         for(i=1; i<= singleRemainder; i +=1){
//           output = output = output.concat(singleNumberConverter(1));
//         };
//       };
//     } else if (number < 100){
//       output = output.concat(singleNumberConverter(50));
//       var tenRemainder = (number - 50);
//       var tenCount = parseInt(tenRemainder/10);
//       var singleRemainder = tenRemainder%10;
//         for (i=1; i<= tenCount; i +=1){
//           output = output.concat(singleNumberConverter(10));
//         };
//           if(singleRemainder >=5){
//             output = output.concat(singleNumberConverter(5));
//             for(i=6; i<= singleRemainder; i +=1){
//               output = output = output.concat(singleNumberConverter(1));
//             };
//           } else {
//             for(i=1; i<= singleRemainder; i +=1){
//             output = output = output.concat(singleNumberConverter(1));
//           };
//         };
//       } else if (number < 500){
//         output = output.concat(singleNumberConverter(100));
//         var hundredRemainder = number%100;
//         var hundredCount = parseInt(hundredRemainder/100);
//         var tenRemainder = (number - 50);
//         var tenCount = parseInt(tenRemainder/10);
//         var singleRemainder = tenRemainder%10;
//         for(i=1; i<= hundredCount; i +=1){
//           output = output.concat(singleNumberConverter(100));
//         };
//         for(i=1; i<= tenCount; i +=1){
//           output = output.concat(singleNumberConverter(10));
//         };
//           if(singleRemainder >=5){
//               output = output.concat(singleNumberConverter(5));
//               for(i=6; i<= singleRemainder; i +=1){
//                 output = output = output.concat(singleNumberConverter(1));
//             };
//           } else {
//               for(i=1; i<= singleRemainder; i +=1){
//               output = output = output.concat(singleNumberConverter(1));
//             };
//         };
//       };
//   return output;
// };
//
//
// var singleNumberConverter = function(number){
//   if(number === 1){
//     return "I";
//   } else if(number === 5){
//     return "V";
//   } else if(number === 10){
//     return "X";
//   } else if(number === 50){
//     return "L";
//   } else if(number === 100){
//     return "C";
//   } else if(number === 500){
//     return "D";
//   } else if(number === 1000){
//     return "M";
//   } else {
//     return "Out Of Range";
//   };
// };















// User Interface
$(document).ready(function(){
  $("#roman-form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#input-number").val());
    var result = romanConverter(userInput);
    $('#user-output').text(result);
  });



});

/*
Create a function using recursion called numToText which takes a
string and returns a new string with all numeric numbers from the
input string converted to their corresponding text words. You can
assume that the numbers in the string are single digit nubmers.
Can you implement this function in two different ways?
One way involves creating an inner helper function (or subroutine),
the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

/********************************** Solution with inner recursive function *********************************/

var numToText = function(str) {
  //Create an object with keys as numeric numbers and the values will the corresping strings
  var numbers = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      0: 'zero'
    };
  //Create a variable called result set equal to an empty string
  var result = '';

  //Declare a recursive helper function that takes a string; as a parameter
  var createNewString = function(string) {
    //Base case: if string.length = 0
    if(string.length === 0) {
      //return result
      return;
    } else {
      //Declare variable called CurrentChar set equal str[0]
      var currentChar = string.charAt(0);
      //Check if currentChar of the string is in the dictionary
      if(numbers.hasOwnProperty(currentChar)) {
        //add the value of the number prop to result
        result += numbers [currentChar] // result = result.concat(numbers[currentChar])
      } else {
      //Else add the original character to result
        result = result.concat(currentChar);
      }
    //return recursive call with the sliced string
      return createNewString(string.slice(1));
    }
  }

  //call the recusive helper with str
  createNewString(str);

  //return result
  return result;

};

console.log(numToText("I have 5 dogs and 6 ponies"));

/********************************** Solution without inner recursive function *********************************/

var numToText = function(str) {
  var numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };
  var result = '';
  if(str.length === 0) {
    return result;
  } else {
    var currentChar = str.charAt(0);
    if(numbers.hasOwnProperty(currentChar)) {
      result += numbers[currentChar];
    } else {
      result += currentChar;
    }
    return result + numToText(str.slice(1)); // same as return result.concat(numToText(str.slice(1)));
  }
};


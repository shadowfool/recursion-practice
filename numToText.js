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

var numToText = function(str) {
  var numbersOneToNine = ['one','two','three','four','five','six','seven','eight','nine'];
  var ans = [];
  var array = str.split(' ');
  var recur = function(arr){
  	if(arr.length == 0){
  		return ans;
  	}else{
  	  var temp = arr[0];
  	  if(!isNaN(temp)){
  		  ans.push(numbersOneToNine[temp]);
          recur(arr.slice(1,arr.length));
      }else{
      	ans.push(arr[0]);
        recur(arr.slice(1,arr.length));
      }
    }
  }
  recur(array);
  return ans.join(' ');
}


var numToText2 = function(str) {
	var numbersOneToNine = ['one','two','three','four','five','six','seven','eight','nine'];
	var ans = '';
	if(str.length === 0){
		return ans;
	}else{
	  var tempStr = str.split(' ');
    
	  if(!isNaN(tempStr[0])){
	 	ans = ans + ' ' + numbersOneToNine[tempStr[0]];
	  }else{
	 	ans = ans + ' ' + tempStr[0];
	  }
    }
    str = tempStr.slice(1,tempStr.length).join(' ');
    return ans + numToText2(str);
};

console.log(numToText("I have 5 dogs and 6 ponies"));

console.log(numToText2("I have 5 dogs and 6 ponies"));


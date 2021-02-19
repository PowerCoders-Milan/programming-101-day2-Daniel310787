//insert your pseudocode below
/*

-- create a variable for X which is goingto be the number to change for questions
-- create a variable for the ramdom number but it will empty
-- create a conditional to check if x is equal, more or less in regards of the random number we are looking for 
-- after assign the value x and y to var for ramdon number to be more precise 
-- print the number ramdonly 

*/

//insert your code below
var arr, y, x;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


arr = mathRandomInt(1, 100);
y = 20;
x = 25;
if (arr < x && arr > y) {
}
arr = mathRandomInt(y, x);
window.alert(arr);
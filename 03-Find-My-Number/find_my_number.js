//insert your pseudocode below
/*

. computer thinks ramdom number 1-100  
. user needs to find the number that computer is thinking 
. asking questions about the ramdom number 
. question your is higher , lower or equal to X
. my number is higher, lower or equal 
. If is correct print ok you guess right otherwise
. ask for a different number until you guessed the right number 

*/

//insert your code below

var Rnum, x;


Rnum = Number(window.prompt('Guess the number between 1-100'));
x = 35;
if (Rnum > x) {
  window.alert('This number is higher than my number');
} else if (Rnum < x) {
  window.alert('This number is lower than my number');
} else if (Rnum == x) {
  window.alert('You guessed the right number');
}
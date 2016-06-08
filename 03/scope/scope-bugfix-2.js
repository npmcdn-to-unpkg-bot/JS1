/*
BUG FIXED WITH FOREACH LOOP:

The difference between this solution and the original code is the use of a forEach loop,
rather than a for loop.

This solution works because in a forEach loop, the variable i is scoped to the function inside the 
forEach. It is not hoisted to the top of the addToQueue function. It is only available inside the
forEach loop. If we console.log(i) right before we return positions, we see that i is undefined.

This means that when we execute the functions in our queuePositions array with 
console.log(queuePositions[0]()) and console.log(queuePositions[1]()), i has retained the value 
it had inside the forEach loop. 

In the first console.log i is 0, and in the second console.log i is 1. So the output is 11 and 12, 
rather than 13 and 13.
*/


function addToQueue(names, queueLength){
  var positions = []

  names.forEach(function(name, i){
      positions[i] = function() {
        return queueLength + i + 1
      }
  });
  //console.log(i)
  return positions
}

var people = ['Ash', 'Kelly']
var queuePositions = addToQueue(people, 10)

console.log(queuePositions[0]()) // 11
console.log(queuePositions[1]()) // 12 
/*
BUG FIXED WITH IIFE: 

The difference between this solution and the original code is that inside our 
for loop, the action of adding the function to the positions array is wrapped 
inside an IIFE (immediately, invoked function expression).

The IIFE takes x as a parameter. When the IIFE is executed, i is passed in as the argument.
This effectively creates a new variable, x, which stores the value of i in each iteration
of the for looop. x is scoped to the IIFE, and is not hoisted to the top of the addToQueue 
function.

When we console.log(queuePositions[0]()) and console.log(queuePositions[1]()), the functions
in our queuePositions array are executed. They are executed with the value of x, which
refelcts the iteration of the for loop, not the value of i, which is 2. In the first console.log x
is 0, and in the second console.log x is 1.

So the output is 11 and 12, rather than 13 and 13.
*/


function addToQueue(names, queueLength){
  var positions = []

  for (var i = 0; i < names.length; i++) {
    (function(x){
      positions[x] = function() {
        return queueLength + x + 1
      }
    })(i)
  }
  console.log(positions)
  return positions
}

var people = ['Ash', 'Kelly']
var queuePositions = addToQueue(people, 10)

console.log(queuePositions[0]()) // 11
console.log(queuePositions[1]()) // 12

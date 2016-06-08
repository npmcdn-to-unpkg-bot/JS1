/*
BUG FIXED WITH LET: 

The difference between this solution and the original code is the use of the keyword let in
our for loop, rather than var.

Let means a variable is block scoped, rather than function scoped. So rather than i being hoisted
to the top of our addToQueue function, i is only available inside the for loop.

If we console.log i outside of our for loop, i is undefined. 

This means that when we execute the functions in our queuePositions array with 
console.log(queuePositions[0]()) and console.log(queuePositions[1]()), i has retained the value 
it had inside the for loop. 

In the first console.log i is 0, and in the second console.log i is 1. So the output is 11 and 12, 
rather than 13 and 13.
*/

"use strict";

function addToQueue(names, queueLength){
  var positions = []

  for (let i = 0; i < names.length; i++) {
    positions[i] = function() {
      return queueLength + i + 1
    }
  }

  //console.log('i', i)
  return positions
}

var people = ['Ash', 'Kelly']
var queuePositions = addToQueue(people, 10)

console.log(queuePositions[0]()) // 11
console.log(queuePositions[1]()) // 12
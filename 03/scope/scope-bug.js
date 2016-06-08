/*
THE BUG:

The for loop in our addToQueue function uses the keyword var to declare i.
The variable i gets hoisted to the top of the addToQueue function. 
This means i is available at the addToQueue function scope, and is not
contained to the for loop block scope.

The for loop iterates over the names which are passed into our addToQueue function.
For each of those names, it adds a function to the positions array.
At this point, the function has not been called. Positions is simply an array of functions.
When we console.log positions before positions is returned, we see [ [Function], [Function] ]

When we console.log i before positions is returned, we see the value of i is 2. 
The value of i is 2 at this point because our for loop has gone over the first name, 
incremented i to 1, gone over the second name, incremented i to 2, then seen that
2 is no longer less than names.length, so it has stopped iterating.

When we console.log(queuePositions[0]()) and console.log(queuePositions[1]())
we are executing the functions in our queuePositions array. Whenever you see (), 
this means a function is being executed.

We expect to see 11 and 12 logged to the console. Instead, we see 13 and 13. 
This is because by the time we console.log and execute the functions in our 
positions array, i has already been incremented to 2. So the value that is logged
is always 10 + 2 + 1, or queueLength + i + 1.
*/


function addToQueue(names, queueLength){
  var positions = []

  for (var i = 0; i < names.length; i++) {
    positions[i] = function() {
      return queueLength + i + 1
    }
  }
  console.log(positions)
  console.log(i)
  return positions
}

var people = ['Ash', 'Kelly']
var queuePositions = addToQueue(people, 10)

console.log(queuePositions[0]()) // 13?! Should be 11
console.log(queuePositions[1]()) // 13 As well! Should be 12

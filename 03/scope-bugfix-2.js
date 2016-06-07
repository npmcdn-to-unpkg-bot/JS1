
//original code with bug

/*
The problem:

The for loop uses a var, which gets hoisted to the top of the addToQueue function
The for loop then iterates over the names. 
For each name it adds a function to the positions array. 
At this point, the function has not been called. 
Positions is simple an array of functions.
When we console.log positions before positions is returned, we see [ [Function], [Function] ]
When we console.log i before positions is returned, we see the value is 2, or names.length.
When i is 2, our for loops stops running because i is no longer less than names.length
When we console.log(queuePositions[0]()) and console.log(queuePositions[1]())
we are calling the functions in our queuePositions array.
But by the time these functions are called, i has been incremented to 2, 
the for loops is finished, so the value returned by the functions is always 13.
*/

function addToQueue(names, queueLength){
  var positions = []

  for (var i = 0; i < names.length; i++) {
    positions[i] = function() {
      return queueLength + i + 1
    }
  }

  return positions
}

var people = ['Ash', 'Kelly']
var queuePositions = addToQueue(people, 10)

console.log(queuePositions[0]()) // 13?! Should be 11
console.log(queuePositions[1]()) // 13 As well!

//bug fixed  with forEach loop

/*
this fix works because:
with a forEach loop, the i is also scoped inside the forEach. as opposed to a for loop, where the i is hoisted to the top of the
to the top of the parent function 
*/
function addToQueue(names, queueLength){
  var positions = []

  names.forEach(function(name, i){
      positions[i] = function() {
        return queueLength + i + 1
      }
  });

  return positions
}

var people = ['Ash', 'Kelly']
var queuePositions = addToQueue(people, 10)

console.log(queuePositions[0]()) // 13?! Should be 11
console.log(queuePositions[1]()) // 13 As well!
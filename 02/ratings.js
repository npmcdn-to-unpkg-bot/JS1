/*

https://gist.github.com/jesstelford/027ee367d6f56c94dfadb1924e408ae9

An example of the final output could be:

Age 1 is allowed to see: G
Age 23 is allowed to see: G,PG,M,MA
Age 8 is allowed to see: G
Age 12 is allowed to see: G,PG,M
Age 16 is allowed to see: G,PG,M,MA
Or, even;

G
1, 23, 8, 12, 16
PG
23, 12, 16
M
23, 12, 16
MA
23, 16
*/

var ages = [1, 23, 8, 12, 16];
var ratings = ['G', 'PG', 'M', 'MA'];
var minAgeForRating = [0, 9, 12, 15];

ages.forEach(function(age){
  var age = age;
  var canSee = [];
  var i = 0;

  minAgeForRating.forEach(function(minAge){
    if(age >= minAge){
      canSee.push(ratings[i]);
    }
    i++;
  });

  console.log(age);
  console.log(canSee);
});
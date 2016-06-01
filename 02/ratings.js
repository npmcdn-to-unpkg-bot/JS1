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

ages.forEach(function(age, i){
  var age = age;
  var canSee = [];

  minAgeForRating.forEach(function(minAge, i){
    if(age >= minAge){
      canSee.push(ratings[i]);
    }
  });

  console.log(age);
  console.log(canSee);
});


/*
.map()` returns a new array where each value in the original array is replaced with
what you return from the `function`. Can you think how you'd go from what you've got
to an index in the ratings array, and return that from map?
*/

ratings.forEach(function(rating, i){
  console.log(rating);

  var canSee = [];
  ages.map(function(age){
    if( age >= minAgeForRating[i] ){
      canSee.push(age);
    }
  });

  console.log(canSee);
});


//jess solution
console.log('jess solution')

var ratingsAllowed = ages.map(function(age){
  return ratings.filter(function(rating, index){
    return age >= minAgeForRating[index];
  })
})

ages.forEach(function(age, index){
  console.log(age);
  console.log(ratingsAllowed[index].toString());
})
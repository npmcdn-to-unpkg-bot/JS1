/*

In node, add 2 new properties to each new food (`waffle` & `carrot`):
 1. `tasty` which is unique to each instance
 2. `properties`, an array, which is the same for all instances

 */

const food = {
  init: function(type) {
    this.type = type
  },
  eat: function() {
    console.log(`you ate the ${this.type}`)
  }
}

const waffle = Object.create(food)
waffle.init('waffle')
waffle.tasty = true

console.log(waffle)

const carrot = Object.create(food)
carrot.init('carrot')
carrot.tasty = false

console.log(carrot)

food.properties = []

console.log(food)

console.log(waffle.properties)

console.log(carrot.properties)


/*
Composition over inheritance

The code is taken from Composition over inheritance: https://www.youtube.com/watch?v=wfMtDGfHWpA

Exercise - Make the following enhancements:

Uber is a driver, and an app (with an .install() function)

DogSim2000 is an app and a barker (but not a pooper!)

Create instances, and trigger their functionality

driver's need fuel!
  Add a showRemainingFuel() method
  Add a refuel() method to top up
  Change drive() to take away some fuel each time it is called

Test your changes out in node by running node index.js.
*/

const barker = (state) => {
  return {
    bark: () => { console.log(`Woof, I am ${state.name}`) }
  }
}
const pooper = (state) => {
  return {
    poop: () => { console.log(`💩`) }
  }
}
const driver = (state) => {
  return {
    drive: () => {
      state.position += state.speed
      state.fuel -= 10
    },
    showRemainingFuel: () => { console.log(state.fuel) },
    refuel: () => { state.fuel += 10 }
  }
}
const dog = (name) => {
  'use strict'
  let state = {
    name: name
  }
  return Object.assign({}, barker(state), pooper(state))
}

const app = () => {
  return {
    install: () => {}
  }
}

const uber = (fuel) => {
  'use strict'
  let state = {
    fuel: fuel
  }
  return Object.assign({}, driver(state), app(state) )
}

const DogSim2000 = () => {
  'use strict'
  let state = {
  }
  return Object.assign({}, app(state), barker(state) )
}

var fido = dog('Fido')
fido.bark()
// > 'Woof, I am Fido'
console.log('creating instance of uber')
var car = uber(100)
console.log(car)

// > 'Woof, I am Fido'
console.log('creating instance of dogsim')
var sim = DogSim2000()
console.log(sim)

console.log('testing fuel methods')
car.showRemainingFuel()
car.drive()
car.drive()
car.showRemainingFuel()
car.refuel()
car.showRemainingFuel()

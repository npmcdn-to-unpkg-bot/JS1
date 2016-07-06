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
    showRemainingFuel: () => { },
    refuel: () => { }
  }
}
const dog = (name) => {
  'use strict'
  let state = {
    name: name
  }
  return Object.assign({}, barker(state), pooper(state))
}

const app = (state) => {
  return {
    install: () => {}
  }
}

const uber = (state) => {
  return Object.assign({}, driver(state), app(state) )
}

const DogSim2000 = (state) => {
  return Object.assign({}, app(state), barker(state) )
}

var fido = dog('Fido')
fido.bark()
// > 'Woof, I am Fido'

var car = uber()
console.log(car)

var sim = DogSim2000()
console.log(sim)

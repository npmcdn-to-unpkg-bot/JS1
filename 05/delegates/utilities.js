// https://gist.github.com/jesstelford/a981e6877034231bd43b526a07b3a7b4

function siblings(selector) {
  var element = document.querySelector(selector)
  var childElements = Array.from(element.parentNode.children)
  return childElements.filter(function(child) {
    return child !== element
  })
}

function closest(element, query) {
  while (element !== document) {
    if (element.matches(query)) {
      return element
    }
    element = element.parentNode
  }
  return null
}

function delegate(selector, eventName, targetSelector, listener) {
  document.querySelector(selector).addEventListener(eventName, function (event) {
    console.log(this) //this is the element you bound the event listener to (in our case, the body)
    console.log(event.target) //event.target is the deepest element that you clicked on 
    var closestMatch = closest(event.target, targetSelector)
    if (closestMatch) {
      event.delegateTarget = closestMatch
      listener(event)
    }
  })
}

delegate('body', 'click', 'li', function(event){
  console.log(event.delegateTarget) //event.delegateTarget is the closest parent li element to event.target
})


// with every event, we have access to event.target
// but target is not always what you bound the event handler to 
// the target is always the deepest element under your mouse position
// so if you have an event listener on an li, and the li contains a spain, event.target would be the span
// but sometimes we want to target the parent element, eg the entire li, not just the span
// this is where can can use a delegate function
// this function takes li as the targetSelector
// it will then go up the dom until it finds this closest li elmement to the event.target
// this li will become event.delegateTarget, allowing us to target the li, not the span



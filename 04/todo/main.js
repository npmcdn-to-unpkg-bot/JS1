/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#my-list" list.
- Only add an item if the input box is not blank.
- Clear the input box when the user clicks the button.

Here are some bonus tasks to push your DOM knowledge!
- Bonus tasks:
  - When a list item is archived, change its background colour to "green"
  - Add a link to each item to delete it completely
  - Instead of deleting it completely, move it to a second list called "Archive"

*/

function buttonClicked(event) {
  event.preventDefault()
  var todo = document.querySelector('#new-thing').value
  if(todo != ""){
    var list = document.querySelector('#my-list')
    addToList(list, todo)
  }
}

function addToList(list, text) {
  var listItem = document.createElement('li')
  listItem.className = "list-thing"
  listItem.innerText = text
  var cross = document.createElement('a')
  cross.className = "remove-todo"
  cross.innerHTML = ' x'
  cross.href = ""
  listItem.appendChild(cross)
  list.appendChild(listItem)
  todo = document.querySelector('#new-thing').value = ""
}

function removeTodo(event){
  event.preventDefault()
  var todo = event.target.parentNode
  var list = document.querySelector('#done-list')
  addToDone(list, todo)
}

function addToDone(list, todo){
  todo.childNodes[1].remove()
  todo.style.backgroundColor = 'green'
  list.appendChild(todo)
}

var button = document.querySelector('#new-thing-button')
button.addEventListener('click', buttonClicked)

var remove = document.querySelectorAll('.remove-todo')
Array.from(remove).forEach(function(r){
  r.addEventListener('click', removeTodo)
})

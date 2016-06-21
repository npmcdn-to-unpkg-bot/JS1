/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#my-list" list.
- Only add an item if the input box is not blank.
- Clear the input box when the user clicks the button.

Your code must use these features:

- Event delegation (Utilities: http://bit.ly/js1-utilities )
- Separate State from DOM
- Use a View Template

Here are some bonus tasks to push your DOM knowledge!
- Bonus tasks:
  - When a list item is archived, change its background colour to "green"
  - Add a link to each item to delete it completely
  - Instead of deleting it completely, move it to a second list called "Archive"

*/

(function() {

  var list = document.querySelector('#my-list')

  var state = {
    todos: ["Take out trash", "Clean Dishes", "Dance!"]
  }

  delegate('#container','click','input[type="submit"]', () => {
    event.preventDefault();

    let todoText = document.querySelector('#new-thing').value;
    if(!todoText) return;

    state.todos.push(todoText);
    document.querySelector('#new-thing').value = '';
    
    render(state, list);
  })

  function render(data, into) {
    list.innerHTML = `
      ${data.todos.map((todo) => {
        return `
          <li class="todo">
            ${todo}
          </li>
        `
      }).join('')}
    `
  }

})()

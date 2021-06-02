// Adding a new item to the list
function newItem() {
let li = $('<li></li>');
let inputValue = $('#input'). val();
li.append(inputValue);

if (inputValue === '') {
  alert ('You must write something!');
} else {
  $('#list').append(li);
}
// Crossing an item out
  function crossOut() {
    li.toggleClass('strike');
  }
  li.on("dblclick", crossOut);

// Adding a delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);
function deleteListItem() {
  li.addClass('delete')
}

$('#list').sortable();

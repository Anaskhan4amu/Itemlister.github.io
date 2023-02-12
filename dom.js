// //TRANSVERSING DOM
// var itemList = document.querySelector('#items');

// //parentELement

// //itemList.parentElement.style.backgroundColor='blue';
// console.log(itemList.parentElement.parentElement.parentElement);

// //childrenNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);

// //itemList.children[1].style.backgroundColor = 'red'

// //firstChild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// //itemList.firstElementChild.textContent = 'YOUTUBE';

// //lastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// //itemList.lastElementChild.textContent = 'YOUTUBE'

// //nextSibling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);

// //previousElementSibling
// console.log(itemList.previousElementSibling);
// //itemList.previousElementSibling.style.color = 'blue';

// //createElement

// //create div
// var newDiv = document.createElement('div');
// console.log(newDiv);

// //addClass
// newDiv.className = 'styling';

// //addId
// newDiv.id='styling2'

// //add attribute
// newDiv.setAttribute('title','styling3');

// //createTextNode
// var newDivText = document.createTextNode('Hello Word');

// //addText to Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);


// var newEle = document.createElement('div');
// var newDivText2 = document.createTextNode('Hello Word');

// newEle.appendChild(newDivText2);


// var newHead = document.querySelector('div .list-group');
// var h2 = document.querySelector('div li');

// newHead.insertBefore(newEle, h2);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
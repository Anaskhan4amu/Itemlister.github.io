//TRANSVERSING DOM
var itemList = document.querySelector('#items');

//parentELement

//itemList.parentElement.style.backgroundColor='blue';
console.log(itemList.parentElement.parentElement.parentElement);

//childrenNodes
console.log(itemList.childNodes);
console.log(itemList.children);

//itemList.children[1].style.backgroundColor = 'red'

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'YOUTUBE';

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'YOUTUBE'

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'blue';

//createElement

//create div
var newDiv = document.createElement('div');
console.log(newDiv);

//addClass
newDiv.className = 'styling';

//addId
newDiv.id='styling2'

//add attribute
newDiv.setAttribute('title','styling3');

//createTextNode
var newDivText = document.createTextNode('Hello Word');

//addText to Div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);


var newEle = document.createElement('div');
var newDivText2 = document.createTextNode('Hello Word');

newEle.appendChild(newDivText2);


var newHead = document.querySelector('div .list-group');
var h2 = document.querySelector('div li');

newHead.insertBefore(newEle, h2);
var username = document.getElementById('username');
console.log(username); 
// get value of username on submit

function getValueOfInput() {
	if (username) {
	console.log(username.value);
	}
}

// getting based on tag and class name

var inputs = document.getElementsByTagName('input');
console.log('inputs', inputs);

var errorClass = document.getElementsByClassName('error');
console.log('error inputs', errorClass);

// getting based on query selector
var firstButton = document.querySelector('button');
console.log('first button', firstButton);

var errorClass2 = document.querySelector('input.error');
console.log('input error', errorClass2);


// Traverse the DOM and select the children of our ul tag
var listItems = document.querySelector('ul').children;
console.log('listItems', listItems);

function changeInnerHTML() {
	listItems[0].innerHTML = 'I changed!';
}

// siblings and parents
var selectedItem = document.querySelector('li.selected');
console.log('selectedItem', selectedItem);

var firstItem = selectedItem.previousElementSibling;
console.log('firstItem', firstItem);

var lastItem = selectedItem.nextElementSibling;
console.log('lastItem', lastItem);

var parentElement = selectedItem.parentElement;
console.log('parent', parentElement);
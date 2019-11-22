
// wait until the DOM has loaded to run our code
$(document).ready(function() {

// jquery - more efficient option
var elements = $('#firstDiv');
console.log(elements[0]);

// vanilla js
// var elements = document.getElementById('firstDiv');

// On click, do something

$('#myButton').click(function(event) {
	console.log($(this));
	this.innerHTML = 'Changed the button content!';

	var newElement = "<div>Adding divs like it's our job.</div>";
	var parentElement = $(this).parent();
	$(parentElement).append(newElement);

	$(this).addClass('newClass');

	$(elements).removeClass('blueDiv');
});

// Works just like the above
// $('#myButton').on('click', function(event) { });
})


var myFirstString = "We're doing it!"; //string
var myFirstNumber = 34; // number
var myFirstBoolean = false; // boolean - aka true or false

console.log(myFirstNumber);


// changing the number


myFirstNumber = 15;

console.log(myFirstNumber);

// Equations
var x = 5;
var y = 134;
var z = 57;

var sum1 = x * y;
console.log(sum1);

var sum2 = (y - (sum1 * z)) / x;
console.log (sum2);


if (y > x) {
	console.log('y is greater than x');
} else {
	console.log('x is greater than y');
}

// in the case of required form fields

if (x.value && y.value && z.value) {
	console.log('button is clickable');
} else {
	console.log('please fill in all the required fields');
}


//password example
var password = "x2kshjak"
if (password.contains('z') || password.contains(4) || password.contains(*)) {
	console.log('yes');
} else if (password.contains(4)) {
	console.log('yes');
} else if (password.contains(*)) {
	console.log('yes');
} else {
	console.log('nope')
}
// Step 1: create a variable for temperature and set it equal to 80
// Step 2: Log "The temperature is 80 degrees"
// Step 3: if else statment
// if temp is greater than 80, output "Time to swim."


// Create a precipitation variable and set it equal to false
// Only output time to swim if temperature is greater than 80 and precip is false

// create a variable called indoors
// if indoors, log "time to swim" regardless of precip and temp

var temperature = 80;
var precipitation = 'raining';
var indoors = true; 

console.log("The temperature is" + temperature + "degrees.");

if (temperature >= 80 && precipitation !== 'raining' && precipitation !== 'snowing') {
	console.log('Time to swim!');
} else if (indoors) {
	console.log('Time to swim!');
} else {
	console.log('You should probably just stay home.')
}



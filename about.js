
function handleSubmit(evt) {
	alert('The form has been submitted successfully.');
}

function giveCompliment(evt) {
	alert('You are a nice person!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let imageMO = document.querySelector('#photo');
imageMO.addEventListener('mouseover', giveCompliment);
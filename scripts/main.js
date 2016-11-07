var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/nebula.jpg') {
		myImage.setAttribute ('src', 'images/nomore.jpg');
	} else {
		myImage.setAttribute ('src', 'images/nebula.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Frozen Trio Nebula UHV2386 - 92016A says Hi ' + myName + '!';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Frozen Trio Nebula UHV2386 - 92016A says Hi ' + storedName + '!';
}

myButton.onclick = function() {
	setUserName();
}
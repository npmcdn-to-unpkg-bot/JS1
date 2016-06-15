function stickyNoteNumber(){
	return document.getElementsByClassName('box').length + 1;
}

function createStickyNote(colour, message){
	var stickyNote = document.createElement('div');
	var stickyNoteMessge = document.createElement('span');

	stickyNote.className = "box";
	stickyNote.style.backgroundColor = colour;
	stickyNoteMessge.innerHTML = stickyNoteNumber() + ". " + message;
	stickyNote.appendChild(stickyNoteMessge);

	addStickyNoteToPage(stickyNote);
}

function addStickyNoteToPage(stickyNote){
	document.querySelector('.sticky-notes').appendChild(stickyNote);
}

document.querySelector('button').onclick = function(e){
	var colour = document.querySelector('#colour').value;
	var message = document.querySelector('#message').value;

	createStickyNote(colour, message);

	document.querySelector('#colour').value = "";
	document.querySelector('#message').value = "";
}
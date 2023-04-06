const messageList = document.querySelector('.message-list');
const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#send-button');

const greetingMessages = ['Hello!', 'Hi there!', 'Hey, what\'s up?'];

sendButton.addEventListener('click', () => {
	gotMessage();
});

messageInput.addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		gotMessage();
	}
});

function gotMessage() {
	const messageText = messageInput.value.trim();
	if (messageText) {
		addMessage('sent', messageText);
		setTimeout(() => {
			//const randomIndex = Math.floor(Math.random() * greetingMessages.length);
			//const responseText = greetingMessages[randomIndex];
			const responseText = meows(messageText)
			addMessage('received', responseText);
		}, 1000);
		messageInput.value = '';
	}
}

// This function creates a new message element with given type and text
function addMessage(type, text) {
	// Determine the class of the message based on its type
	const messageClass = type === 'sent' ? 'sent' : 'received';
	
	// Create a new li element for the message and add the message class
	const message = document.createElement('li');
	message.classList.add('message', messageClass);
	
	// Create a new div element for the message content and add the message-content class
	const messageContent = document.createElement('div');
	messageContent.classList.add('message-content');
	
	// Append the message content to the message element
	message.appendChild(messageContent);
	
	// Append the message element to the message list
	messageList.appendChild(message);

	// Initialize the index for the addNextWord function
	let index = 0;
	// Define a function to add the next word of the text to the message content
	let addNextWord = function() {
		// Check if there are more words to add
		if (index < text.length) {
			// Add the next word to the message content and increment the index
			messageContent.innerText += text[index] + ' ';
			index++;
			
			// Randomly generate a time modifier and use it to delay the next call to addNextWord
			let timeMod = Math.floor(Math.random() * 5);
			setTimeout(addNextWord, 100 * timeMod);
		}
		window.scrollTo(0, document.body.scrollHeight);
	}
	
	// If the message type is 'received', add words to the message content one at a time
	if (type == 'received') {
		addNextWord();
	} else {
		// If the message type is 'sent', add the entire text to the message content at once
		messageContent.innerText = text;
	}
	window.scrollTo(0, document.body.scrollHeight);
}


function tokenize(text) {
	let words = text.split(' ');
	return words;
}

function meows(text) {
	let tokens = tokenize(text);
	tokenCount = tokens.length;
	counter = tokenCount * Math.floor(Math.random() * 8);
	let output = [];
	for (let i = 0; i < counter; i++) {
		let word = '';
		n = Math.floor(Math.random() * 10);
		if (n % 5 != 0) {
			word += 'm';
		}

		n = Math.floor(Math.random() * 10);
		if (n < 8) {
			for (let j = 0; j < n/2; j++) {
				word += 'e';
			}
		}

		n = Math.floor(Math.random() * 10);
		if (n < 8) {
			for (let j = 0; j < n/2; j++) {
				word += 'o';
			}
		}

		n = Math.floor(Math.random() * 10);
		if (n == 9) {
			for (let j = 0; j < n/3; j++) {
				word += 'e';
			}
		}

		n = Math.floor(Math.random() * 10);
		if (n != 0) {
			word += 'w';
		}
		output.push(' ' + word);
	}
	output[0] = output[0].charAt(1).toUpperCase() + output[0].substring(2);
	return output;
  }
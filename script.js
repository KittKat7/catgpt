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

function addMessage(type, text) {
    const messageClass = type === 'sent' ? 'sent' : 'received';
    const message = document.createElement('li');
    message.classList.add('message', messageClass);
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerText = text;
    message.appendChild(messageContent);
	const chatDiv = document.querySelector('.chat-body');
    messageList.appendChild(message);
}

function tokenize(text) {
	let words = text.split(' ');
	return words;
}

function meows(text) {
	let tokens = tokenize(text);
	tokenCount = tokens.length;
	counter = tokenCount * Math.floor(Math.random() * 8);
	let output = "";
	for (let i = 0; i < counter; i++) {
		n = Math.floor(Math.random() * 10);
		if (n % 5 != 0) {
			output += 'm';
		}

		n = Math.floor(Math.random() * 10);
		if (n < 8) {
			for (let j = 0; j < n/2; j++) {
				output += 'e';
			}
		}

		n = Math.floor(Math.random() * 10);
		if (n < 8) {
			for (let j = 0; j < n/2; j++) {
				output += 'o';
			}
		}

		n = Math.floor(Math.random() * 10);
		if (n == 9) {
			for (let j = 0; j < n/3; j++) {
				output += 'e';
			}
		}

		n = Math.floor(Math.random() * 10);
		if (n != 0) {
			output += 'w';
		}

		output += " ";
	}
	output = output.charAt(0).toUpperCase() + output.substring(1);
	return output;
}
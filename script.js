const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.getElementById('messageContainer');

messageForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const message = messageInput.value.trim();
	if (message.length > 0) {
		const newMessage = document.createElement('div');
		newMessage.classList.add('message');
		newMessage.textContent = message;
		messageContainer.appendChild(newMessage);
		messageInput.value = '';
	}
});

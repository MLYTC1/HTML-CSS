document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    
    if (userInput.trim() !== "") {
        addMessage(userInput, 'user-message');
        botResponse(userInput);
        document.getElementById('user-input').value = ''; 
    }
});

function addMessage(text, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${className}`;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 

}

function botResponse(userInput) {
    let botMessage = '';

    
    if (userInput.toLowerCase().includes('hello')) {
        botMessage = 'Hello! How can I help you today?';
    } else if (userInput.toLowerCase().includes('price')) {
        botMessage = 'Prices vary depending on the hotel. Can you specify which hotel?';
    } else {
        botMessage = "I'm not sure how to respond to that.";
    }

    setTimeout(() => addMessage(botMessage, 'bot-message'), 500); 
}

function updateClock(){
    const t = new Date();
    const Hours = t.getHours();
    let minutes = t.getMinutes();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    

    document.getElementById("clock").value = `${Hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 1000);

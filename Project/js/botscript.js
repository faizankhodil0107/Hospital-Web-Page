const form = document.getElementById('detailsForm');
const chatSection = document.getElementById('chat-section');
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearChat');
const toggleMode = document.getElementById('toggleMode');

let patientDetails = {};
let chatHistory = [];

// Helper to add plain text messages
function addMessage(role, text) {
  const el = document.createElement('div');
  el.className = `message ${role === 'user' ? 'user' : 'bot'}`;
  el.textContent = text;
  chatWindow.appendChild(el);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  return el;
}

// Helper to add animated typing indicator
function addTypingIndicator() {
  const el = document.createElement('div');
  el.className = 'message bot typing-indicator';
  el.innerHTML = '<span></span><span></span><span></span>';
  chatWindow.appendChild(el);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  return el;
}

function escapeForText(s) {
  return String(s ?? '');
}

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  patientDetails = Object.fromEntries(formData.entries());
  form.classList.add('hidden');
  chatSection.classList.remove('hidden');
});

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

clearBtn.addEventListener('click', () => {
  chatWindow.innerHTML = '';
  chatHistory = [];
  localStorage.removeItem('chatHistory');
});

toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Single, unified sendMessage function
async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // 1. Display user message and clear input
  addMessage('user', escapeForText(message));
  userInput.value = '';

  // 2. Show typing indicator
  const typingEl = addTypingIndicator();

  try {
    // 3. Fetch from the correct API endpoint
    const response = await fetch('https://hospital-web-page1.onrender.com/api/chatbot/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patientDetails, message })
    });

    const data = await response.json();
    const reply = escapeForText(data?.reply ?? 'Sorry, I could not process your request.');

    // 4. Remove typing styling and swap content for the actual reply
    typingEl.classList.remove('typing-indicator');
    typingEl.textContent = reply;

    // 5. Save to local history
    chatHistory.push({ user: message, bot: reply });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));

  } catch (error) {
    typingEl.classList.remove('typing-indicator');
    typingEl.textContent = 'Sorry, something went wrong. Please check the server and try again.';
    console.error(error);
  }
}

// Restore previous chat history on load
try {
  const stored = localStorage.getItem('chatHistory');
  if (stored) {
    chatHistory = JSON.parse(stored) || [];
    chatHistory.forEach(({ user, bot }) => {
      addMessage('user', escapeForText(user));
      addMessage('bot', escapeForText(bot));
    });
  }
} catch (_) {
  // ignore local storage errors
}

// ====================================
// LIVE CHAT WIDGET
// ====================================

class LiveChat {
    constructor() {
        this.isOpen = false;
        this.messages = [
            {
                type: 'agent',
                text: 'Hello! 👋 Welcome to MedFlowX. How can I help you today?',
                time: this.getCurrentTime(),
                quickReplies: [
                    'Book an appointment',
                    'View my records',
                    'Contact support',
                    'Emergency services'
                ]
            }
        ];
        this.isTyping = false;
        this.init();
    }

    init() {
        this.createChatWidget();
        this.attachEventListeners();
    }

    createChatWidget() {
        const chatHTML = `
      <!-- Chat Button -->
      <button class="chat-button" id="chatButton" title="Chat with us">
        💬
      </button>

      <!-- Chat Panel -->
      <div class="chat-panel" id="chatPanel">
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">👨‍⚕️</div>
            <div class="chat-header-text">
              <h4>MedFlowX Support</h4>
              <p><span class="chat-status-dot"></span> Online</p>
            </div>
          </div>
          <button class="chat-close" id="chatClose">×</button>
        </div>

        <div class="chat-messages" id="chatMessages"></div>

        <div class="chat-input-container">
          <textarea
            class="chat-input"
            id="chatInput"
            placeholder="Type your message..."
            rows="1"
          ></textarea>
          <button class="chat-send-button" id="chatSend" title="Send message">
            ➤
          </button>
        </div>
      </div>
    `;

        document.body.insertAdjacentHTML('beforeend', chatHTML);
        this.renderMessages();
    }

    attachEventListeners() {
        const chatButton = document.getElementById('chatButton');
        const chatClose = document.getElementById('chatClose');
        const chatSend = document.getElementById('chatSend');
        const chatInput = document.getElementById('chatInput');

        chatButton.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.closeChat());
        chatSend.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Auto-resize textarea
        chatInput.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 100) + 'px';
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatPanel = document.getElementById('chatPanel');
        if (this.isOpen) {
            chatPanel.classList.add('open');
            document.getElementById('chatInput').focus();
            this.removeNotification();
        } else {
            chatPanel.classList.remove('open');
        }
    }

    closeChat() {
        this.isOpen = false;
        document.getElementById('chatPanel').classList.remove('open');
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();

        if (!message) return;

        // Add user message
        this.addMessage({
            type: 'user',
            text: message,
            time: this.getCurrentTime()
        });

        input.value = '';
        input.style.height = 'auto';

        // Simulate agent typing and response
        this.showTyping();
        setTimeout(() => {
            this.hideTyping();
            this.addAgentResponse(message);
        }, 1500);
    }

    addMessage(message) {
        this.messages.push(message);
        this.renderMessages();
    }

    addAgentResponse(userMessage) {
        const responses = {
            'book': {
                text: 'I can help you book an appointment! Please visit the Appointments page or call us at +91 98765 43210 for immediate assistance.',
                quickReplies: ['View appointments', 'Contact info', 'Emergency']
            },
            'records': {
                text: 'To view your medical records, please log in to your patient portal and navigate to the Records section.',
                quickReplies: ['How to login?', 'Contact support']
            },
            'emergency': {
                text: '🚨 For emergencies, please call 108 immediately or visit our Emergency Department. Our staff is available 24/7.',
                quickReplies: ['View location', 'Contact info']
            },
            'default': {
                text: 'Thank you for your message! Our support team will assist you shortly. You can also call us at +91 98765 43210 for immediate help.',
                quickReplies: ['Book appointment', 'View services', 'Contact info']
            }
        };

        let response = responses.default;
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('appointment') || lowerMessage.includes('book')) {
            response = responses.book;
        } else if (lowerMessage.includes('record') || lowerMessage.includes('view')) {
            response = responses.records;
        } else if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) {
            response = responses.emergency;
        }

        this.addMessage({
            type: 'agent',
            text: response.text,
            time: this.getCurrentTime(),
            quickReplies: response.quickReplies
        });
    }

    showTyping() {
        this.isTyping = true;
        this.renderMessages();
    }

    hideTyping() {
        this.isTyping = false;
        this.renderMessages();
    }

    renderMessages() {
        const container = document.getElementById('chatMessages');
        if (!container) return;

        container.innerHTML = this.messages.map((msg, index) => {
            if (msg.type === 'agent') {
                return `
          <div class="chat-message" style="animation-delay: ${index * 0.1}s">
            <div class="chat-message-avatar">👨‍⚕️</div>
            <div class="chat-message-content">
              <div class="chat-message-bubble">${msg.text}</div>
              <div class="chat-message-time">${msg.time}</div>
              ${msg.quickReplies ? this.renderQuickReplies(msg.quickReplies) : ''}
            </div>
          </div>
        `;
            } else {
                return `
          <div class="chat-message user" style="animation-delay: ${index * 0.1}s">
            <div class="chat-message-avatar">👤</div>
            <div class="chat-message-content">
              <div class="chat-message-bubble">${msg.text}</div>
              <div class="chat-message-time">${msg.time}</div>
            </div>
          </div>
        `;
            }
        }).join('');

        if (this.isTyping) {
            container.innerHTML += `
        <div class="typing-indicator">
          <div class="chat-message-avatar">👨‍⚕️</div>
          <div class="typing-dots">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
          </div>
        </div>
      `;
        }

        // Scroll to bottom
        container.scrollTop = container.scrollHeight;

        // Attach quick reply listeners
        this.attachQuickReplyListeners();
    }

    renderQuickReplies(replies) {
        return `
      <div class="chat-quick-replies">
        ${replies.map(reply => `
          <button class="chat-quick-reply" data-reply="${reply}">${reply}</button>
        `).join('')}
      </div>
    `;
    }

    attachQuickReplyListeners() {
        document.querySelectorAll('.chat-quick-reply').forEach(button => {
            button.addEventListener('click', (e) => {
                const reply = e.target.dataset.reply;
                document.getElementById('chatInput').value = reply;
                this.sendMessage();
            });
        });
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    addNotification() {
        const button = document.getElementById('chatButton');
        if (button) {
            button.classList.add('has-notification');
        }
    }

    removeNotification() {
        const button = document.getElementById('chatButton');
        if (button) {
            button.classList.remove('has-notification');
        }
    }

    simulateIncomingMessage(message) {
        if (!this.isOpen) {
            this.addNotification();
        }

        this.showTyping();
        setTimeout(() => {
            this.hideTyping();
            this.addMessage({
                type: 'agent',
                text: message,
                time: this.getCurrentTime()
            });
        }, 2000);
    }
}

// Initialize chat on page load
let chatWidget;
document.addEventListener('DOMContentLoaded', () => {
    chatWidget = new LiveChat();

    // Send a welcome notification after 10 seconds if chat not opened
    setTimeout(() => {
        if (!chatWidget.isOpen) {
            chatWidget.simulateIncomingMessage('Hi! Need help with anything? I\'m here to assist you! 😊');
        }
    }, 10000);
});

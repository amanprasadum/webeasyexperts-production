class WhatsAppChatWidget {
            constructor() {
                this.whatsappNumber = "+919432120437";

                // Pre-defined messages
                this.messages = [
                    {
                        text: "Hello! 👋 Welcome to Web EASY Experts!",
                        delay: 500
                    },
                    {
                        text: "We're online and ready to help you with your website project! 💻",
                        delay: 2000
                    },
                    {
                        text: "Click below to start a conversation with our team and get your free quote! 🚀",
                        delay: 3500
                    }
                ];

                this.currentMessageIndex = 0;
                this.isModalOpen = false;
                this.messageInterval = null;

                this.init();
            }

            init() {
                this.whatsappBtn = document.getElementById('whatsappBtn');
                this.chatModal = document.getElementById('chatModal');
                this.closeBtn = document.getElementById('closeChat');
                this.chatNowBtn = document.getElementById('chatNowBtn');
                this.typingIndicator = document.getElementById('typingIndicator');
                this.chatBody = document.querySelector('.chat-body');

                this.bindEvents();
                this.preloadFirstMessage();
            }

            bindEvents() {
                // Open/close modal on WhatsApp button hover
                this.whatsappBtn.addEventListener('mouseenter', () => {
                    if (!this.isModalOpen) {
                        this.openModal();
                    }
                });

                // Keep modal open when hovering over it
                this.chatModal.addEventListener('mouseenter', () => {
                    this.keepModalOpen();
                });

                // Close modal when leaving both button and modal area
                this.whatsappBtn.addEventListener('mouseleave', (e) => {
                    setTimeout(() => {
                        if (!this.chatModal.matches(':hover')) {
                            this.closeModal();
                        }
                    }, 200);
                });

                this.chatModal.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        if (!this.whatsappBtn.matches(':hover')) {
                            this.closeModal();
                        }
                    }, 200);
                });

                // Close button
                this.closeBtn.addEventListener('click', () => {
                    this.closeModal();
                });

                // Chat now button - opens WhatsApp
                this.chatNowBtn.addEventListener('click', () => {
                    this.openWhatsApp();
                });

                // Direct click on WhatsApp button also opens WhatsApp
                this.whatsappBtn.addEventListener('click', () => {
                    if (this.isModalOpen) {
                        this.openWhatsApp();
                    }
                });
            }

            preloadFirstMessage() {
                // Show first message immediately in modal
                const firstMessage = this.messages[0];
                const messageElement = this.chatBody.querySelector('.chat-message');
                messageElement.innerHTML = `${firstMessage.text}<span class="message-time">Just now</span>`;
            }

            openModal() {
                this.isModalOpen = true;
                this.chatModal.classList.add('active');
                this.startMessageSequence();
            }

            closeModal() {
                this.isModalOpen = false;
                this.chatModal.classList.remove('active');
                this.stopMessageSequence();
                this.resetMessages();
            }

            keepModalOpen() {
                // Method to handle keeping modal open during interaction
                if (this.messageInterval) {
                    clearTimeout(this.messageInterval);
                }
            }

            startMessageSequence() {
                if (this.currentMessageIndex >= this.messages.length) {
                    this.hideTypingIndicator();
                    return;
                }

                // Show typing indicator
                this.showTypingIndicator();

                const currentMessage = this.messages[this.currentMessageIndex];

                this.messageInterval = setTimeout(() => {
                    if (this.isModalOpen) {
                        this.addMessage(currentMessage.text);
                        this.currentMessageIndex++;

                        if (this.currentMessageIndex < this.messages.length) {
                            this.startMessageSequence();
                        } else {
                            this.hideTypingIndicator();
                        }
                    }
                }, currentMessage.delay);
            }

            stopMessageSequence() {
                if (this.messageInterval) {
                    clearTimeout(this.messageInterval);
                    this.messageInterval = null;
                }
            }

            addMessage(text) {
                // Remove existing messages except the first one
                const existingMessages = this.chatBody.querySelectorAll('.chat-message');
                if (existingMessages.length > 0) {
                    // Update the first message or add new ones
                    if (this.currentMessageIndex === 0) {
                        existingMessages[0].innerHTML = `${text}<span class="message-time">Just now</span>`;
                    } else {
                        const messageDiv = document.createElement('div');
                        messageDiv.className = 'chat-message';
                        messageDiv.innerHTML = `${text}<span class="message-time">Just now</span>`;

                        // Insert before typing indicator
                        this.chatBody.insertBefore(messageDiv, this.typingIndicator);
                    }
                }

                // Scroll to bottom
                this.chatBody.scrollTop = this.chatBody.scrollHeight;
                this.hideTypingIndicator();
            }

            showTypingIndicator() {
                this.typingIndicator.style.opacity = '1';
                this.typingIndicator.style.animation = 'messageSlideIn 0.4s ease-out';
            }

            hideTypingIndicator() {
                this.typingIndicator.style.opacity = '0';
            }

            resetMessages() {
                // Reset to show only the first message
                const messages = this.chatBody.querySelectorAll('.chat-message');

                // Remove all messages except the first one
                for (let i = 1; i < messages.length; i++) {
                    messages[i].remove();
                }

                // Reset first message
                if (messages[0]) {
                    const firstMessage = this.messages[0];
                    messages[0].innerHTML = `${firstMessage.text}<span class="message-time">Just now</span>`;
                }

                this.currentMessageIndex = 0;
                this.hideTypingIndicator();
            }

            openWhatsApp() {
                const message = encodeURIComponent(
                    `Hello! I'm interested in your web design services. I found you through your website and would like to discuss my project requirements.`
                );

                const whatsappURL = `https://wa.me/${this.whatsappNumber}?text=${message}`;

                // Open in new tab
                window.open(whatsappURL, '_blank');

                // Close modal after opening WhatsApp
                this.closeModal();
            }

            // Method to update WhatsApp number dynamically
            updateWhatsAppNumber(newNumber) {
                this.whatsappNumber = newNumber;
            }

            // Method to update messages dynamically
            updateMessages(newMessages) {
                this.messages = newMessages;
                this.resetMessages();
            }
        }

        // Initialize WhatsApp Chat Widget when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            window.whatsappWidget = new WhatsAppChatWidget();

            // Example of how to update the WhatsApp number dynamically:
            // window.whatsappWidget.updateWhatsAppNumber("61987654321");
        });

        // Add some additional interactive effects
        document.addEventListener('DOMContentLoaded', () => {
            // Add bounce effect when page loads
            setTimeout(() => {
                const whatsappBtn = document.getElementById('whatsappBtn');
                whatsappBtn.style.animation = 'pulse 2s infinite, bounce 0.6s ease-out';
            }, 3000);

            // Custom bounce animation
            const style = document.createElement('style');
            style.textContent = `
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
                transform: scale(1);
            }
            40%, 43% {
                transform: scale(1.1);
            }
            70% {
                transform: scale(1.05);
            }
            90% {
                transform: scale(1.02);
            }
        }
    `;
            document.head.appendChild(style);
        });
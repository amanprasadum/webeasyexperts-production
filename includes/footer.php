<footer class="main-footer check">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4">
                    <a href="#" class="footer-logo">
                        <img src="../assets/images/logo.png" class="footer-logo-img">
                    </a>
                    <p class="footer-description">
                        Your trusted website design and development partner in Australia. We deliver world-class
                        websites at competitive prices, helping Australian businesses grow online.
                    </p>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/WebEASYExperts" class="social-link" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/webeasyexperts/" class="social-link" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@WebEASYExperts" class="social-link" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-column">
                        <h5>Services</h5>
                        <ul class="footer-links">
                            <li><a href="#services">WordPress Development</a></li>
                            <li><a href="#services">eCommerce Solutions</a></li>
                            <li><a href="#services">Custom Development</a></li>
                            <li><a href="#services">SEO Optimization</a></li>
                            <li><a href="#services">Website Maintenance</a></li>
                            <li><a href="#services">Mobile Responsive</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-column">
                        <h5>Company</h5>
                        <ul class="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="footer-column">

                        <div class="mobile-frame">
                            <h5>Contact Information</h5>
                            <div class="mobile-screen">
                                <ul class="contact-info">
                                    <li>
                                        <i class="fas fa-envelope"></i>
                                        <div>
                                            <strong>Email:</strong><br>
                                            <a href="mailto:webeasyexperts@gmail.com">webeasyexperts@gmail.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="fas fa-phone"></i>
                                        <div>
                                            <strong>Phone:</strong><br>
                                            <a href="tel:+919432120437">+919432120437</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i>
                                        <div>
                                            <strong>Serving:</strong><br>
                                            All Major Australian Cities
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-copyright">
                    <p style="margin: 0;">&copy; 2025 Web EASY Experts. All rights reserved.</p>
                </div>
                <ul class="footer-links-bottom">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    </footer>
    <!-- === FOOTER SECTION END === -->

    <div class="whatsapp-chat-widget">
        <div class="chat-modal" id="chatModal">
            <div class="chat-header">
                <button class="close-chat" id="closeChat">
                    <i class="fas fa-times"></i>
                </button>
                <div class="chat-header-info">
                    <div class="chat-avatar">
                        <i class="fas fa-user"></i>
                        <div class="online-indicator"></div>
                    </div>
                    <div class="chat-details">
                        <h4>Web EASY Experts</h4>
                        <div class="chat-status">
                            <div class="status-dot"></div>
                            <span>Online - Ready to help!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="chat-body">
                <div class="chat-message">
                    Hello! 👋 Welcome to Web EASY Experts!
                    <span class="message-time">Just now</span>
                </div>

                <div class="typing-indicator" id="typingIndicator">
                    <span style="font-size: 12px; color: #666;">Developer is typing</span>
                    <div class="typing-dots">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            </div>

            <div class="chat-footer">
                <button class="chat-now-btn" id="chatNowBtn">
                    <i class="fab fa-whatsapp"></i>
                    Chat Now on WhatsApp
                </button>
            </div>
        </div>

        <div class="whatsapp-button" id="whatsappBtn">
            <i class="fab fa-whatsapp"></i>
            <div class="online-dot"></div>
        </div>
    </div>
    <!-- External JS Dependencies -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JavaScript -->
    <script src="../assets/js/main.js"></script>
    <script src="../assets/js/whatsaap.js"></script>
    <script src="../assets/js/hero.js"></script>
    <script>
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
    </script>
</body>

</html>
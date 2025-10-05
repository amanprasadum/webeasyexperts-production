   // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function () {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 23, 42, 0.98)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = 'rgba(15, 23, 42, 0.95)';
                header.style.boxShadow = 'none';
            }
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Simple validation
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;

            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }

            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your inquiry! We will get back to you within 24 hours.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });

        // Newsletter form
        document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (!email) {
                alert('Please enter your email address.');
                return;
            }

            const btn = this.querySelector('button');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
                btn.innerHTML = '<i class="fas fa-paper-plane"></i>';
            }, 1500);
        });

        // Add some interactive animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe cards for animation
        document.querySelectorAll('.feature-card, .service-card, .process-card, .testimonial-card, .stat-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(card);
        });

        // Counter animation for stats
        function animateCounter(element) {
            const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
            const suffix = element.textContent.replace(/[\d]/g, '');
            let current = 0;
            const increment = target / 30;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + suffix;
                }
            }, 50);
        }

        // Animate counters when they come into view
        // const statObserver = new IntersectionObserver(function (entries) {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             const number = entry.target.querySelector('.stat-number');
        //             if (number && !number.classList.contains('animated')) {
        //                 number.classList.add('animated');
        //                 animateCounter(number);
        //             }
        //         }
        //     });
        // }, observerOptions);
        const statObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const number = entry.target.querySelector('.stat-number');
                    if (number && !number.classList.contains('animated') && number.getAttribute('data-counter') !== 'false') {
                        number.classList.add('animated');
                        animateCounter(number);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.stat-card').forEach(card => {
            statObserver.observe(card);
        });
        
       
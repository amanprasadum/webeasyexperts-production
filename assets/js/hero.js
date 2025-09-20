//  // Hero Slider Functionality
//         class HeroSlider {
//             constructor() {
//                 this.currentSlide = 0;
//                 this.totalSlides = 3;
//                 this.isPlaying = true;
//                 this.interval = null;
//                 this.slideDuration = 5000; // 5 seconds per slide

//                 this.slidesWrapper = document.getElementById('slidesWrapper');
//                 this.navDots = document.querySelectorAll('.nav-dot');
//                 this.prevBtn = document.getElementById('prevSlide');
//                 this.nextBtn = document.getElementById('nextSlide');
//                 this.progressBar = document.getElementById('progressBar');

//                 this.init();
//             }

//             init() {
//                 // Add event listeners
//                 this.prevBtn.addEventListener('click', () => this.prevSlide());
//                 this.nextBtn.addEventListener('click', () => this.nextSlide());

//                 this.navDots.forEach((dot, index) => {
//                     dot.addEventListener('click', () => this.goToSlide(index));
//                 });

//                 // Auto-play
//                 this.startAutoPlay();

//                 // Pause on hover
//                 const heroSection = document.querySelector('.hero-slider');
//                 heroSection.addEventListener('mouseenter', () => this.stopAutoPlay());
//                 heroSection.addEventListener('mouseleave', () => this.startAutoPlay());

//                 // Touch/swipe support for mobile
//                 this.addTouchSupport();
//             }

//             goToSlide(slideIndex) {
//                 this.currentSlide = slideIndex;
//                 const translateX = -slideIndex * 100;
//                 this.slidesWrapper.style.transform = `translateX(${translateX}%)`;

//                 // Update navigation dots
//                 this.navDots.forEach(dot => dot.classList.remove('active'));
//                 this.navDots[slideIndex].classList.add('active');

//                 // Reset progress bar
//                 this.resetProgressBar();

//                 // Add fade animation to content
//                 this.animateSlideContent();
//             }

//             nextSlide() {
//                 const nextIndex = (this.currentSlide + 1) % this.totalSlides;
//                 this.goToSlide(nextIndex);
//             }

//             prevSlide() {
//                 const prevIndex = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
//                 this.goToSlide(prevIndex);
//             }

//             startAutoPlay() {
//                 this.stopAutoPlay();
//                 this.isPlaying = true;
//                 this.startProgressBar();

//                 this.interval = setInterval(() => {
//                     if (this.isPlaying) {
//                         this.nextSlide();
//                     }
//                 }, this.slideDuration);
//             }

//             stopAutoPlay() {
//                 this.isPlaying = false;
//                 if (this.interval) {
//                     clearInterval(this.interval);
//                     this.interval = null;
//                 }
//                 this.stopProgressBar();
//             }

//             startProgressBar() {
//                 this.resetProgressBar();
//                 this.progressBar.style.transition = `width ${this.slideDuration}ms linear`;
//                 this.progressBar.style.width = '100%';
//             }

//             stopProgressBar() {
//                 this.progressBar.style.transition = 'none';
//             }

//             resetProgressBar() {
//                 this.progressBar.style.transition = 'none';
//                 this.progressBar.style.width = '0%';

//                 // Force reflow
//                 this.progressBar.offsetHeight;
//             }

//             animateSlideContent() {
//                 const currentSlideElement = document.querySelectorAll('.hero-slide')[this.currentSlide];
//                 const content = currentSlideElement.querySelector('.hero-content');

//                 // Remove and re-add animation class
//                 content.classList.remove('slide-fade-in');
//                 void content.offsetWidth; // Force reflow
//                 content.classList.add('slide-fade-in');
//             }

//             addTouchSupport() {
//                 let startX = 0;
//                 let endX = 0;

//                 this.slidesWrapper.addEventListener('touchstart', (e) => {
//                     startX = e.touches[0].clientX;
//                 });

//                 this.slidesWrapper.addEventListener('touchend', (e) => {
//                     endX = e.changedTouches[0].clientX;
//                     this.handleSwipe(startX, endX);
//                 });
//             }

//             handleSwipe(startX, endX) {
//                 const threshold = 50; // Minimum swipe distance
//                 const diff = startX - endX;

//                 if (Math.abs(diff) > threshold) {
//                     if (diff > 0) {
//                         this.nextSlide(); // Swipe left - next slide
//                     } else {
//                         this.prevSlide(); // Swipe right - previous slide
//                     }
//                 }
//             }
//         }

//         // Initialize slider when DOM is loaded
//         document.addEventListener('DOMContentLoaded', () => {
//             new HeroSlider();
//         });

//         // Update existing scroll effect to work with slider
//         window.addEventListener('scroll', function () {
//             const header = document.getElementById('header');
//             if (window.scrollY > 100) {
//                 header.style.background = 'rgba(15, 23, 42, 0.98)';
//                 header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
//             } else {
//                 header.style.background = 'rgba(15, 23, 42, 0.95)';
//                 header.style.boxShadow = 'none';
//             }
//         });
// Initialize Bootstrap carousel with custom options
const heroCarousel = new bootstrap.Carousel('#heroCarousel', {
    interval: 5000,
    wrap: true,
    keyboard: true,
    pause: 'hover'
});

// Add fade animation to carousel items
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('heroCarousel');
    
    carousel.addEventListener('slide.bs.carousel', function (event) {
        // Add animation class to incoming slide content
        const nextSlide = event.relatedTarget;
        const content = nextSlide.querySelector('.hero-content > .container');
        if (content) {
            content.style.opacity = '0';
            content.style.transform = 'translateY(20px)';
        }
    });

    carousel.addEventListener('slid.bs.carousel', function (event) {
        // Animate in the new content
        const currentSlide = event.relatedTarget;
        const content = currentSlide.querySelector('.hero-content > .container');
        if (content) {
            setTimeout(() => {
                content.style.transition = 'all 0.6s ease-out';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 150);
        }
    });
});



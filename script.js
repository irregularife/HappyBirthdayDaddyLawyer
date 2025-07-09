
    // Smooth scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    document.addEventListener('DOMContentLoaded', () => {
        // Golden confetti burst on load
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFD700']
        });
    
        // Continuous gentle golden confetti
        const confettiInterval = setInterval(() => {
            confetti({
                particleCount: 10,
                spread: 70,
                origin: { y: 0 },
                colors: ['#FFD700'],
                scalar: 0.8
            });
        }, 500);
    
       
    
        // Additional burst when clicking anywhere
        window.addEventListener('click', () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FFD700']
            });
        });
    });
// Add Confetti Library (Paste this before </body> in HTML if not using CDN)
// <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"></script>

// Add this to your script.js
function handleResize() {
    // Adjust any elements that need resizing
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.minHeight = `${window.innerHeight}px`;
    }
}

// Initial call
handleResize();

// Add event listener
window.addEventListener('resize', handleResize);
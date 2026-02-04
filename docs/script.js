document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enter-btn');
    const introOverlay = document.getElementById('intro-overlay');
    const bgm = document.getElementById('bgm');
    const soundToggle = document.getElementById('sound-toggle');
    
    // Attempt auto-play with lower volume initially
    bgm.volume = 0.5;

    enterBtn.addEventListener('click', () => {
        // Start Audio context allowed by user interaction
        bgm.play().then(() => {
            soundToggle.textContent = '🔊';
        }).catch(err => {
            console.log("Audio play failed:", err);
            soundToggle.textContent = '🔇';
        });

        // Fade out overlay
        introOverlay.style.opacity = '0';
        setTimeout(() => {
            introOverlay.style.display = 'none';
        }, 1000);
    });

    // Sound toggle control
    soundToggle.addEventListener('click', () => {
        if (bgm.paused) {
            bgm.play();
            soundToggle.textContent = '🔊';
        } else {
            bgm.pause();
            soundToggle.textContent = '🔇';
        }
    });

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.char-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`; // Staggered delay
        observer.observe(card);
    });
});

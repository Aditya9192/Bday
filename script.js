// Background music setup
const audio = new Audio('Perfect-(Mr-Jat.in).mp3');
audio.loop = true;
let isPlaying = false;

// Toggle music function
function toggleMusic() {
    const btn = document.querySelector('.music-control');
    if (isPlaying) {
        audio.pause();
        btn.classList.remove('playing');
        btn.textContent = '🎵';
    } else {
        audio.play();
        btn.classList.add('playing');
        btn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

// Create floating hearts
function createHeart() {
    const hearts = ['❤️', '💖', '💕', '💗', '💝', '💘'];
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

// Create twinkling stars
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(star);

    setTimeout(() => star.remove(), 3000);
}

// Generate hearts and stars continuously
setInterval(createHeart, 600);
setInterval(createStar, 300);

// Initial burst of hearts and stars
for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 100);
    setTimeout(createStar, i * 50);
}

// Photo card click effect
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

// Lightbox functions
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Add sparkle effect on mouse move
let lastSparkle = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSparkle > 100) {
        const sparkle = document.createElement('div');
        sparkle.className = 'star';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.position = 'fixed';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
        lastSparkle = now;
    }
});
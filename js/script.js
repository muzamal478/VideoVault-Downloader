document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Lazy Loading Images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src || entry.target.src;
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.1
    });

    images.forEach(img => observer.observe(img));

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });
});

// Simulated Download Function
function startDownload() {
    const urlInput = document.getElementById('video-url').value;
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress');

    if (!urlInput || !/^(https?:\/\/)/.test(urlInput)) {
        alert('Please enter a valid video URL (e.g., https://example.com/video)');
        return;
    }

    // Simulate download process
    progressBar.classList.remove('hidden');
    progress.style.width = '0%';

    let width = 0;
    const interval = setInterval(() => {
        width += 5;
        progress.style.width = `${width}%`;
        if (width >= 100) {
            clearInterval(interval);
            alert('Download complete! (This is a simulation for demo purposes. For real downloads, set up a backend server.)');
            progressBar.classList.add('hidden');
            document.getElementById('video-url').value = '';
        }
    }, 150);
}
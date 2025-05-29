// Add fade-in animation to hero elements
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

// Lib toggle functionality
function toggleLib(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.lib-arrow');

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        arrow.textContent = '▼';
    } else {
        content.classList.add('active');
        arrow.textContent = '▲';
    }
}

// Copy code functionality
function copyCode(button) {
    const codeBlock = button.parentElement.querySelector('code');
    const text = codeBlock.textContent;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = 'var(--success)';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'var(--primary)';
        }, 2000);
    }).catch(() => {
        button.textContent = 'Error';
        button.style.background = 'var(--error)';

        setTimeout(() => {
            button.textContent = 'Copy';
            button.style.background = 'var(--primary)';
        }, 2000);
    });
}

// Theme persistence (for future dark/light mode toggle)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Observe elements for animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .lib-item, .installation-step').forEach(el => {
        observer.observe(el);
    });
});

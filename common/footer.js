// common/footer.js
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
    <div class="container">
      <p>&copy; 2025 Toolzy - MIT License - Created by @Tr0lgar</p>
      <p>
        <a href="https://github.com/Tr0lgar/toolzy" target="_blank" style="color: var(--primary);">
          GitHub Repository
        </a>
      </p>
    </div>
  `;

    const scrollTopButton = document.createElement('button');
    scrollTopButton.className = 'scroll-top';
    scrollTopButton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    scrollTopButton.textContent = '↑';

    document.body.appendChild(footer);
    document.body.appendChild(scrollTopButton);

    // Scroll to top functionality
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }

        // Header background on scroll
        const header = document.querySelector('.header');
        if (scrollTop > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
});

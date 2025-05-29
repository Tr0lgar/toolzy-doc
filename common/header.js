// common/header.js
document.addEventListener('DOMContentLoaded', function() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
    <div class="nav-container">
      <div><img src="./images/toolzi-logo.png"> <p class="logo">Toolzy</p></div>
      <nav>
        <ul class="nav-links">
          <li><a href="index.html" class="nav-link" id="nav-home">Home</a></li>
          <li><a href="installation.html" class="nav-link" id="nav-installation">Installation</a></li>
          <li><a href="lib.html" class="nav-link" id="nav-lib">Lib</a></li>
          <li><a href="examples.html" class="nav-link" id="nav-examples">Examples</a></li>
        </ul>
      </nav>
    </div>
  `;

    document.body.prepend(header);

    // Mark the active link based on the page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const linkId = 'nav-' + (currentPage.replace('.html', '') || 'home');
    document.getElementById(linkId)?.classList.add('active');
});

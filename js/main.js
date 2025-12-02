// --- 1. Mobile Menu Functionality ---
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    const button = document.querySelector('.mobile-menu-btn');
    const isActive = menu.classList.toggle('active');
    
    // Change button icon/text
    button.textContent = isActive ? '✕' : '☰';
}

// --- 2. Interactive Tab Functionality ---
function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // Deactivate all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected tab content
    const content = document.getElementById('content-' + tabId);
    if (content) {
        content.style.display = 'block';
    }

    // Activate the selected tab button
    const button = document.getElementById('tab-' + tabId);
    if (button) {
        button.classList.add('active');
    }
}

// --- 3. Header Scroll Behavior ---
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Add shadow when scrolled past the top
    if (currentScrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Optional: Hide/Show header on scroll up/down (based on your CSS rules)
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down past the hero section
        header.classList.add('hide');
    } else {
        // Scrolling up or near the top
        header.classList.remove('hide');
    }
    
    lastScrollY = currentScrollY;
}

// --- 4. Initialization on Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the first tab (Financial)
    showTab('financial');

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Attach mobile menu button listener
    const mobileButton = document.querySelector('.mobile-menu-btn');
    if (mobileButton) {
        mobileButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Attach mobile dropdown listener
    document.querySelectorAll('.mobile-menu .dropdown-toggle').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault(); 
            const parentDropdown = item.closest('.dropdown');
            parentDropdown.classList.toggle('active');
        });
    });
});

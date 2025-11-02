// Favicon injection - Add this at the very top of script.js
(function() {
    'use strict';
    
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/x-icon';
    favicon.href = 'favicon.ico';
    
    const appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon';
    appleIcon.sizes = '180x180';
    appleIcon.href = 'favicon.ico';
    
    document.head.appendChild(favicon);
    document.head.appendChild(appleIcon);
    
})();

// Authentication and common functionality

// Check if user is logged in
function checkAuth() {
    const user = localStorage.getItem('techUpdatesUser');
    if (!user && !window.location.pathname.endsWith('login.html')) {
        window.location.href = 'login.html';
        return null;
    }
    return user ? JSON.parse(user) : null;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    const user = checkAuth();
    if (user) {
        initializeUserSession(user);
    }
    
    // Set active nav link
    setActiveNavLink();
    
    // Initialize menu toggle
    initMenuToggle();
    
    // Initialize login form if on login page
    if (window.location.pathname.endsWith('login.html')) {
        initLoginForm();
    }
});

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('#menu a');
    
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize menu toggle
function initMenuToggle() {
    const menuButton = document.querySelector('header button');
    const menu = document.getElementById('menu');
    
    if (menuButton && menu) {
        menuButton.addEventListener('click', function() {
            menu.hidden = !menu.hidden;
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (menu && !menu.hidden && !menu.contains(event.target) && 
            menuButton && !menuButton.contains(event.target)) {
            menu.hidden = true;
        }
    });
}

// Initialize user session
function initializeUserSession(user) {
    // Update user info in menu if needed
    const userMenuItems = document.querySelectorAll('.user-menu-item');
    userMenuItems.forEach(item => {
        if (user.profilePicture) {
            item.innerHTML = `<img src="${user.profilePicture}" alt="${user.firstName}" class="user-avatar"> ${user.firstName} ${user.lastName}`;
        }
    });
}

// Initialize login form
function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const profilePictureInput = document.getElementById('profilePicture');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (profilePictureInput) {
        profilePictureInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const preview = document.getElementById('profilePreview');
                    if (preview) {
                        preview.src = event.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePictureInput = document.getElementById('profilePicture');
    
    // Check if profile picture is provided
    if (!profilePictureInput.files || !profilePictureInput.files[0]) {
        alert('Profile picture is required!');
        return;
    }
    
    // Read profile picture as base64
    const file = profilePictureInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            profilePicture: event.target.result,
            joined: new Date().toISOString()
        };
        
        // Store user data
        localStorage.setItem('techUpdatesUser', JSON.stringify(userData));
        
        // Redirect to index page
        window.location.href = 'index.html';
    };
    
    reader.readAsDataURL(file);
}

// Logout function
function logout() {
    localStorage.removeItem('techUpdatesUser');
    window.location.href = 'login.html';
}
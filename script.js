// Common functionality for all pages

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
});

function initializePage() {
    // Set active navigation link
    setActiveNavLink();
    
    // Check for user data and display personalized greeting if on index page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        displayPersonalGreeting();
    }
    
    // Check if user needs to complete profile
    checkUserProfile();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

function displayPersonalGreeting() {
    const userGreeting = localStorage.getItem('userGreeting');
    const userData = localStorage.getItem('techUpdatesUser');
    
    if (userGreeting && userData) {
        const user = JSON.parse(userData);
        
        const greetingElement = document.createElement('div');
        greetingElement.className = 'personal-greeting';
        greetingElement.innerHTML = `
            <h2>${userGreeting}</h2>
            <p>We're glad to have you back! Here are your latest updates:</p>
        `;
        
        const mainContent = document.querySelector('.container');
        const heroSection = document.querySelector('.hero');
        
        if (mainContent && heroSection) {
            mainContent.insertBefore(greetingElement, heroSection.nextSibling);
        }
    }
}

function checkUserProfile() {
    // If on aboutme page and user already exists, offer redirect
    if (window.location.pathname.endsWith('aboutme.html')) {
        const existingUser = localStorage.getItem('techUpdatesUser');
        if (existingUser) {
            if (confirm('You already have a profile setup. Would you like to go to the main page?')) {
                window.location.href = 'index.html';
            }
        }
    }
}

function setupEventListeners() {
    // Terms acceptance for aboutme page
    const acceptTerms = document.getElementById('acceptTerms');
    const submitBtn = document.getElementById('submitBtn');
    
    if (acceptTerms && submitBtn) {
        acceptTerms.addEventListener('change', function() {
            submitBtn.disabled = !this.checked;
        });
    }
    
    // Form submission for aboutme page
    const userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', handleUserRegistration);
    }
}

function handleUserRegistration(e) {
    e.preventDefault();
    
    const userData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        username: document.getElementById('username').value,
        techInterest: document.getElementById('techInterest').value,
        joined: new Date().toISOString()
    };

    // Store user data in localStorage
    localStorage.setItem('techUpdatesUser', JSON.stringify(userData));
    localStorage.setItem('userGreeting', `Hello <strong>${userData.firstName}</strong>, did you know that`);

    // Redirect to index.html
    window.location.href = 'index.html';
}

function denyTerms() {
    if (confirm('Without accepting the terms, you cannot access personalized features. Are you sure you want to continue?')) {
        window.location.href = 'index.html';
    }
}

// Utility function to get user data
function getUserData() {
    const userData = localStorage.getItem('techUpdatesUser');
    return userData ? JSON.parse(userData) : null;
}

// Utility function to check if user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('techUpdatesUser') !== null;
}

// Utility function to logout user
function logoutUser() {
    localStorage.removeItem('techUpdatesUser');
    localStorage.removeItem('userGreeting');
    window.location.href = 'index.html';
}
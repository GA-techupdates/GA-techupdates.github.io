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
    
    // Initialize forms
    initializeForms();
});

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize user session
function initializeUserSession(user) {
    // Update user profile in header
    const userProfileElements = document.querySelectorAll('.user-profile');
    userProfileElements.forEach(element => {
        if (user.profilePicture) {
            const img = element.querySelector('.user-avatar') || document.createElement('img');
            img.src = user.profilePicture;
            img.alt = `${user.firstName} ${user.lastName}`;
            img.className = 'user-avatar';
            
            const text = element.querySelector('.user-name');
            if (text) {
                text.textContent = `${user.firstName} ${user.lastName}`;
            }
            
            if (!element.querySelector('.user-avatar')) {
                element.prepend(img);
            }
        }
    });
    
    // Display personalized greeting on index page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        displayPersonalGreeting(user);
    }
}

// Display personalized greeting
function displayPersonalGreeting(user) {
    const greetingElement = document.getElementById('personal-greeting');
    if (greetingElement) {
        greetingElement.innerHTML = `
            <div class="card">
                <h3>Hello, <strong>${user.firstName}</strong>!</h3>
                <p>Welcome back to Tech Updates. Here's what's new in the tech world:</p>
            </div>
        `;
    }
}

// Initialize forms
function initializeForms() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Profile picture preview
    const profilePictureInput = document.getElementById('profilePicture');
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

// Handle login/signup
function handleLogin(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName')?.value;
    const lastName = document.getElementById('lastName')?.value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePictureInput = document.getElementById('profilePicture');
    
    // Check if profile picture is provided
    if (profilePictureInput && (!profilePictureInput.files || !profilePictureInput.files[0])) {
        alert('Profile picture is required!');
        return;
    }
    
    // Read profile picture as base64
    const file = profilePictureInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const userData = {
            firstName: firstName || 'User',
            lastName: lastName || '',
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
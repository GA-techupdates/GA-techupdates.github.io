// Updates Management System
const UpdatesManager = {
    // Initialize updates system
    init: function() {
        this.checkAuth();
        this.setupEventListeners();
        this.setupScrollObserver();
        this.checkForNewUpdates();
        this.setupGlobalNotifications();
        this.updateUnreadCount();
        this.hideDeletedUpdates();
    },

    // Check authentication
    checkAuth: function() {
        const user = localStorage.getItem('techUpdatesUser');
        if (!user) {
            window.location.href = 'login.html';
            return;
        }
    },

    // Get deleted update IDs
    getDeletedUpdates: function() {
        const deleted = localStorage.getItem('deletedUpdates');
        return deleted ? JSON.parse(deleted) : [];
    },

    // Save deleted update IDs
    saveDeletedUpdates: function(deletedIds) {
        localStorage.setItem('deletedUpdates', JSON.stringify(deletedIds));
    },

    // Get read update IDs
    getReadUpdates: function() {
        const read = localStorage.getItem('readUpdates');
        return read ? JSON.parse(read) : [];
    },

    // Save read update IDs
    saveReadUpdates: function(readIds) {
        localStorage.setItem('readUpdates', JSON.stringify(readIds));
    },

    // Mark update as read
    markAsRead: function(updateId) {
        const readIds = this.getReadUpdates();
        if (!readIds.includes(updateId)) {
            readIds.push(updateId);
            this.saveReadUpdates(readIds);
            this.updateUnreadCount();
        }
    },

    // Mark all updates as read
    markAllAsRead: function() {
        const updateElements = document.querySelectorAll('.update:not(.deleted)');
        const readIds = [];
        
        updateElements.forEach(update => {
            const updateId = update.getAttribute('data-update-id');
            readIds.push(updateId);
            update.classList.remove('unread');
        });
        
        this.saveReadUpdates(readIds);
        this.updateUnreadCount();
    },

    // Delete an update
    deleteUpdate: function(updateId) {
        if (!confirm('Are you sure you want to delete this update? This action cannot be undone.')) {
            return;
        }

        const deletedIds = this.getDeletedUpdates();
        if (!deletedIds.includes(updateId)) {
            deletedIds.push(updateId);
            this.saveDeletedUpdates(deletedIds);
            
            // Hide the update immediately
            const updateElement = document.querySelector(`[data-update-id="${updateId}"]`);
            if (updateElement) {
                updateElement.classList.add('deleted');
            }
            
            this.checkEmptyState();
            this.updateUnreadCount();
        }
    },

    // Hide updates that were previously deleted
    hideDeletedUpdates: function() {
        const deletedIds = this.getDeletedUpdates();
        deletedIds.forEach(updateId => {
            const updateElement = document.querySelector(`[data-update-id="${updateId}"]`);
            if (updateElement) {
                updateElement.classList.add('deleted');
            }
        });
        this.checkEmptyState();
    },

    // Update unread count badge
    updateUnreadCount: function() {
        const updateElements = document.querySelectorAll('.update:not(.deleted)');
        const readIds = this.getReadUpdates();
        
        let unreadCount = 0;
        updateElements.forEach(update => {
            const updateId = update.getAttribute('data-update-id');
            if (!readIds.includes(updateId) && update.classList.contains('unread')) {
                unreadCount++;
            }
        });
        
        const badge = document.getElementById('unreadBadge');
        const countElement = document.getElementById('unreadCount');
        
        if (unreadCount > 0) {
            badge.style.display = 'inline-flex';
            countElement.textContent = unreadCount;
        } else {
            badge.style.display = 'none';
        }
    },

    // Show empty state
    showEmptyState: function() {
        document.getElementById('emptyUpdates').style.display = 'block';
        document.getElementById('updatesContainer').style.display = 'none';
    },

    // Hide empty state
    hideEmptyState: function() {
        document.getElementById('emptyUpdates').style.display = 'none';
        document.getElementById('updatesContainer').style.display = 'block';
    },

    // Check if updates container is empty
    checkEmptyState: function() {
        const visibleUpdates = document.querySelectorAll('.update:not(.deleted)');
        
        if (visibleUpdates.length === 0) {
            this.showEmptyState();
        } else {
            this.hideEmptyState();
        }
    },

    // Setup event listeners
    setupEventListeners: function() {
        // Scroll to bottom button
        document.getElementById('scrollToBottom').addEventListener('click', () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });

        // Delete buttons
        document.querySelectorAll('.delete-update-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const updateId = e.target.closest('.delete-update-btn').getAttribute('data-update-id');
                this.deleteUpdate(updateId);
            });
        });

        // Mark all as read when clicking unread badge
        document.getElementById('unreadBadge').addEventListener('click', () => {
            this.markAllAsRead();
        });

        // Menu toggle
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

        // Set active nav link
        const currentPage = window.location.pathname.split('/').pop();
        const menuLinks = document.querySelectorAll('#menu a');
        
        menuLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    },

    // Setup Intersection Observer for marking updates as read
    setupScrollObserver: function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const updateId = entry.target.getAttribute('data-update-id');
                    this.markAsRead(updateId);
                    entry.target.classList.remove('unread');
                }
            });
        }, {
            threshold: 0.5
        });

        // Observe all unread update elements
        const unreadUpdates = document.querySelectorAll('.update.unread:not(.deleted)');
        unreadUpdates.forEach(element => {
            observer.observe(element);
        });
    },

    // Check for new updates
    checkForNewUpdates: function() {
        const lastUpdateCheck = localStorage.getItem('lastUpdateCheck');
        const now = Date.now();
        
        if (!lastUpdateCheck || (now - parseInt(lastUpdateCheck)) > 300000) {
            this.showNotificationBanner();
        }
        
        localStorage.setItem('lastUpdateCheck', now.toString());
    },

    // Show notification banner
    showNotificationBanner: function() {
        const banner = document.getElementById('notificationBanner');
        banner.style.display = 'flex';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            banner.style.display = 'none';
        }, 5000);

        // Also show browser notification if permission is granted
        this.showBrowserNotification();
    },

    // Show browser notification
    showBrowserNotification: function() {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Tech Updates', {
                body: 'New updates available! Check the latest announcements.',
                icon: 'favicon.ico',
                tag: 'updates-notification'
            });
        }
    },

    // Setup global notifications
    setupGlobalNotifications: function() {
        // Request notification permission if not already set
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Notification permission granted');
                }
            });
        }

        // Check for new updates every 5 minutes
        setInterval(() => {
            this.checkForNewUpdates();
        }, 300000);
    }
};

// Request notification permission on page load
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// Initialize updates manager when page loads
document.addEventListener('DOMContentLoaded', function() {
    UpdatesManager.init();
});

// Export for global access
window.UpdatesManager = UpdatesManager;

// Logout function
function logout() {
    localStorage.removeItem('techUpdatesUser');
    window.location.href = 'login.html';
}
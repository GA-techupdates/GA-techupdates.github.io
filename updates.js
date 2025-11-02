const UpdatesManager = {
    init: function() {
        this.checkAuth();
        this.setupEventListeners();
        this.setupScrollObserver();
        this.checkForNewUpdates();
        this.setupGlobalNotifications();
        this.updateUnreadCount();
        this.hideDeletedUpdates();
        this.setupReactionIcons();
    },

    checkAuth: function() {
        const user = localStorage.getItem('techUpdatesUser');
        if (!user) {
            window.location.href = 'login.html';
            return;
        }
    },

    getDeletedUpdates: function() {
        const deleted = localStorage.getItem('deletedUpdates');
        return deleted ? JSON.parse(deleted) : [];
    },

    saveDeletedUpdates: function(deletedIds) {
        localStorage.setItem('deletedUpdates', JSON.stringify(deletedIds));
    },

    getReadUpdates: function() {
        const read = localStorage.getItem('readUpdates');
        return read ? JSON.parse(read) : [];
    },

    saveReadUpdates: function(readIds) {
        localStorage.setItem('readUpdates', JSON.stringify(readIds));
    },

    markAsRead: function(updateId) {
        const readIds = this.getReadUpdates();
        if (!readIds.includes(updateId)) {
            readIds.push(updateId);
            this.saveReadUpdates(readIds);
            this.updateUnreadCount();
        }
    },

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

    deleteUpdate: function(updateId) {
        if (!confirm('Are you sure you want to delete this update? This action cannot be undone.')) {
            return;
        }

        const deletedIds = this.getDeletedUpdates();
        if (!deletedIds.includes(updateId)) {
            deletedIds.push(updateId);
            this.saveDeletedUpdates(deletedIds);
            
            const updateElement = document.querySelector(`[data-update-id="${updateId}"]`);
            if (updateElement) {
                updateElement.classList.add('deleted');
            }
            
            this.checkEmptyState();
            this.updateUnreadCount();
        }
    },

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

    showEmptyState: function() {
        document.getElementById('emptyUpdates').style.display = 'block';
        document.getElementById('updatesContainer').style.display = 'none';
    },

    hideEmptyState: function() {
        document.getElementById('emptyUpdates').style.display = 'none';
        document.getElementById('updatesContainer').style.display = 'block';
    },

    checkEmptyState: function() {
        const visibleUpdates = document.querySelectorAll('.update:not(.deleted)');
        
        if (visibleUpdates.length === 0) {
            this.showEmptyState();
        } else {
            this.hideEmptyState();
        }
    },

    setupReactionIcons: function() {
        const reactions = document.querySelectorAll('.reaction');
        reactions.forEach(reaction => {
            const count = reaction.querySelector('.reaction-count');
            if (count) {
                reaction.innerHTML = `<i class="fas fa-heart"></i> ${count.textContent}`;
            }
        });
    },

    setupEventListeners: function() {
        document.getElementById('scrollToBottom').addEventListener('click', () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });

        document.querySelectorAll('.delete-update-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const updateId = e.target.closest('.delete-update-btn').getAttribute('data-update-id');
                this.deleteUpdate(updateId);
            });
        });

        document.getElementById('unreadBadge').addEventListener('click', () => {
            this.markAllAsRead();
        });

        const menuButton = document.querySelector('header button');
        const menu = document.getElementById('menu');
        
        if (menuButton && menu) {
            menuButton.addEventListener('click', function() {
                menu.hidden = !menu.hidden;
            });
        }
        
        document.addEventListener('click', function(event) {
            if (menu && !menu.hidden && !menu.contains(event.target) && 
                menuButton && !menuButton.contains(event.target)) {
                menu.hidden = true;
            }
        });

        const currentPage = window.location.pathname.split('/').pop();
        const menuLinks = document.querySelectorAll('#menu a');
        
        menuLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    },

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

        const unreadUpdates = document.querySelectorAll('.update.unread:not(.deleted)');
        unreadUpdates.forEach(element => {
            observer.observe(element);
        });
    },

    checkForNewUpdates: function() {
        const lastUpdateCheck = localStorage.getItem('lastUpdateCheck');
        const now = Date.now();
        
        if (!lastUpdateCheck || (now - parseInt(lastUpdateCheck)) > 300000) {
            this.showNotificationBanner();
        }
        
        localStorage.setItem('lastUpdateCheck', now.toString());
    },

    showNotificationBanner: function() {
        const banner = document.getElementById('notificationBanner');
        banner.style.display = 'flex';
        
        setTimeout(() => {
            banner.style.display = 'none';
        }, 5000);

        this.showBrowserNotification();
    },

    showBrowserNotification: function() {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Tech Updates', {
                body: 'New updates available! Check the latest announcements.',
                icon: 'favicon.ico',
                tag: 'updates-notification'
            });
        }
    },

    setupGlobalNotifications: function() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Notification permission granted');
                }
            });
        }

        setInterval(() => {
            this.checkForNewUpdates();
        }, 300000);
    },

    resetUpdates: function() {
        localStorage.removeItem('deletedUpdates');
        localStorage.removeItem('readUpdates');
        localStorage.removeItem('lastUpdateCheck');
        location.reload();
    }
};

if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

document.addEventListener('DOMContentLoaded', function() {
    UpdatesManager.init();
});

window.UpdatesManager = UpdatesManager;

function logout() {
    if (confirm('Are you sure you want to logout? All your deleted updates will be restored when you login again.')) {
        localStorage.removeItem('techUpdatesUser');
        window.location.href = 'login.html';
    }
}
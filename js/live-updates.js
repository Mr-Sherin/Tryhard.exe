// ====================================
// LIVE DATA UPDATES
// ====================================

class LiveUpdates {
    constructor(config = {}) {
        this.updateInterval = config.updateInterval || 10000; // 10 seconds default
        this.callbacks = new Map();
        this.lastUpdate = new Date();
        this.isActive = true;
        this.intervalId = null;
    }

    // Register a callback for automatic updates
    register(key, callback, interval = null) {
        this.callbacks.set(key, {
            callback,
            interval: interval || this.updateInterval,
            lastRun: Date.now()
        });
    }

    // Start the live update loop
    start() {
        if (this.intervalId) return; // Already running

        this.intervalId = setInterval(() => {
            if (!this.isActive) return;

            const now = Date.now();
            this.callbacks.forEach((item, key) => {
                if (now - item.lastRun >= item.interval) {
                    item.callback();
                    item.lastRun = now;
                    this.updateTimestamp();
                }
            });
        }, 1000); // Check every second
    }

    // Stop the live update loop
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    // Pause updates
    pause() {
        this.isActive = false;
    }

    // Resume updates
    resume() {
        this.isActive = true;
    }

    // Update the "last updated" timestamp
    updateTimestamp() {
        this.lastUpdate = new Date();
        const timestampElements = document.querySelectorAll('.last-updated-time');
        timestampElements.forEach(el => {
            el.textContent = this.getTimeAgo(this.lastUpdate);
        });
    }

    // Get human-readable time ago
    getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);

        if (seconds < 10) return 'Just now';
        if (seconds < 60) return `${seconds} seconds ago`;

        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

        const hours = Math.floor(minutes / 60);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    // Trigger a refresh animation
    showRefreshAnimation(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return;

        element.classList.add('refreshing');
        setTimeout(() => {
            element.classList.remove('refreshing');
        }, 500);
    }
}

// ====================================
// ANIMATED COUNTER
// ====================================

class AnimatedCounter {
    static animate(element, start, end, duration = 1000, suffix = '') {
        const range = end - start;
        const increment = range / (duration / 16); // 60 FPS
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }

            // Format with commas for large numbers
            const formatted = Math.floor(current).toLocaleString('en-IN');
            element.textContent = formatted + suffix;
        }, 16);
    }

    static updateWithAnimation(elementId, newValue, suffix = '') {
        const element = document.getElementById(elementId);
        if (!element) return;

        const currentText = element.textContent.replace(/[^\d]/g, '');
        const currentValue = parseInt(currentText) || 0;

        this.animate(element, currentValue, newValue, 1000, suffix);
    }
}

// ====================================
// DASHBOARD STATS UPDATER
// ====================================

class DashboardStatsUpdater {
    constructor() {
        this.liveUpdates = new LiveUpdates();
    }

    init() {
        this.liveUpdates.register('stats', () => this.updateStats());
        this.liveUpdates.register('timestamp', () => this.liveUpdates.updateTimestamp(), 1000);
        this.liveUpdates.start();
        this.addLastUpdatedIndicator();
    }

    updateStats() {
        // List of possible stat IDs across all dashboards
        const statIds = [
            'totalPatients', 'todayAppointments', 'occupancyRate', 'monthlyRevenue',
            'emergencyCases', 'pendingReviews', 'upcomingCount', 'pendingBills',
            'activePrescriptions', 'medicalRecordsCount'
        ];

        statIds.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;

            const currentText = el.textContent.replace(/[^\d.]/g, '');
            const currentValue = parseFloat(currentText) || 0;

            // Simulate variations based on the type of stat
            let newValue = currentValue;
            if (id.toLowerCase().includes('revenue') || id.toLowerCase().includes('bills')) {
                newValue = currentValue + (Math.random() * 50 - 20);
            } else if (id.toLowerCase().includes('rate')) {
                newValue = Math.min(100, Math.max(0, currentValue + (Math.random() * 2 - 1)));
            } else {
                newValue = currentValue + Math.floor(Math.random() * 3 - 1);
            }

            const suffix = id.toLowerCase().includes('rate') ? '%' :
                (id.toLowerCase().includes('revenue') || id.toLowerCase().includes('bills') ? '' : '');

            // For currency, we might want to keep the formatting
            if (id.toLowerCase().includes('revenue') || id.toLowerCase().includes('bills')) {
                const formatted = '₹' + Math.max(0, newValue).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                el.textContent = formatted;
            } else {
                AnimatedCounter.updateWithAnimation(id, Math.max(0, Math.floor(newValue)), suffix);
            }
        });

        this.liveUpdates.showRefreshAnimation('lastUpdated');

        document.querySelectorAll('.stat-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('pulse-fast');
                setTimeout(() => card.classList.remove('pulse-fast'), 600);
            }, index * 100);
        });
    }

    addLastUpdatedIndicator() {
        const headers = document.querySelectorAll('h1');
        if (headers.length > 0) {
            const indicator = document.createElement('div');
            indicator.id = 'lastUpdated';
            indicator.className = 'last-updated';
            indicator.style.marginTop = '0.5rem';
            indicator.innerHTML = 'Last updated: <span class="last-updated-time">Just now</span>';

            // Adjust positioning for welcome banners
            const container = headers[0].closest('.card') || headers[0].parentElement;
            container.appendChild(indicator);
        }
    }
}

// ====================================
// RIPPLE EFFECT
// ====================================

class RippleEffect {
    static init() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('.btn, .card, .sidebar-item');
            if (!target) return;

            const ripple = document.createElement('span');
            const rect = target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            if (!target.classList.contains('ripple-container')) {
                target.classList.add('ripple-container');
            }

            target.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    }
}

// ====================================
// NOTIFICATION SYSTEM
// ====================================

class LiveNotifications {
    static show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} fade-in-down`;
        notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 24px;
      z-index: 9999;
      max-width: 400px;
      animation: fadeInDown 0.3s ease-out;
    `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }
}

// ====================================
// PAGE TRANSITION EFFECTS
// ====================================

class PageTransitions {
    static init() {
        // Fade in cards on load
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            setTimeout(() => {
                card.classList.add('fade-in-up');
                card.style.opacity = '1';
            }, index * 100);
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ====================================
// STATUS INDICATORS
// ====================================

class StatusIndicators {
    static addLiveBadge() {
        const headers = document.querySelectorAll('h1');
        if (headers.length > 0) {
            const badge = document.createElement('span');
            badge.className = 'live-badge';
            badge.textContent = 'LIVE';
            badge.style.marginLeft = '1rem';
            badge.style.fontSize = '0.6em';
            badge.style.verticalAlign = 'middle';
            headers[0].appendChild(badge);
        }
    }

    static addPulsingDots() {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            const dot = document.createElement('span');
            dot.className = 'live-indicator';
            dot.style.position = 'absolute';
            dot.style.top = '1rem';
            dot.style.right = '1rem';
            dot.title = 'Live updates';
            card.style.position = 'relative';
            card.appendChild(dot);
        });
    }
}

// ====================================
// AUTO-INITIALIZE ON PAGE LOAD
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize ripple effects
    RippleEffect.init();

    // Initialize page transitions
    PageTransitions.init();

    // Add live badges and indicators
    StatusIndicators.addLiveBadge();
    StatusIndicators.addPulsingDots();

    // Initialize dashboard stats updater if on admin dashboard
    if (document.getElementById('totalPatients')) {
        const statsUpdater = new DashboardStatsUpdater();
        statsUpdater.init();

        // Show welcome notification
        setTimeout(() => {
            LiveNotifications.show('Dashboard is now live! Stats update automatically every 10 seconds.', 'success');
        }, 1000);
    }
});

// Export for global use
if (typeof window !== 'undefined') {
    window.LiveUpdates = LiveUpdates;
    window.AnimatedCounter = AnimatedCounter;
    window.LiveNotifications = LiveNotifications;
    window.RippleEffect = RippleEffect;
}

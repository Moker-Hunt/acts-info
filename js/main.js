// Cookie Consent Management
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'cookie-overlay';
    document.body.appendChild(overlay);

    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookieConsent')) {
        document.getElementById('cookieConsent').style.display = 'block';
        overlay.style.display = 'block';
        
        // Prevent scrolling when cookie consent is shown
        document.body.style.overflow = 'hidden';
    }

    // Handle cookie acceptance
    document.getElementById('acceptCookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        document.getElementById('cookieConsent').style.display = 'none';
        overlay.style.display = 'none';
        
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * Project: Al Hafiz Multani Sohan Halwa
 * Description: Core UI logic for Navigation and Scroll effects.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Handle Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle icons between Hamburger and Close
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Header Shrink & BackToTop Visibility on Scroll
    const backToTopBtn = document.getElementById('backToTop');
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        if (scrolled > 300) {
            if (backToTopBtn) backToTopBtn.style.display = "flex";
            header.style.padding = "5px 0";
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        } else {
            if (backToTopBtn) backToTopBtn.style.display = "none";
            header.style.padding = "12px 0";
            header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
        }
    });

    // Smooth Scroll Action for BackToTop
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Initialize Automated Copyright Year
    const footerText = document.querySelector('.footer-bottom');
    if (footerText) {
        const year = new Date().getFullYear();
        footerText.innerHTML = `&copy; ${year} Al Hafiz Multani Sohan Halwa. Professional Quality.`;
    }
});
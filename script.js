// script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll-to-Top Button Functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function() {
        // Show button when scrolled down 200px
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        // Smooth scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 2. Simple Tracking Form Simulation (on index.html)
    const trackingForm = document.getElementById('tracking-form');
    const trackingStatus = document.getElementById('tracking-status');

    if (trackingForm) {
        trackingForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload
            const trackingNumber = document.getElementById('tracking-number').value.trim();

            if (trackingNumber.length < 8) {
                trackingStatus.textContent = "Invalid Tracking Number format.";
                trackingStatus.style.color = 'red';
                return;
            }

            // Display loading state
            trackingStatus.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Tracking...';
            trackingStatus.style.color = '#333';

            // Simulate API call delay
            setTimeout(() => {
                const status = (trackingNumber === 'SS12345678') ? 
                                "Status: Package is Out for Delivery!" : 
                                "Status: Tracking number found. Currently in Transit at Hub A.";
                
                trackingStatus.innerHTML = status;
                trackingStatus.style.color = 'var(--primary-orange)';
            }, 1500); // 1.5 second delay
        });
    }

    // 3. Simple Login/Registration Simulation (on login.html - assumes you create this)
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // In a real application, you'd send data to a server here.
            
            // Simple validation and redirection
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                alert('Login Successful! Redirecting to Dashboard...');
                // Redirects to the required 6th page
                window.location.href = 'dashboard.html'; 
            } else {
                alert('Please enter both email and password.');
            }
        });
    }
});
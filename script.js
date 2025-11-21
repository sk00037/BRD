document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    // Simple Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        // This will allow you to add a class to your desktop-nav to show it on mobile
        // when the hamburger icon is clicked.
        desktopNav.classList.toggle('nav-open'); 
    });

    // You would add more JavaScript here for:
    // 1. Form validation and submission handling (AJAX)
    // 2. Smooth scrolling to sections (using anchor links)
    // 3. Carousel/slider for testimonials
});





// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    // Existing Mobile Menu Toggle code...
    const menuToggle = document.querySelector('.menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    menuToggle.addEventListener('click', () => {
        desktopNav.classList.toggle('nav-open'); 
    });
    
    // Close modal if user clicks outside of it
    window.onclick = function(event) {
        const modal = document.getElementById('about-modal');
        if (event.target == modal) {
            closeModal('about-modal');
        }
    }
});






// --- SCROLL REVEAL ANIMATION LOGIC ---

// Function to check if element is in viewport
function checkVisibility() {
    const revealedElements = document.querySelectorAll('.scroll-reveal');
    
    revealedElements.forEach(element => {
        // Get the element's position relative to the viewport
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the top of the element is less than 85% of the window height, it's visible enough
        if (elementTop < windowHeight * 0.85) {
            element.classList.add('visible');
        } 
        // Optional: If you want elements to disappear when scrolled out (usually better to keep them visible)
        // else {
        //     element.classList.remove('visible');
        // }
    });
}

// 1. Run the check once on page load (in case elements are already visible)
document.addEventListener('DOMContentLoaded', checkVisibility);

// 2. Run the check every time the user scrolls
window.addEventListener('scroll', checkVisibility);

// Note: This logic should be placed outside or alongside your existing DOMContentLoaded listener in script.js
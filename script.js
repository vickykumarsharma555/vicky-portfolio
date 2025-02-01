const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
    } else {
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "flex"; // Correct: Use "flex"
    }
});

// Smooth scrolling (Corrected and integrated)
document.querySelectorAll('.menu-list-items a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close the menu on mobile after a link is clicked (Good UX)
        if (window.innerWidth <= 768) { // Check if it's mobile
            menu.style.display = 'none';
            document.querySelector('.hamburger-icon').style.display = 'inline-block'; // Show hamburger
            document.querySelector('.cross-icon').style.display = 'none';       // Hide cross
        }
    });
});


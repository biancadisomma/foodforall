/*Hamburger menu*/
  //Select the hamburger icon
const hamBurger = document.querySelector(".hamburger");
  //Select the list of navigation links
const navLinks = document.querySelector(".nav-link");

  // Event listener to the hamburger icon
hamBurger.addEventListener("click", function(){
    // When clicked, toggle the 'active' class on the navigation links.
    navLinks.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollButtons = document.querySelectorAll('.base-btn');
    const allSections = document.querySelectorAll('main section');

    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the parent section of the clicked button
            const currentSection = button.closest('section');
            
            // Convert NodeList to Array to easily find the index
            const sectionsArray = Array.from(allSections);
            
            // Find the index of the current section
            const currentIndex = sectionsArray.indexOf(currentSection);
            
            // Check if there is a next section in the array
            if (currentIndex !== -1 && currentIndex < sectionsArray.length - 1) {
                // The next section is the one immediately following the current one
                const nextSection = sectionsArray[currentIndex + 1];
                
                // Scroll smoothly to the next section
                nextSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    //Get all the stat boxes
    const statBoxes = document.querySelectorAll('.stat-box');
    
    // Checks visibility and runs the animation
    function checkVisibility() {
        // Get the current vertical scroll position of the viewport
        const scrollPosition = window.scrollY; 
        
        // Calculate the height of the viewport
        const viewportHeight = window.innerHeight;

        // Loop through each stat box
        statBoxes.forEach((box, index) => {
            // If the box has already appeared, skip to next one
            if (box.classList.contains('appear')) {
                return;
            }

            // Get the vertical position of the top of the stat box on the page
            const boxTop = box.getBoundingClientRect().top + scrollPosition;
            
            // Define the trigger point: 
            const triggerPoint = scrollPosition + viewportHeight * 0.85; 

            // Check if the scroll position has passed the trigger point for this box
            if (boxTop < triggerPoint) {
                // Set the staggered delay (0s, 0.15s, 0.30s, etc.)
                box.style.transitionDelay = `${index * 0.15}s`;
                
                // Add the 'appear' class to trigger the CSS animation
                box.classList.add('appear');
            }
        });
    }

    // Run the check once when the page loads (in case the section is visible immediately)
    checkVisibility();

    // Attach the function to the 'scroll' event so it runs every time the user scrolls
    window.addEventListener('scroll', checkVisibility);
});


/*Back to top button*/
  //Get the button element
let backToTopBtn = document.getElementById("backToTopBtn");

  //When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

  // visibility of the "Back to Top" button.
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

  //when the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' 
    
  });

}
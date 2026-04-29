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

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


document.addEventListener("DOMContentLoaded", () => {
 const details = document.querySelectorAll(".faq-item");


 // Only one open at a time
 details.forEach((item) => {
   item.addEventListener("toggle", () => {
     if (item.open) {
       details.forEach((el) => {
         if (el !== item && el.open) el.removeAttribute("open");
       });
     }
   });
 });


 // Back-to-top button (shared)
 const topBtn = document.getElementById("backToTopBtn");
 window.addEventListener("scroll", () => {
   topBtn.style.display = window.scrollY > 250 ? "block" : "none";
 });
 topBtn.addEventListener("click", () => {
   window.scrollTo({ top: 0, behavior: "smooth" });
 });
});



//*Hamburger menu*/
  //Select the hamburger icon
const hamBurger = document.querySelector(".hamburger");
  //Select the list of navigation links
const navLinks = document.querySelector(".nav-link");

  // Event listener to the hamburger icon
hamBurger.addEventListener("click", function(){
    // When clicked, toggle the 'active' class on the navigation links.
    navLinks.classList.toggle("active");
});

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


// Back to Top
const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
 const y = document.documentElement.scrollTop || document.body.scrollTop;
 backToTopBtn.style.display = y > 200 ? "block" : "none";
});
if (backToTopBtn) {
 backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}


// Respect reduced motion
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


// Reveal sections on scroll
if (!reduceMotion) {
 const revealables = document.querySelectorAll(".stat, .split, .hero, .location-card");
 const io = new IntersectionObserver((entries, obs) => {
   entries.forEach(e => {
     if (e.isIntersecting) {
       e.target.classList.add("visible");
       obs.unobserve(e.target);
     }
   });
 }, { threshold: 0.15 });
 revealables.forEach(el => io.observe(el));
} else {
 // If user prefers reduced motion, mark visible immediately
 document.querySelectorAll(".stat, .split, .hero, .location-card").forEach(el => el.classList.add("visible"));
}


// Fancy Count-up for stats
const counters = document.querySelectorAll(".count");
let counted = false;


function runCounters() {
 if (counted) return;
 const impact = document.querySelector(".impact");
 if (!impact) return;


 const rect = impact.getBoundingClientRect();
 const inView = rect.top < window.innerHeight && rect.bottom > 0;


 if (inView) {
   counted = true;
   counters.forEach(el => animateCount(el));
 }
}


function animateCount(el) {
 const target = parseInt(el.getAttribute("data-target"), 10) || 0;
 if (reduceMotion) { el.textContent = target.toLocaleString(); return; }


 const duration = 1200; // ms
 const start = performance.now();


 function step(now) {
   const p = Math.min(1, (now - start) / duration);
   const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
   const value = Math.floor(eased * target);
   el.textContent = value.toLocaleString();
   if (p < 1) requestAnimationFrame(step);
   else el.textContent = target.toLocaleString();
 }
 requestAnimationFrame(step);
}


// Trigger count when impact section enters view
window.addEventListener("scroll", runCounters, { passive: true });
window.addEventListener("load", runCounters);




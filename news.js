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

// Back to top (kept same)
const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
 backToTopBtn.style.display = window.scrollY > 150 ? "block" : "none";
});
backToTopBtn?.addEventListener("click", () =>
 window.scrollTo({ top: 0, behavior: "smooth" })
);


// Poster Lightbox
const lb = document.createElement("div");
lb.className = "lightbox";
lb.innerHTML = `<button type="button" aria-label="Close">✕</button><img alt="poster">`;
document.body.appendChild(lb);
const lbImg = lb.querySelector("img");
const lbClose = lb.querySelector("button");


document.querySelectorAll(".open-lightbox").forEach(img => {
 img.addEventListener("click", () => {
   lbImg.src = img.dataset.lightbox || img.src;
   lb.classList.add("open");
   lbClose.focus();
 });
});
function closeLB(){ lb.classList.remove("open"); lbImg.removeAttribute("src"); }
lbClose.addEventListener("click", closeLB);
lb.addEventListener("click", e => { if(e.target === lb) closeLB(); });
document.addEventListener("keydown", e => { if(e.key === "Escape" && lb.classList.contains("open")) closeLB(); });


// Copy Address with feedback
function copyText(text){ return navigator.clipboard?.writeText(text); }
document.querySelectorAll(".copy-addr").forEach(btn => {
 btn.addEventListener("click", async () => {
   const text = btn.dataset.copy || "";
   const hint = btn.closest(".content").querySelector(".hint");
   try {
     await copyText(text);
     if(hint){ hint.textContent = "Address copied ✓"; setTimeout(()=> hint.textContent="", 1500); }
   } catch {
     if(hint){ hint.textContent = "Couldn’t copy — long-press to copy."; setTimeout(()=> hint.textContent="", 2000); }
   }
 });
});



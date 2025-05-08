// Typing animation (simple effect for hero)
document.addEventListener("DOMContentLoaded", () => {
    const text = "Digital Marketing Expert";
    const typingTarget = document.querySelector(".typing-text");
    let index = 0;
  
    function type() {
      if (index < text.length) {
        typingTarget.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
  
    type();
  });
  
  // Smooth scroll to section on nav click
  document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Sticky navbar on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
  });
  
  // AOS initialization (Animate on Scroll)
  AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Optional: Mobile menu toggle (if included in HTML)
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
  
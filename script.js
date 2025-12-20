// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- Mobile Menu Logic ---
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const body = document.body;

let isMenuOpen = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    // Open Menu
    mobileMenu.style.pointerEvents = "auto";
    body.classList.add("menu-open"); // Prevent scrolling
    menuBtn.classList.add("hamburger-active");

    gsap.to(mobileMenu, {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.fromTo(
      mobileLinks,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.2,
        ease: "power2.out",
      }
    );
  } else {
    // Close Menu
    mobileMenu.style.pointerEvents = "none";
    body.classList.remove("menu-open");
    menuBtn.classList.remove("hamburger-active");

    gsap.to(mobileMenu, {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
    });
  }
}

// Close menu when clicking a link
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) toggleMenu();
  });
});

// --- Existing Animations ---

// Hero Text Reveal
window.addEventListener("load", () => {
  gsap.to(".split-text-reveal", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
  });
});

// Marquee Clone
const marqueeWrapper = document.querySelector(".marquee-wrapper");
const marqueeContent = document.querySelector(".marquee-content");

if (marqueeContent && marqueeWrapper) {
  const clone = marqueeContent.cloneNode(true);
  marqueeWrapper.appendChild(clone);
}

// Scroll Trigger Animations
const fadeElements = document.querySelectorAll(".group, h2, p, .social-card");

fadeElements.forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });
});

// Navbar Scroll Logic
const navbar = document.getElementById("navbar");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-midnight/90", "shadow-lg");
      navbar.classList.remove("border-transparent");
    } else {
      navbar.classList.remove("bg-midnight/90", "shadow-lg");
      navbar.classList.add("border-transparent");
    }
  },
  { passive: true }
);

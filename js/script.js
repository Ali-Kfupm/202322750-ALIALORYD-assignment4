/* =====================================================
   CACHE COMMON ELEMENTS
===================================================== */
const header = document.querySelector("header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

/* =====================================================
   DYNAMIC FOOTER YEAR
===================================================== */
year.textContent = new Date().getFullYear();

/* =====================================================
   HEADER SHADOW + ACTIVE NAV LINK
   One optimized scroll listener instead of two
===================================================== */
function handleScroll() {
  header.classList.toggle("scrolled", window.scrollY > 50);

  const scrollPosition = window.scrollY + 140;
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentSectionId}`;
    link.classList.toggle("active", isActive);
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

/* =====================================================
   MOBILE MENU TOGGLE
===================================================== */
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =====================================================
   CONTACT FORM FEEDBACK
===================================================== */
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Thank you. Your message has been prepared successfully.";
    contactForm.reset();
  });
}
console.log("JS is working ✅");

// Typing effect
const text = "Omar Elzehary";
let index = 0;
function type() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}
window.addEventListener("load", type);

window.addEventListener("load", () => {
  const heroImg = document.querySelector(".hero-img img");
  heroImg.style.opacity = 0;
  heroImg.style.transform = "scale(0.8)";
  setTimeout(() => {
    heroImg.classList.add("show");
  }, 200);
});


// Fade-in for sections
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
faders.forEach(fader => observer.observe(fader));

// Fade-in for project cards
const projectCards = document.querySelectorAll(".project-card");
const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
projectCards.forEach(card => cardObserver.observe(card));

// Navbar hide/show
let lastScrollY = window.scrollY;
const navbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        navbar.style.top = "-70px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollY = window.scrollY;
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

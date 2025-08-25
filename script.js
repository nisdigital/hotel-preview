// Smooth scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section-block");
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

// Add fade-in styles
const style = document.createElement("style");
style.innerHTML = `
  .hidden { opacity: 0; transform: translateY(50px); transition: all 0.8s ease; }
  .visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

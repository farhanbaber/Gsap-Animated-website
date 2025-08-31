  function createStar() {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + 1; // Random size between 1 and 4px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animation = `move ${Math.random() * 10 + 5}s linear infinite`;
      document.body.appendChild(star);

      // Remove star after its animation duration to prevent overload
      setTimeout(() => star.remove(), (Math.random() * 10 + 5) * 1000);
    }

    // Create stars continuously
    setInterval(() => {
      for (let i = 0; i < 5; i++) { // Increase 5 stars at a time
        createStar();
      }
    }, 1000);

  
// GSAP 
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ENTRY animation (sirf load par chalega)
  let entry = gsap.timeline({
    onComplete: startScrollAnimation // jab entry khatam ho jaye to scroll wali chalu hogi
  });

  // AIR text (right se aaye)
  entry.from("#h-one", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }, "start");

  // IMAGE (upar se bhooom aaye)
  entry.from(".air", {
    y: -200,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)"
  }, "start");

  // ODS text (left se aaye)
  entry.from("#h-two", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }, "start");

  // --- Function jo scroll wali anim start karega ---
  function startScrollAnimation() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container-one",
        start: "top 20%",
        endTrigger: ".container-three",
        end: "bottom top",
        scrub: 1.5,
        // markers: true
      }
    });

    tl.to(".air", { x: -200, y: 500, ease: "none" });
    tl.to(".air", { x: 350, y: 1200, scale: 0.6, ease: "none" });
    tl.to(".air", { x: 20, y: 1690, scale: 1.0, ease: "none" });
  }

});
window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,   // jitna zyada, utna smooth
      ease: "power3.out"
    });
  });
});

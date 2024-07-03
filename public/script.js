gsap.registerPlugin(ScrollTrigger)

const card = document.getElementById('card');
gsap.to(".card", {
  x: 400,
  rotate: 360,
  duration: 1,
  scrollTrigger: {
    trigger: ".card", // Element to trigger the animation
    start: "top center", // Start trigger when the top of the card reaches the center of the viewport
    end: "bottom center", // End trigger when the bottom of the card reaches the center of the viewport
    // markers: true // Show markers for debug purposes (optional)
  }
});

const intro = document.getElementById('intro');
gsap.to(intro, { rotate: 360, duration: 1 });

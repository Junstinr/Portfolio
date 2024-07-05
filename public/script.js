document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!


// Animate each card individually
document.querySelectorAll(".card").forEach(card => {
  gsap.fromTo(card,
    { scale: 1 },
    { scale: 1.1, 
      scrollTrigger: {
        trigger: card,
        start: "center bottom",
        end: "bottom center",
        scrub: 1, // Smoothens the animation
        // markers: true,
        toggleActions: "play none none reverse" // Only shrink when scrolling back up
      }
    }
  );
});

 




 });




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

  
 
  const button = document.getElementById("hide-nav");
  const retractIcon = button.querySelector(".retract");
  const expandIcon = button.querySelector(".expand");
  const sideBar = document.getElementById("navMenu");
  const box = document.getElementById("box");
  const mainContent = document.getElementById("mainContent");
  const navLinkTexts = document.querySelectorAll('.nav-link-text');
  const navContact = document.querySelectorAll('.nav-contact');

  let isHidden = false;

  
  
  button.addEventListener('click', () => {
    //--------------------------EXPAND--------------------------
    if (isHidden) {
      const tl = gsap.timeline();

      // First, round the borders
      tl.to(sideBar, {
        duration: 0.3,
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        ease: 'power4.out',
      });

      // Then, expand the width while maintaining the rounded borders
      tl.to(sideBar, {
        duration: 0.4,
        width: '16.6667%',
        ease: 'power4.out',
      });

      // Simultaneously expand the width of the box
      tl.to(box, {
        duration: 0.2,
        width: '16.6667%',
        ease: 'power4.out',
      }, "<");

      // Finally, reset the border radius
      tl.to(sideBar, {
        duration: 0.2,
        borderTopRightRadius: '0%',
        borderBottomRightRadius: '0%',
        ease: 'power4.out',
      }, "-=0.3"); // Overlap with the last part of the width animation

      
      // Animate button to original position
      gsap.to(button, { left: '12rem', duration: 1, ease: "power4.inOut" });
      // Show retract icon and hide expand icon

      gsap.to(retractIcon, { opacity: 1, duration: 0.5, ease: 'none', onComplete: () => {
        expandIcon.classList.add('hidden');
        retractIcon.classList.remove('hidden');
        button.classList.remove('bg-gray-800', 'rounded-full');

        mainContent.classList.remove('w-max');

        navLinkTexts.forEach(text =>
          gsap.to(text, {
            opacity: 1,
            visibility: 'visible',
            display: 'flex',
  
          })
        );

        gsap.to(navContact,{
          ease: 'none',
          duration: 1,
          display: 'flex',
          // gap: 5,
        } )
  
      } });

      

      gsap.to(expandIcon, { opacity: 0, duration: 0.5});

    //--------------------------RETRACT--------------------------
    }
    else { 

      const tl = gsap.timeline();


      // Animate the top and bottom borders to curve out
      tl.to(sideBar, {
        duration: 0.4,
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%",
        ease: "power4.in"
      },);

      tl.to(sideBar, {
        duration: 0.3,
        width: "5rem",
        borderTopRightRadius: "0%",
        borderBottomRightRadius: "0%",
        ease: "none"
      });

      tl.to(box, {
        duration: 0.3,
        width: '5rem',
        ease: 'none',
      });

      // Animate button to new position
      gsap.to(button, { left: '1.5rem', duration: 0.5, ease: "power4.out", onComplete: () => {
        button.classList.add('bg-gray-800', 'rounded-full');
      } });
      // Show expand icon and hide retract icon
  

      gsap.to(retractIcon, { opacity: 0, duration: 0.2 });
      gsap.to(expandIcon, { opacity: 1, duration: 0.2, ease: "power4.out", onComplete: () => {
        retractIcon.classList.add('hidden');
        expandIcon.classList.remove('hidden');
        mainContent.classList.add('w-max');
        gsap.to(navContact,{
          ease: 'none',
          duration: 1,
          display: 'grid',
          // gap: 5,
        } )
      }});

      navLinkTexts.forEach(text =>
        gsap.to(text, {
          opacity: 0,
          visibility: 'hidden',
          display: 'none',
        })
      );

      // navContact.forEach(icon =>
      //   gsap.to(icon, {
      //     display: 'block',
      //     padding: 10,
      //   })
      // )

      // Shrink the sidebar width to 0


    }
    
    isHidden = !isHidden;
    });
  




 });





document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(TextPlugin)
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


  //-----------------------------------------------SIDE NAV ANIMATION -----------------------------------------------
 
  const button = document.getElementById("hide-nav");
  const retractIcon = button.querySelector(".retract");
  const expandIcon = button.querySelector(".expand");
  const sideBar = document.getElementById("navMenu");
  const box = document.getElementById("box");
  const mainContent = document.getElementById("mainContent");
  const navLinkTexts = document.querySelectorAll('.nav-link-text');
  const navContact = document.querySelectorAll('.nav-contact');
  const navIcon = document.querySelectorAll('.nav-icon');
  const navContent = document.querySelectorAll('.nav-content')

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

    

      // Simultaneously expand the width of the box
      tl.to(box, {
        duration: 0.3,
        width: '16.6667%',
        ease: 'none',
      });

      // Then, expand the width while maintaining the rounded borders
      tl.to(sideBar, {
        duration: 0.3,
        width: '16.6667%',
        ease: 'none',
        onComplete: () => {
          navLinkTexts.forEach(text =>
            gsap.to(text, {
              opacity: 1,
              visibility: 'visible',
              display: 'flex',
              width: 'auto',
              ease: 'none',
              duration: 1,
            })
          );
  
          gsap.to(navContact,{
            ease: 'none',
            duration: 1,
            display: 'flex',
            // gap: 5,
          } )
        }
      }, "<");

      // Finally, reset the border radius
      tl.to(sideBar, {
        duration: 0.2,
        borderTopRightRadius: '0%',
        borderBottomRightRadius: '0%',
        ease: 'none',
      }); // Overlap with the last part of the width animation

      
      // Animate button to original position
      gsap.to(button, { left: '12rem', duration: 0.8, ease: "power4.in" });
      // Show retract icon and hide expand icon

      tl.to(retractIcon, { opacity: 1, duration: 0, ease: 'none', onComplete: () => {
        expandIcon.classList.add('hidden');
        retractIcon.classList.remove('hidden');
        button.classList.remove('bg-gray-800', 'rounded-full');

        mainContent.classList.remove('w-max');

        
  
      } });

      

      gsap.to(expandIcon, { opacity: 0, duration: 0.5});

    //--------------------------RETRACT--------------------------
    }
    else { 

      const tl = gsap.timeline();


      // Animate the top and bottom borders to curve out
      // tl.to(sideBar, {
      //   duration: 0.3,
      //   borderTopRightRadius: "50%",
      //   borderBottomRightRadius: "50%",
      //   ease: "power4.in"
      // },);

      tl.to(sideBar, {
        duration: 0.5,
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

      gsap.to(button, { left: '1.5rem', duration: 1, ease: "power4.out" });
  
      gsap.to(retractIcon, { opacity: 0, duration: 0, onComplete: () => {
        button.classList.add('bg-gray-800', 'rounded-full');
      } });
      gsap.to(expandIcon, { opacity: 1, duration: 0, ease: "power4.out", onComplete: () => {
        retractIcon.classList.add('hidden');
        expandIcon.classList.remove('hidden');
        mainContent.classList.add('w-max');
        gsap.to(navContact,{
          ease: 'none',
          duration: 1,
          display: 'grid',
        } )
      }});

      navLinkTexts.forEach(text =>
        gsap.to(text, {
          opacity: 0,
          width: 0,
          visibility: 'hidden',
          display: 'none',
        })
      );
    }
    
    isHidden = !isHidden;
    });
  //-----------------------------------------------SIDE NAV ANIMATION -----------------------------------------------


  //-----------------------------------------------TypeWriter ANIMATION -----------------------------------------------
  const words = [" Front-End Developer.", " Back-End Developer.", " Software Developer."]
  
  let cursor = gsap.to('.cursor', {
    opacity: 0,
    ease: "power4.inOut",
    repeat: -1,
    duration: 1
  })

  let mainTL = gsap.timeline({repeat: -1})

  words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})

    tl.to('.text', {
      duration: 1,
      text: word,

    })

    mainTL.add(tl)
  })




  //-----------------------------------------------TypeWriter ANIMATION -----------------------------------------------


  //-----------------------------------------------Small SideNav ANIMATION -----------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  let isActive = true;

  menuToggle.addEventListener('click', () => {

    if (isActive) {
      let tl = gsap.timeline()

      sideBar.classList.remove('hidden');
      sideBar.classList.add('z-30', 'grid');

      gsap.to(navContact, {
        opacity: 1,
        visibility: 'visible',
        width: "auto",
        duration: 0
      })

      gsap.to(navContent, {
        opacity: 1,
        visibility: 'visible',
        width: "auto",
        duration: 0
      })

      gsap.fromTo(navLinkTexts, {
        opacity: 0,
        visibility: 'hidden',
        width: 0,
      }, {
        opacity: 1,
        visibility: 'visible',
        width: 'auto',
        duration: 0.7,
      })

      tl.to(sideBar, {
        width: "0%",
        duration: 0,
        ease: "none"
      })
      
      tl.to(sideBar,{
        width: "40%",
        duration: 0.3,
        ease: "none"
      })

      tl.to(sideBar, {
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%",
        duration: 0.1,
        ease: "none"
      }, "<")

      tl.to(sideBar, {
        borderTopRightRadius: "0%",
        borderBottomRightRadius: "0%",
        duration: 0.1,
        ease: "none"
      })
    }
    else{

      gsap.to(navContent, {
        opacity: 0,
        visibility: 'hidden',
        width: 0,
        duration: 0
      })

      gsap.to(navContact, {
        opacity: 0,
        visibility: 'hidden',
        width: 0,
        duration: 0
      })

      gsap.to(sideBar, {
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%",
        duration: 0.1,
        ease: "none"
      })

      gsap.to(navIcon, {
        opacity: 0,
        
        visibility: 'hidden',
        width: 0,
        duration: 0
      })
    
      gsap.to(sideBar, {
        width: "0%",
        duration: 0.5,
        ease: "none",
        onComplete: () => {
          sideBar.classList.add('hidden');
        }
      })

      

    }

    isActive = !isActive;

  });



//end
});

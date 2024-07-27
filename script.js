const tl = gsap.timeline();
tl.from(".header-left div", {
  x: 100,
  // delay:2,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});
tl.from(".header-right img", {
  y: 70,
  opacity: 0,
  duration: 0.5,
});
tl.from(".header-left-btn", {
  y: 50,

  opacity: 0,
  duration: 0.5,
  // stagger:1,
});
const tl2 = gsap.timeline();
tl2.from(".s-1-cards-container div", {
  y: 40,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,

  scrollTrigger: {
    trigger: ".section-1",
    scroller: "body",
    // markers: true,
    start: "0% 50%",
    end: "30% 50%",
    scrub: 1,
    // pin:true,
  },
});
gsap.from(".s-2-feature-1 div ,.s-2-feature-1-right-btn", {
  y: 40,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".s-2-feature-1 div",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 10%",
    scrub: 1,
    // pin:true,
  },
});
gsap.from(".s-2-feature-2 div, .s-2-feature-2-right-btn", {
  y: 40,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".s-2-feature-2 div",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 40%",
    scrub: 1,
    // pin:true,
  },
});
gsap.from(".section-3-right div,.section-3-right button", {
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
    
    scrollTrigger: {
      trigger: ".section-3-right div",
      scroller: "body",
    //   markers: true,
      start: "top 90%",
      end: "top 40%",
      scrub: 1,
  
      // pin:true,
    },
  });
  
  gsap.from(".section-3-left img", {
    x: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".section-3-left img",
      scroller: "body",
    //   markers: true,
      start: "top 90%",
      end: "top 40%",
      scrub: 1,
      // pin:true,
    },
  });
  
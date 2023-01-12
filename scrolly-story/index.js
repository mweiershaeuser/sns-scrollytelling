// Intro
gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-intro",
      start: "top top",
      end: "bottom center",
      scrub: true,
      pin: true
    }
  })
    .to("#scene-intro .text",  { opacity: 0 })
    .to("#scene-intro .logo",  { scale: 2, xPercent: -170}, "<");

// Scene 1
gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-tree",
      start: "center center",
      end: "bottom center",
      scrub: true,
      pin: true
    }
  })
  .from("#scene-tree .apple",  { y: -150 })
  .from("#scene-tree .banana",  { y: -100 }, "<")
  .to("#scene-tree .spb-1", { display: 'inline-block' })
  .to("#scene-tree .spb-1", { display: 'none' })
  .to("#scene-tree .spb-2", { display: 'inline-block' })
  .to("#scene-tree .spb-2", { display: 'none' })
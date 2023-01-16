// Intro
gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-intro",
      start: "top top",
      end: "bottom center",
      scrub: .5,
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
      scrub: .5,
      pin: true
    }
  })
  .from("#scene-tree .apple",  { y: -150 })
  .from("#scene-tree .banana",  { y: -100 }, "<")
  .to("#scene-tree .spb-1", { display: 'inline-block', opacity: 1})
  .to("#scene-tree .spb-1", { display: 'none', opacity: 0, delay: 500 })
  .to("#scene-tree .spb-2", { display: 'inline-block', opacity: 1})
  .to("#scene-tree .spb-2", { display: 'none', opacity: 0, delay: 500 })
  .to("#scene-tree .spb-3", { display: 'inline-block', opacity: 1})
  .to("#scene-tree .spb-3", { display: 'none', opacity: 0, delay: 500 })
  .to("#scene-tree .spb-4", { display: 'inline-block', opacity: 1})
  .to("#scene-tree .spb-4", { display: 'none', opacity: 0, delay: 500 })
  .to("#scene-tree .apple", { display: 'none'})
  .to("#scene-tree .apple-falling", { display: 'block'})
  .to("#scene-tree .apple-falling", { y: window.innerHeight, duration: 200 })
  .to("#scene-tree .apple-falling", { opacity: 0 })
  .to("#scene-tree .apple", { display: 'none'})

// Scene 2
const battaVideo = document.getElementById("batta-video");

gsap.timeline({
    scrollTrigger: {
      trigger: "#scene-apple-falling",
      start: "center center",
      end: "+=5000",
      scrub: .5,
      pin: true
    }
  })
  .to("#scene-apple-falling .spb-1", { display: 'inline-block', opacity: 1})
  .to("#scene-apple-falling .spb-1", { display: 'none', opacity: 0, delay: 500 })
  .to("#scene-apple-falling .apple", { display: 'none'})
  .to("#scene-apple-falling .apple-phone", { display: 'block'}, "<")
  .from("#scene-apple-falling .phone-container", { x: window.innerWidth, duration: 500 })
  .to("#scene-apple-falling .phone-container", { duration: 2000, scrollTrigger: {
      trigger: "#batta-video",
      start: "center center",
      end: "+=3000",
      onUpdate: (animation) => {
        battaVideo.currentTime = animation.progress / 10 * 100;
      }
    }
  })
  .to("#scene-apple-falling .spb-2", { display: 'inline-block', opacity: 1}, ">")
  .to("#scene-apple-falling .spb-2", { display: 'none', opacity: 0, delay: 500 })
  .to("#scene-apple-falling .phone-container", { y: -window.innerHeight, duration: 500 })
  .to("#scene-apple-falling .apple-phone", { y: -window.innerHeight, duration: 500 }, "<")

// Scene 3
gsap.timeline({
  scrollTrigger: {
    trigger: "#scene-tree-banana",
    start: "center center",
    end: "bottom center",
    scrub: .5,
    pin: true
  }
})
.to("#scene-tree-banana .tree", {display: 'block'})
.from("#scene-tree-banana .tree", { y: -window.innerHeight / 2}, "<")
.to("#scene-tree-banana .banana", {display: 'block'})
.from("#scene-tree-banana .banana", { y: -window.innerHeight / 2}, "<")
.to("#scene-tree-banana .spb-1", { display: 'inline-block', opacity: 1})
.to("#scene-tree-banana .spb-1", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-tree-banana .spb-2", { display: 'inline-block', opacity: 1})
.to("#scene-tree-banana .spb-2", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-tree-banana .spb-3", { display: 'inline-block', opacity: 1})
.to("#scene-tree-banana .spb-3", { display: 'none', opacity: 0, delay: 500 })

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
  .from("#scene-tree .apple",  { y: -150, duration: 500  })
  .from("#scene-tree .banana",  { y: -200, duration: 500, delay: 500  }, "<")
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
  .to("#scene-tree .apple-falling", { display: 'none'})

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
.from("#scene-tree-banana .tree", { y: -window.innerHeight / 2, duration: 500 }, "<")
.to("#scene-tree-banana .banana", {display: 'block'})
.from("#scene-tree-banana .banana", { y: -window.innerHeight / 2, duration: 500 }, "<")
.to("#scene-tree-banana .spb-1", { display: 'inline-block', opacity: 1})
.to("#scene-tree-banana .spb-1", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-tree-banana .spb-2", { display: 'inline-block', opacity: 1})
.to("#scene-tree-banana .spb-2", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-tree-banana .spb-3", { display: 'inline-block', opacity: 1})
.to("#scene-tree-banana .spb-3", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-tree-banana .banana", { y: window.innerHeight, duration: 200 })
.to("#scene-tree-banana .banana", { opacity: 0 })
.to("#scene-tree-banana .banana", { display: 'none'})

// Scene 4 Banana Falling needed?

// Scene 5

gsap.timeline({
  scrollTrigger: {
    trigger: "#scene-cherry",
    start: "center center",
    end: "bottom center",
    scrub: .5,
    pin: true
  }
})
.to("#scene-cherry .spb-1", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-1", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .spb-2", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-2", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .spb-3", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-3", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .spb-4", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-4", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .spb-5", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-5", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .spb-6", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-6", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .spb-7", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-7", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .cherry", { display: 'none' }, "<")
.to("#scene-cherry .cherry.no-hat", { display: 'unset' }, "<")
.to("#scene-cherry .banana", { display: 'none' }, "<")
.to("#scene-cherry .banana.hat", { display: 'unset' }, "<")
.to("#scene-cherry .spb-8", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-8", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .spb-9", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-9", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .cherry.no-hat", { x: window.innerWidth, duration: 5000 })
.from("#scene-cherry .apple", { x: -window.innerWidth, duration: 5000 }, "<")
.to("#scene-cherry .spb-10", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-10", { display: 'none', opacity: 0, delay: 500 })
.to("#scene-cherry .spb-11", { display: 'inline-block', opacity: 1})
.to("#scene-cherry .spb-11", { display: 'none', opacity: 0, delay: 500 })

gsap.timeline({
  scrollTrigger: {
    trigger: "#scene-end",
    start: "center center",
    end: "bottom center",
    scrub: .5,
    pin: true
  }
})
.to("#scene-end .story", { opacity: 0, duration: 500, delay: 500 })
.to("#scene-end .end", { opacity: 1, duration: 500 })

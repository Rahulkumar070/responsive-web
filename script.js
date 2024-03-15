const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from("#hero", {
  x: 300,
  scale: 0.1,
  duration: 2,
});

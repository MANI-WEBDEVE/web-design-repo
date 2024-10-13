gsap.to(".imageContainer", {
  width: "100%",
  duration: 6,
  delay: 3,
  stagger: 3,
  ease: "power2.out",
  repeat: -1,
});

gsap.to("h1", {
  ease: "power2.out",
  top: 0,
  delay: 3,
  duration: 6,
  stagger: 3,
  repeat: -1,
});

gsap.to("h1", {
  duration: 6,
  delay: 3,
  stagger: 3,
  // opacity: 0,
  y: -100,
  scale: 1,
//   ease: "power4.inOut",
  repeat: -1,
});

const mainHeadings = document.querySelectorAll(".reveal");

const valueSetter = () => {
  gsap.set(".nav a", { y: "-380%" });
  gsap.set(".Home .row2 img", { opacity: 0 });
  gsap.set(".row .reveal", { y: "50%", opacity: 0 });
  gsap.set(".row2 .reveal", { y: "50%", opacity: 0 });
  document.querySelectorAll("#Visual>g").forEach((elem) => {
    const character = elem.childNodes[1].childNodes[1];
    character.style.strokeDashoffset = character.getTotalLength() + "px";
    character.style.strokeDasharray = character.getTotalLength() + "px";
  });
};
function wrapSpan() {
  mainHeadings.forEach((elem) => {
    // create a two span tage
    const parentSpan = document.createElement("span");
    const childSpan = document.createElement("span");
    // add class
    parentSpan.classList.add("parent");
    childSpan.classList.add("child");
    //add context
    childSpan.innerHTML = elem.innerHTML;
    parentSpan.appendChild(childSpan);
    elem.innerHTML = "";
    elem.appendChild(parentSpan);
  });
}

const loader = () => {
  let tl = gsap.timeline();
  tl.from(".loader .child span", {
    x: 200,
    stagger: 0.1,
    duration: 1.2,
    ease: "power2.inOut",
  })
    .to(".loader .parent .child", {
      y: -100,
      duration: 1.2,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    })
    .to(".loader", {
      height: 0,
      duration: 0.6,
      ease: "power2.in",
    })
    .to(".green", {
      height: "100%",
      delay: -0.2,
      ease: "power1.out",
    })
    .to(".green", {
      height: 0,
      top: 0,
      duration: 0.6,
      ease: "power1.out",
      onComplete: () => {
        animateHomePage();
      },
    });
};

const svgAniamtion = () => {
  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    delay: 0.2,
  });
};

const animateHomePage = () => {
  let tl = gsap.timeline();
  tl.to(".nav a ", {
    y: 0,
    duration: 0.9,
    stagger: 0.2,
    delay: 0.3,
    ease: "bounce.out",
  })
    .to(".row .reveal ", {
        y: 0,
      opacity: 1,
      duration: 1,
      ease:"back.out(3)"
    })
    .to(".row2 .reveal ", {
      y: 0,
      opacity: 1,
      duration:1,
      delay: -0.7,
      stagger: 0.2,
      ease: "back.out(3)",
    })
    .to(".row2 img ", {
      opacity: 1,
      // duration:0.6,
      delay: 0.2,
      ease: "power1.out",
      onComplete: () => {
        svgAniamtion();
      },
    });
};
valueSetter();
wrapSpan();
loader();

// const mainHeading = document.querySelectorAll(".revelClass");
// mainHeading.forEach((elem) => {
//     const parentSpan = document.createElement("span");
//     const ChildSpan = document.createElement("span");

//     parentSpan.classList.add("parentSpan");
//     ChildSpan.classList.add("childSpan");

//     ChildSpan.innerHTML = elem.innerHTML;
//     parentSpan.appendChild(ChildSpan);
//     elem.innerHTML = "";
//     console.log(mainHeading)
//     elem.appendChild(parentSpan);
// })

// const tl = gsap.timeline();
// tl
// .to(".fs", {
//     height:0,
//     duration:2,
//     delay:3,
//     ease: "power2.inOut",
// })
// .to(".elem", {
//     height: "100vh",
//     duration:2,
//     delay: -3,
//     ease: "power4.inOut",
// })
// .to(".lastElem", {
//     height: "100vh",
//     duration:2,
//     delay:-2.7,
//     ease: "power4.inOut",
// })

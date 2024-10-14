const mainHeadings = document.querySelectorAll(".reveal");
function wrapSpan () {
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

wrapSpan()


let tl = gsap.timeline();
tl
.from(".child span", {
    x:200,
    stagger: 0.1,
    duration:1.2,
    ease: "power2.inOut",
    
})
.to(".parent .child",{
    y:-100, 
    duration:1.2,
    delay:0.2,
    opacity:0, 
    ease: "power3.inOut",    
})
.to(".loader", {
    height:0,
    duration:0.6,
    ease:"power2.in",
})
.to(".green", {
    height:"100%",
    delay:-0.2 ,
    ease:"power1.out",
})
.to(".green", {
    height:0,
    top:0,
    duration:0.6,
    ease:"power1.out",
})

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

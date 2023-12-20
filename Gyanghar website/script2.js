var tl=gsap.timeline()

gsap.from("#page-0",{
    delay:0.5,
    opacity:0.9,
    scale:0.9,
    duration:1
})
gsap.from("#page-1-logo-DA",{
    delay:2,
    scale:2,
    duration:2,
})
gsap.from("#bg-img",{
    delay:1,
    x:-50,
    scale:1.2,
    opacity:0,
    duration:0.4
})
gsap.from("#nav-bar img,#nav-buttons h1",{
    delay:2,
    y:-50,
    duration:0.5,
    opacity:0,
    stagger:0.2,
})
gsap.from("#menu-buttons h1",{
    delay:2,
    x:50,
    duration:0.5,
    rotate:180,
    opacity:0,
    stagger:0.2
})

gsap.from("#page-1-options, #search-bar",{
    delay:2,
    scale:0.8,
    opacity:0,
    duration:0.5,
})
gsap.from("#search-icon-1, #search-icon-2",{
    delay:2.5,
    scale:0.8,
    opacity:0,
    duration:0.5,
    rotate:60,
    stagger:0.8,
})

gsap.from("#page-1-logo-DU",{
    delay:3,
    x:-20,
    opacity:0,
    rotate:-10,
    scale:0.9,   
})
gsap.from("#headlines",{
    delay:3,
    x:-10,
    opacity:0,
    duration:5,
    repeat:-1,
    yoyo:true,
})

// // -------------------------

gsap.from("#div-1-1",{
    x:-100,    
    opacity:0,
    delay:1,
    duration:1,
})
gsap.from("#div-1-2",{
    opacity:0,
    scale:1.5,
    delay:1,
    duration:1,
})
gsap.from("#div-1-3",{
    opacity:0,
    x:100,
    delay:1,
    duration:1,
})
gsap.from("#div-2-1",{
    opacity:0,
    x:-100,
    delay:1,
    duration:1,
})
gsap.from("#div-2-2",{
    opacity:0,
    scale:1.5,
    delay:1,
    duration:1,
})
gsap.from("#div-2-3",{
    opacity:0,
    x:100,
    delay:1,
    duration:1,
})

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
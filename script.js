var tl = gsap.timeline();
window.onscroll = function () {
    var y = window.scrollY;

    gsap.to(".icon-cog", { duration: "1.5", rotate: y });
};

// Animation
//hh
ScrollReveal().reveal('#aboutMe', { delay: 500 });
ScrollReveal().reveal('#about2', { delay: 700 })
ScrollReveal().reveal('#projects', { delay: 500 });

ScrollReveal().reveal('#Cv', { delay: 500 });


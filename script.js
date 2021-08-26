window.addEventListener('resize', function (event) {
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;
    console.log(newWidth);

    if (newWidth < 751) {

    }
    else {

    }
});


// animacionea

var tl = gsap.timeline();
window.onscroll = function () {
    var y = window.scrollY;
    console.log(y);
    gsap.to(".icon-cog", {duration: "1.5", rotate: y });
};


ScrollReveal().reveal('#aboutMe', {delay: 500 });
ScrollReveal().reveal('#about2', {delay: 700})
ScrollReveal().reveal('#projects', { delay: 500 });

ScrollReveal().reveal('#cabanaBenyo', { delay: 500 });
ScrollReveal().reveal('.Benyotitle', { delay: 500 });
ScrollReveal().reveal('#imgBenyo', { delay: 500 });
ScrollReveal().reveal('#pImgBenyo', { delay: 500 });
ScrollReveal().reveal('.aBenyo', { delay: 500 });

ScrollReveal().reveal('#portafolio', { delay: 200 });
ScrollReveal().reveal('#imgPortafolio', { delay: 300 });
ScrollReveal().reveal('#pPortafolio', { delay: 300 });
ScrollReveal().reveal('.aPortafolio', { delay: 500 });

ScrollReveal().reveal('#skills', { delay: 500 });
ScrollReveal().reveal('.imageSkills', { delay: 500 });
ScrollReveal().reveal('.imageSkillsw', { delay: 500 });

ScrollReveal().reveal('.imageSkills1', { delay: 500 });
ScrollReveal().reveal('.imageSkills2', { delay: 700 });

ScrollReveal().reveal('#Cv', { delay: 500 });
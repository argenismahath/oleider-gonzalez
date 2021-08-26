window.addEventListener('resize', function (event) {
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;
    console.log(newWidth);
    if (newWidth < 751) {
    }
    else {
        
    }
    

});

// menudesplegablecell
let MenuPhoneDisplay =document.getElementById('icoMenu');
MenuPhoneDisplay.addEventListener('click', navMenu);

// animacionea

var tl = gsap.timeline();
window.onscroll = function () {
    var y = window.scrollY;
    console.log(y);
    gsap.to(".icon-cog", { duration: "1.5", rotate: y });
};

// Animation

ScrollReveal().reveal('#aboutMe', { delay: 500 });
ScrollReveal().reveal('#about2', { delay: 700 })
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


document.getElementById("DownloadCv").addEventListener("click", lenguaje);


function lenguaje() {
    let lan = document.documentElement.lang;
    let a = document.getElementById('DownloadCv');
    if (lan == 'es') {
        a.href = "cv/cv_oleider_2021-es.pdf";
    } else {
        a.href = "cv/cv_oleider_2021 - english.pdf";
    }
}
// arrowmenu

document.getElementById("circlenavmenu").addEventListener("click", navMenu);

var backgnav = document.getElementById('circlenavmenu');

function navMenu() {

    let menu = document.getElementById('DisplayMenu');


    let togle = menu.classList.toggle('navArrowMenuDisplay');


    if (togle == true) {
        menu.style.display = 'block';
        backgnav.style.backgroundColor = 'rgba(20, 30, 87, 0.669)';


    } else {
        menu.style.display = 'none';
        backgnav.style.backgroundColor = 'rgba(43, 58, 140, 0.669)';
    }

}
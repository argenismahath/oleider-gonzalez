
let newWidth = window.innerWidth;
let newHeight = window.innerHeight;

let backgroundsize=document.body.style.backgroundSize = newWidth + 'px, ' + newHeight + 'px';;

window.addEventListener('resize', function (event) {
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;
    this.document.body.style.backgroundSize = newWidth + 'px ', newHeight + 'px';
    console.log(newWidth);
});


// menudesplegablecell
let MenuPhoneDisplay = document.getElementById('icoMenu');
MenuPhoneDisplay.addEventListener('click', navMenu);

// animacionea

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


document.getElementById("contacts").addEventListener("click", lenguaje);

function lenguaje() {
    console.log('hola');
    let lan = document.documentElement.lang;
    let a = document.getElementById('DownloadCv');
    if (lan == 'es') {
       let pdf= window.location.href="cv/cv_oleider_2022.pdf";
        download(pdf, "cv_oleider_2022.pdf");
    } else {
        let pdf= window.location.href="cv/cv_oleider_2021 - english.pdf";
        download(pdf, "cv_oleider_2022.pdf");
    }
}
// arrowmenu

document.getElementById("circlenavmenu").addEventListener("click", navMenu);

var backgnav = document.getElementById('circlenavmenu');

function navMenu() {
    let menu = document.getElementById('DisplayMenu');

    //Check if browser is Firefox 
    if (navigator.userAgent.search("Firefox") >= 0) {
        // insert conditional Firefox Code here
        menu.style.backgroundColor='rgba(26, 49, 77, 0.8)';
    }



    let togle = menu.classList.toggle('navArrowMenuDisplay');


    if (togle == true) {
        menu.style.display = 'block';
        // backgnav.style.backgroundColor = 'rgba(20, 30, 87, 0.669)';


    } else {
        menu.style.display = 'none';
        // backgnav.style.backgroundColor = 'rgba(43, 58, 140, 0.669)';
    }

}
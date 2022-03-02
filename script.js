// mensaje de renovacion de pagina

alert('ME DISCULPUS CON LOS PEQUEÑOS ERRORES EN MI PORTAFOLIO, ACTUALMENTE ESTAMOS TRABAJANDO EN ELLO. AGRADECEMOS TU COMPRENCION')

let newWidth = screen.width;
let newHeight = window.innerHeight;


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


// document.getElementById("contacts").addEventListener("click", lenguaje);

// function lenguaje() {

//     let lan = document.documentElement.lang;
//     prompt(lan)

//     if (lan == 'es') {
//        let pdf= window.location.href="cv/cv_oleider_2022.pdf";
//         download(pdf, "cv_oleider_2022.pdf");
//     } else if (lan == 'en') {
//         let pdf_en= window.location.href="cv/cv_oleider_2021_EN.pdf";
//         download(pdf_en, "cv_oleider_20222.pdf");
//     }
// }
// arrowmenu

document.getElementById("circlenavmenu").addEventListener("click", navMenu);

var backgnav = document.getElementById('circlenavmenu');
let menu = document.getElementById('DisplayMenu');

counter=false;
function navMenu() {

    if (newWidth >= 750) {
        
            //Check if browser is Firefox 
            if (navigator.userAgent.search("Firefox") >= 0) {
                // insert conditional Firefox Code here
                menu.style.backgroundColor='rgba(26, 49, 77, 0.8)';
            }
        
        
        
            menu.classList.toggle('navArrowMenuDisplay');
        
        
            if (togle == true) {
                menu.style.display = 'block';
                // backgnav.style.backgroundColor = 'rgba(20, 30, 87, 0.669)';
        
        
            } else {
                menu.style.display = 'none';
                // backgnav.style.backgroundColor = 'rgba(43, 58, 140, 0.669)';
            }
        }else{


            menu.classList.add('navArrowMenuDisplay');

            if (counter == false) {
                menu.style.transform='translateX(-100%)';
                counter=true;
               
            }
            else{
                menu.style.transform='translateX(100%)';
                counter=false;

            }
        }

}
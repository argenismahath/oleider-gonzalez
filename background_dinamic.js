// get all elements by tagname "span"
let border_get=document.getElementsByTagName('span');

// this function make al border dinamic, when the interval call it
function border() {
    border_get[1].style.left='-120%';
    border_get[1].style.left='120%';
    border_get[1].style.transition='1s';
    // --------------------------------------------
    // second border

    border_get[2].style.top='-120%';
    border_get[2].style.top='120%';
    border_get[2].style.transition='0.6s';
    border_get[2].style.transitionDelay='0.4s';
    // --------------------------------------------
    // third border
    border_get[3].style.right='-120%';
    border_get[3].style.right='120%';
    border_get[3].style.transition='1.3s';
    border_get[3].style.transitionDelay='0.6s';

    // --------------------------------------------
    // fourth border
    border_get[4].style.bottom='-120%';
    border_get[4].style.bottom='120%';
    border_get[4].style.transition='0.7s';
    border_get[4].style.transitionDelay='1.4s';

    // return all Element to star value
    setTimeout(() => {

        // firts border
        border_get[1].style.left='-120%';
        border_get[1].style.transition='0s';
        
        // ------------------------------
        // second border
        border_get[2].style.top='-120%';
        border_get[2].style.transition='0s';

        // ------------------------------
        // third border
        border_get[3].style.right='-120%';
        border_get[3].style.transition='0s';

        // ------------------------------
        // fourth border
        border_get[4].style.bottom='-150%';
        border_get[4].style.transition='0s';


    }, 2020);

}


// call funrtion border every 2.7 second
setInterval(() => {
    border();
}, 2050);
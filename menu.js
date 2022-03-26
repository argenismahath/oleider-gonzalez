// make dropdown men dinamic
//
//
let menu_mobile = document.querySelector('.mobile');
let lista_menu_mobile = document.querySelectorAll('.header-menu nav ul li');
let menu_display = document.querySelector('.header-menu');

let counter_click = false;

// make a listener to menu
menu_mobile.addEventListener('click', () => {
    console.log(counter_click);
    // if menu is not active
    if (counter_click == false) {
        for (let i = 0; i < lista_menu_mobile.length; i++) {
            lista_menu_mobile[i].style.display = 'block';
        }
        // add active class
        menu_display.style.display = 'flex';
        menu_display.classList.add('header-menu-open');
        // change counter to true
        counter_click = true;
    } else {
        // remove active class
        menu_display.style.display = 'none';
        for (let i = 0; i < lista_menu_mobile.length; i++) {
            lista_menu_mobile[i].style.display = 'none';
        }
        counter_click = false;

        menu_display.classList.remove('header-menu-open');
    }
});

// set listener to menu_display
menu_display.addEventListener('click', (e) => {
    if(e.target){
        // remove active class
        menu_display.style.display = 'none';
        for (let i = 0; i < lista_menu_mobile.length; i++) {
            lista_menu_mobile[i].style.display = 'none';
        }
        counter_click = false;

        menu_display.classList.remove('header-menu-open');
    }
});



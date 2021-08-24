let link1=document.getElementById("about");
let link2=document.getElementById("project");
let icoMenu=document.getElementById("icoMenu");
let h1=document.getElementById('h1');

window.addEventListener('resize', function(event){
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight; 
    console.log(newWidth);

    if (newWidth<751) {
        
    }
    else{
    
    }
});


// animacionea

var tl = gsap.timeline();
window.onscroll = function() {
    var y = window.scrollY;
    console.log(y);
    gsap.to(".icon-cog",{duration:"1.5", rotate:y});

};


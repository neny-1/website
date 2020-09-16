
/* start deopdown menu 
let dropdown =document.querySelectorAll('.dropdown-toggle');
let dropdowanMenu=document.querySelectorAll('.dropdown-menu');
/* for top-menu dropdown-menu
dropdown[0].onclick =function(){
    dropdowanMenu[0].classList.toggle('slide-down');
}
/* for category dropdown-menu 
dropdown[1].onclick =function(){
    dropdowanMenu[1].classList.toggle('slide-down');
}

/* start clothes-dropdown hover 
clothesItem = document.querySelector('.clothes-item');
clohesMenu = document.querySelector('.clothes-dropdown');
clothesItem.onmouseenter=function(){
    clohesMenu.style.display="block";
}
clothesItem.onmouseleave=function(){
    clohesMenu.style.display="none";
}
/* start  Coat rack  menu 
coatReckItem = document.querySelector('.coat-reck');
coatReckMenu = document.querySelector('.coat-reck-dropdown');
coatReckItem.onmouseenter=function(){
    coatReckMenu.style.display="block";
}
coatReckItem.onmouseleave=function(){
    coatReckMenu.style.display="none";
}
*/
function neny(){
    console.log('hi');
}
neny();
var bodyWidth = document.querySelector('body'),
    smallWidth = 1080+'px',
    largWidth = 1440+'px',
    fullWidth = 100+'%';

    if(window.innerWidth>=1080){
        // you can change width from here
        bodyWidth.style.width=fullWidth;
    }



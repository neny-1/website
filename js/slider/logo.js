/* start logo slider */
const 	logoContainer =document.querySelector(".logo-slbody .convoy");
var	logoNextBtn = document.querySelector('.logo-slbody .next'),
	logoPrevBut = document.querySelector('.logo-slbody .prev'),
	logoAllBox=logoContainer.children,//get all box content inside logoContainer

	logoMargin=15, 				//logoMargin for each box it is const
	logoContainerWidth=logoContainer.offsetWidth+logoMargin,//width of logoContainer
	logoItems=0, 				//logoItems in each screen
	logoJumpSlideWidth=0, 		//width to jump in next slider
	logototalItems=0, 			//total box or logoItems in all carousel
	logoCurrentSlide=1,  		//for dots control
	logoAllSlides = 1, 			// how many slides in each screen
	logototalItemsWidth=0,
	logoItemWidth =0,
	logoDragTime,				//transition logoTime for drage or change slide 
	logoDragTimePC=0.6,	
	logoDragTimeMobile=0.6,
	logoStartX,
	logoEndX,
	logoNewX,
	logoIsDown = false,
	logoScrollLeft,
	logoTime=500,
	logoAutoPlay ='on', 		// put animation = 'off' to stop logoTime slider animation content setup per slide
	logoStartAnimation=0, 		//for start animation position 
	logoEndAnimation=0;   		// end animation and start other loop

responsive=[
{breakPoint:{width:0,item:4}}, //if width greater than 0 (1 item will show) 
{breakPoint:{width:600,item:7}}, //if width greater than 600 (2  item will show) 
{breakPoint:{width:1000,item:10}} //if width greater than 1000 (3 item will show) 
]

function mediaquery(){
for(let i=0; i<responsive.length;i++){
if(window.innerWidth>responsive[i].breakPoint.width){
logoItems=responsive[i].breakPoint.item;
}
}
start();
}

function start(){
for(let i=0;i<logoAllBox.length;i++){
// width and logoMargin setup of logoItems
logoAllBox[i].style.width=(logoContainerWidth/logoItems)-logoMargin+ "px";
logoAllBox[i].style.marginLeft=logoMargin+ "px";
logototalItemsWidth+=logoContainerWidth/logoItems;
logototalItems++;
logoItemWidth=logoContainerWidth/logoItems
}
// carousel-logoItems width set up
logoContainer.style.width=logototalItemsWidth + "px";
logoAllBox.item(0).style.marginLeft=0;
// slides controls number set up
logoAllSlides=Math.ceil(logototalItems);

// set logoTime drage for mobile and pc 
if(logoContainerWidth<700){
logoDragTime = logoDragTimeMobile;
}else{
logoDragTime = logoDragTimePC;
}

}/*___________end start function________________*/

/***call functions***/ 
window.onload=mediaquery();

/*for auto play*/
animation(logoAutoPlay);
hideBtn(logoAutoPlay);

//whan click on next button
logoNextBtn.addEventListener('click',()=>{
nextLogo();
});
//whan click on prev button
logoPrevBut.addEventListener('click',()=>{
prevLogo();
});

/*__ for keyborad drage__*/
function keyborad(){
window.addEventListener('keydown',(e)=>{
if(e.keyCode=="39"){//click right arrow
nextLogo();
}  
if(e.keyCode=="37"){//click left arrow
prevLogo();
}

});

}/*___________________________________end keyborad_______________________________*/

/*__ for pc drage__*/
function PcDrag(){
logoContainer.addEventListener('mousedown',(e)=>{
logoIsDown=true;
logoStartX = e.pageX-logoContainer.offsetLeft;
});

logoContainer.addEventListener('mouseleave',()=>{
logoIsDown=false;
});

logoContainer.addEventListener('mouseup',()=>{
logoIsDown=false;
});

logoContainer.addEventListener('mousemove',(e)=>{
if (!logoIsDown) return;
e.preventDefault();
logoNewX=e.pageX-logoContainer.offsetLeft;
logoEndX=logoNewX-logoStartX;
logoContainer.style.cursor='grabbing';
//next slider
if(logoEndX <0 ){
nextLogo();
logoIsDown=false;//do one transform and stop
}
if(logoEndX>0){
prevLogo();
logoIsDown=false;//do one transform and stop
}
})
};/*____________________end pc drag function__________________*/

/*** for  Mobile Drag  ***/
function MobileDrag() {
// for drage
logoContainer.addEventListener('touchstart',(e)=>{
logoIsDown=true;
logoStartX =e.touches[0].pageX-logoContainer.offsetLeft; //-logoContainer.offsetLeft;
});

logoContainer.addEventListener('touchend',()=>{
logoIsDown=false;
});

logoContainer.addEventListener('touchcansel',()=>{
logoIsDown=false;
});

logoContainer.addEventListener('touchmove',(e)=>{
if (!logoIsDown) return;
e.preventDefault();
logoNewX=e.touches[0].pageX-logoContainer.offsetLeft;
logoEndX=logoNewX-logoStartX;
logoContainer.style.cursor='grabbing';
//next slider
if(logoEndX <0 ){
nextLogo();
logoIsDown=false;//do one transform and stop
}
if(logoEndX>0){
prevLogo();
logoIsDown=false;//do one transform and stop
}
});

}/*_____________________________end MobileDrag function___________________________________*/

function nextLogo(){
//if last slider
if(logoJumpSlideWidth >= logoItemWidth*(logoAllSlides-logoItems-1) ){
	
	}
if(logoJumpSlideWidth >= logoItemWidth*(logoAllSlides-logoItems) ){
logoContainer.style.transform ='none';
logoContainer.style.transition = 'transform 0.0001s ease-in-out';
logoContainer.style.transform ='translateX(' +-logoJumpSlideWidth +'px)';
//normal next
}else {
logoJumpSlideWidth+=logoItemWidth;
logoContainer.style.transition = 'transform '+logoDragTime+'s ease-in-out';
logoContainer.style.transform ='translateX(' +-logoJumpSlideWidth +'px)';
logoCurrentSlide++;

}
}/*____________________________________end nextLogo function____________________________*/

function prevLogo(){
if(logoJumpSlideWidth <=logoItemWidth){
	
}
if(logoJumpSlideWidth <=0){
//if first slider
logoContainer.style.transform= 'none';
logoContainer.style.transition = 'transform 0.0001s ease-in-out';
// normal prev
}else {
logoJumpSlideWidth-=logoItemWidth;
logoContainer.style.transition = 'transform '+logoDragTime+'s ease-in-out';
logoContainer.style.transform ='translateX(' +-logoJumpSlideWidth +'px)';

}
}/*______________________________end prevLogo function___________________________________*/

//set logoTime to slider whan transition end auto play slider  
function animation(Status){
console.log('Status = '+Status);
if (Status ==='on'){ //whan auto play is on 
setTimeout('nextLogo()',logoTime);

logoContainer.addEventListener('transitionend',() =>{
	if(logoStartAnimation<=logoAllSlides-logoItems ){//11-5 = 6 
		setTimeout('nextLogo()',logoTime);
		logoEndAnimation++;
		logoStartAnimation--;
		
	}
	if(logoEndAnimation>=logoAllSlides-logoItems){
		setTimeout('prevLogo()',logoTime);
		logoStartAnimation=logoAllSlides-logoItems+1;//11-5+1=6
		logoEndAnimation++;
	}
	if(logoEndAnimation==(logoAllSlides-logoItems)*2+1){
		logoStartAnimation=logoAllSlides-logoItems;
		logoEndAnimation=-1;
	}
});
}else if(logoAutoPlay==='off'){ //when auto play is of work in normal slider
PcDrag();
MobileDrag();
keyborad();
}
}
/* function to hide buttpns whene auto play is work */
function hideBtn(Status){
	if (Status ==='on'){
		logoPrevBut.classList.add('hidebtn');
		logoNextBtn.classList.add('hidebtn');
	}
}

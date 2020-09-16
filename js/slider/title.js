/* start title slider */
const 	titleContainer =document.querySelector(".title-slbody .convoy");
var	titleNextBtn = document.querySelector('.title-slbody .next'),
	titlePrevBut = document.querySelector('.title-slbody .prev'),
	titleAllBox=titleContainer.children,//get all box content inside titleContainer

	titleMargin=15, 				//titleMargin for each box it is const
	titleContainerWidth=titleContainer.offsetWidth+titleMargin,//width of titleContainer
	titleItems=0, 				//titleItems in each screen
	titleJumpSlideWidth=0, 		//width to jump in next slider
	titletotalItems=0, 			//total box or titleItems in all carousel
	titleCurrentSlide=1,  		//for dots control
	titleAllSlides = 1, 			// how many slides in each screen
	titletotalItemsWidth=0,
	titleItemWidth =0,
	titleDragTime,				//transition titleTime for drage or change slide 
	titleDragTimePC=1,	
	titleDragTimeMobile=0.8,
	titleStartX,
	titleEndX,
	titleNewX,
	titleIsDown = false,
	titleScrollLeft,
	titleTime=1500,
	titleAutoPlay ='off', 		// put animation = 'off' to stop titleTime slider animation content setup per slide
	titleStartAnimation=0, 		//for start animation position 
	titleEndAnimation=0;   		// end animation and start other loop

responsive=[
{breakPoint:{width:0,item:1}}, //if width greater than 0 (1 item will show) 
{breakPoint:{width:600,item:2}}, //if width greater than 600 (2  item will show) 
{breakPoint:{width:1000,item:5}} //if width greater than 1000 (3 item will show) 
]

function mediaquery(){
for(let i=0; i<responsive.length;i++){
if(window.innerWidth>responsive[i].breakPoint.width){
titleItems=responsive[i].breakPoint.item;
}
}
start();
}

function start(){
for(let i=0;i<titleAllBox.length;i++){
// width and titleMargin setup of titleItems
titleAllBox[i].style.width=(titleContainerWidth/titleItems)-titleMargin+ "px";
titleAllBox[i].style.marginLeft=titleMargin+ "px";
titletotalItemsWidth+=titleContainerWidth/titleItems;
titletotalItems++;
titleItemWidth=titleContainerWidth/titleItems
}
// carousel-titleItems width set up
titleContainer.style.width=titletotalItemsWidth + "px";
titleAllBox.item(0).style.marginLeft=0;
// slides controls number set up
titleAllSlides=Math.ceil(titletotalItems);

// set titleTime drage for mobile and pc 
if(titleContainerWidth<700){
titleDragTime = titleDragTimeMobile;
}else{
titleDragTime = titleDragTimePC;
}

}/*___________end start function________________*/

/***call functions***/ 
window.onload=mediaquery();

/*for auto play*/
animation(titleAutoPlay);
hideBtn(titleAutoPlay);

//whan click on next button
titleNextBtn.addEventListener('click',()=>{
nexttitle();
});
//whan click on prev button
titlePrevBut.addEventListener('click',()=>{
prevtitle();
});

/*__ for keyborad drage__*/
function keyborad(){
window.addEventListener('keydown',(e)=>{
if(e.keyCode=="39"){//click right arrow
nexttitle();
}  
if(e.keyCode=="37"){//click left arrow
prevtitle();
}

});

}/*___________________________________end keyborad_______________________________*/

/*__ for pc drage__*/
function PcDrag(){
titleContainer.addEventListener('mousedown',(e)=>{
titleIsDown=true;
titleStartX = e.pageX-titleContainer.offsetLeft;
});

titleContainer.addEventListener('mouseleave',()=>{
titleIsDown=false;
});

titleContainer.addEventListener('mouseup',()=>{
titleIsDown=false;
});

titleContainer.addEventListener('mousemove',(e)=>{
if (!titleIsDown) return;
e.preventDefault();
titleNewX=e.pageX-titleContainer.offsetLeft;
titleEndX=titleNewX-titleStartX;
titleContainer.style.cursor='grabbing';
//next slider
if(titleEndX <0 ){
nexttitle();
titleIsDown=false;//do one transform and stop
}
if(titleEndX>0){
prevtitle();
titleIsDown=false;//do one transform and stop
}
})
};/*____________________end pc drag function__________________*/

/*** for  Mobile Drag  ***/
function MobileDrag() {
// for drage
titleContainer.addEventListener('touchstart',(e)=>{
titleIsDown=true;
titleStartX =e.touches[0].pageX-titleContainer.offsetLeft; //-titleContainer.offsetLeft;
});

titleContainer.addEventListener('touchend',()=>{
titleIsDown=false;
});

titleContainer.addEventListener('touchcansel',()=>{
titleIsDown=false;
});

titleContainer.addEventListener('touchmove',(e)=>{
if (!titleIsDown) return;
e.preventDefault();
titleNewX=e.touches[0].pageX-titleContainer.offsetLeft;
titleEndX=titleNewX-titleStartX;
titleContainer.style.cursor='grabbing';
//next slider
if(titleEndX <0 ){
nexttitle();
titleIsDown=false;//do one transform and stop
}
if(titleEndX>0){
prevtitle();
titleIsDown=false;//do one transform and stop
}
});

}/*_____________________________end MobileDrag function___________________________________*/

function nexttitle(){
//if last slider
if(titleJumpSlideWidth >= titleItemWidth*(titleAllSlides-titleItems-1) ){
	}
if(titleJumpSlideWidth >= titleItemWidth*(titleAllSlides-titleItems) ){
titleContainer.style.transform ='none';
titleContainer.style.transition = 'transform 0.0001s ease-in-out';
titleContainer.style.transform ='translateX(' +-titleJumpSlideWidth +'px)';
//normal next
}else {
titleJumpSlideWidth+=titleItemWidth;
titleContainer.style.transition = 'transform '+titleDragTime+'s ease-in-out';
titleContainer.style.transform ='translateX(' +-titleJumpSlideWidth +'px)';
titleCurrentSlide++;
}
}/*____________________________________end nexttitle function____________________________*/

function prevtitle(){
if(titleJumpSlideWidth <=titleItemWidth){
}
if(titleJumpSlideWidth <=0){
//if first slider
titleContainer.style.transform= 'none';
titleContainer.style.transition = 'transform 0.0001s ease-in-out';
// normal prev
}else {
titleJumpSlideWidth-=titleItemWidth;
titleContainer.style.transition = 'transform '+titleDragTime+'s ease-in-out';
titleContainer.style.transform ='translateX(' +-titleJumpSlideWidth +'px)';
}
}/*______________________________end prevtitle function___________________________________*/

//set titleTime to slider whan transition end auto play slider  
function animation(Status){
console.log('Status = '+Status);
if (Status ==='on'){ //whan auto play is on 
setTimeout('nexttitle()',titleTime);

titleContainer.addEventListener('transitionend',() =>{
	if(titleStartAnimation<=titleAllSlides-titleItems ){//11-5 = 6 
		setTimeout('nexttitle()',titleTime);
		titleEndAnimation++;
		titleStartAnimation--;
		
	}
	if(titleEndAnimation>=titleAllSlides-titleItems){
		setTimeout('prevtitle()',titleTime);
		titleStartAnimation=titleAllSlides-titleItems+1;//11-5+1=6
		titleEndAnimation++;
	}
	if(titleEndAnimation==(titleAllSlides-titleItems)*2+1){
		titleStartAnimation=titleAllSlides-titleItems;
		titleEndAnimation=-1;
	}
});
}else if(titleAutoPlay==='off'){ //when auto play is of work in normal slider
PcDrag();
MobileDrag();
keyborad();
}
}
/* function to hide buttpns whene auto play is work */
function hideBtn(Status){
	if (Status ==='on'){
		titlePrevBut.classList.add('hidebtn');
		titleNextBtn.classList.add('hidebtn');
	}
}

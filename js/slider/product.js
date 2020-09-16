const productContainer=document.querySelector(".product-slbody .convoy");
var	productNextBtn = document.querySelector('.product-slbody .next'),
	productPrevBtn = document.querySelector('.product-slbody .prev'),
	productAllBox=productContainer.children,//get all box content inside productContainer

	productMargin=15, 				//productMargin for each box it is const
	productContainerWidth=productContainer.offsetWidth+productMargin,//width of productContainer
	productItems=0, 				//productItems in each screen
	pjumpSlideWidth=0, 		//width to jump in next slider
	totalproductItems=0, 			//total box or productItems in all carousel
	productCurrentSlide=1,  		//for dots control
	productAllSlides = 1, 			// how many slides in each screen
	productTotalitemsWidth=0,
	productItemWidth =0,
	productDragTime,				//transition productTime for drage or change slide 
	productDragTimePC=1.2,	
	productDragTimeMobile=0.8,
	productStartXme,
	productEndX,
	productNewX,
	productIsDown = false,
	productScrollLeft,
	productTime=1500,
	productAutoPlay ='off', 		// put animation = 'off' to stop productTime slider animation content setup per slide
	productStartAnimation=0, 		//for start animation position 
	productEndAnimation=0;   		// end animation and start other loop

responsive=[
{breakPoint:{width:0,item:1}}, //if width greater than 0 (1 item will show) 
{breakPoint:{width:600,item:1}}, //if width greater than 600 (2  item will show) 
{breakPoint:{width:1000,item:1}} //if width greater than 1000 (3 item will show) 
]

function mediaquery(){
for(let i=0; i<responsive.length;i++){
if(window.innerWidth>responsive[i].breakPoint.width){
productItems=responsive[i].breakPoint.item;
}
}
start();
}

function start(){
for(let i=0;i<productAllBox.length;i++){
// width and productMargin setup of productItems
productAllBox[i].style.width=(productContainerWidth/productItems)-productMargin + "px";
productAllBox[i].style.marginLeft=productMargin+ "px";
productTotalitemsWidth+=productContainerWidth/productItems;
totalproductItems++;
productItemWidth=productContainerWidth/productItems
}
// carousel-productItems width set up
productContainer.style.width=productTotalitemsWidth + "px";
productAllBox.item(0).style.marginLeft=0;
// slides controls number set up
productAllSlides=Math.ceil(totalproductItems);

// set productTime drage for mobile and pc 
if(productContainerWidth<700){
productDragTime = productDragTimeMobile;
}else{
productDragTime = productDragTimePC;
}

}/*___________end start function________________*/

/***call functions***/ 
window.onload=mediaquery();

/*for auto play*/
animation(productAutoPlay);
hideBtn(productAutoPlay);

//whan click on next button
productNextBtn.addEventListener('click',()=>{
nextProduct();
});
//whan click on prev button
productPrevBtn.addEventListener('click',()=>{
prevProduct();
});

/*__ for keyborad drage__*/
function keyborad(){
window.addEventListener('keydown',(e)=>{
if(e.keyCode=="39"){//click right arrow
nextProduct();
}  
if(e.keyCode=="37"){//click left arrow
prevProduct();
}

});

}/*___________________________________end keyborad_______________________________*/

/*__ for pc drage__*/
function PcDrag(){
productContainer.addEventListener('mousedown',(e)=>{
productIsDown=true;
productStartXme = e.pageX-productContainer.offsetLeft;
});

productContainer.addEventListener('mouseleave',()=>{
productIsDown=false;
});

productContainer.addEventListener('mouseup',()=>{
productIsDown=false;
});

productContainer.addEventListener('mousemove',(e)=>{
if (!productIsDown) return;
e.preventDefault();
productNewX=e.pageX-productContainer.offsetLeft;
productEndX=productNewX-productStartXme;
productContainer.style.cursor='grabbing';
//next slider
if(productEndX <0 ){
nextProduct();
productIsDown=false;//do one transform and stop
}
if(productEndX>0){
prevProduct();
productIsDown=false;//do one transform and stop
}
})
};/*____________________end pc drag function__________________*/

/*** for  Mobile Drag  ***/
function MobileDrag() {
// for drage
productContainer.addEventListener('touchstart',(e)=>{
productIsDown=true;
productStartXme =e.touches[0].pageX-productContainer.offsetLeft; //-productContainer.offsetLeft;
});

productContainer.addEventListener('touchend',()=>{
productIsDown=false;
});

productContainer.addEventListener('touchcansel',()=>{
productIsDown=false;
});

productContainer.addEventListener('touchmove',(e)=>{
if (!productIsDown) return;
e.preventDefault();
productNewX=e.touches[0].pageX-productContainer.offsetLeft;
productEndX=productNewX-productStartXme;
productContainer.style.cursor='grabbing';
//next slider
if(productEndX <0 ){
nextProduct();
productIsDown=false;//do one transform and stop
}
if(productEndX>0){
prevProduct();
productIsDown=false;//do one transform and stop
}
});

}/*_____________________________end MobileDrag function___________________________________*/

function nextProduct(){
//if last slider
if(pjumpSlideWidth >= productItemWidth*(productAllSlides-productItems-1) ){
	}
if(pjumpSlideWidth >= productItemWidth*(productAllSlides-productItems) ){
productContainer.style.transform ='none';
productContainer.style.transition = 'transform 0.0001s ease-in-out';
productContainer.style.transform ='translateX(' +-pjumpSlideWidth +'px)';
//normal next
}else {
pjumpSlideWidth+=productItemWidth;
productContainer.style.transition = 'transform '+productDragTime+'s ease-in-out';
productContainer.style.transform ='translateX(' +-pjumpSlideWidth +'px)';
productCurrentSlide++;
}
}/*____________________________________end nextProduct function____________________________*/

function prevProduct(){
if(pjumpSlideWidth <=productItemWidth){
}
if(pjumpSlideWidth <=0){
//if first slider
productContainer.style.transform= 'none';
productContainer.style.transition = 'transform 0.0001s ease-in-out';
// normal prev
}else {
pjumpSlideWidth-=productItemWidth;
productContainer.style.transition = 'transform '+productDragTime+'s ease-in-out';
productContainer.style.transform ='translateX(' +-pjumpSlideWidth +'px)';
}
}/*______________________________end prevProduct function___________________________________*/

//set productTime to slider whan transition end auto play slider  
function animation(Status){
console.log('Status = '+Status);
if (Status ==='on'){ //whan auto play is on 
setTimeout('nextProduct()',productTime);

productContainer.addEventListener('transitionend',() =>{
	if(productStartAnimation<=productAllSlides-productItems ){//11-5 = 6 
		setTimeout('nextProduct()',productTime);
		productEndAnimation++;
		productStartAnimation--;
		
	}
	if(productEndAnimation>=productAllSlides-productItems){
		setTimeout('prevProduct()',productTime);
		productStartAnimation=productAllSlides-productItems+1;//11-5+1=6
		productEndAnimation++;
	}
	if(productEndAnimation==(productAllSlides-productItems)*2+1){
		productStartAnimation=productAllSlides-productItems;
		productEndAnimation=-1;
	}
});
}else if(productAutoPlay==='off'){ //when auto play is of work in normal slider
PcDrag();
MobileDrag();
keyborad();
}
}
/* function to hide buttpns whene auto play is work */
function hideBtn(Status){
	if (Status ==='on'){
		productPrevBtn.classList.add('hidebtn');
		productNextBtn.classList.add('hidebtn');
	}
}

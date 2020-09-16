var smImg=Array.from(document.querySelectorAll('.pc-details .sm-img img') );
var lgImg=Array.from(document.querySelectorAll('.pc-details .lg-img img') );

for(var i=0;i<smImg.length;i++){
smImg[i].setAttribute('img-number',i+1);//set img-number attr to sm img
smImg[i].onmouseenter=function(){ //on mouse enter
var showImg=this.getAttribute('img-number');
removeActive();
lgImg[showImg].classList.add('active');
}

smImg[i].onmouseleave=function(){	//on mouse leave
removeActive()
addActiveDefault()
}
}
//remove active class from all img
function removeActive(){
for(var i=0;i<lgImg.length;i++){
lgImg[i].classList.remove('active');
}
}
//add active class to default img
function addActiveDefault(){
lgImg[0].classList.add('active');
}
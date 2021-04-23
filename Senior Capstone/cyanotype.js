var index=1;
slideshow(index);

//movement in slide Show
function move(n){
  slideshow(index +=n );
}

//thumbnail images
function current(n){
  slideshow(index = n);
}

//slide Show
function slideshow(n){
  var i;
  var slides= document.getElementsByClassName("slides");
  var d= document.getElementsByClassName("demo");
  if (n>slides.length){index=1;}
  if(n<1){index= slides.length; }
  for(i=0; i<slides.length; i++){
    slides[i].style.display="none";
  }
  for(i=0; i<d.length; ){
    d[i].className=d[i].className.replace("active","");
  }
  slides[index-1].style.display="block";
  d[index-1].className+= "active";
}

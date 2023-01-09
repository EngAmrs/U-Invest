document.getElementsByTagName('ul')[0].style.display="none";

function toggle(){
    
    if(document.getElementsByTagName('ul')[0].style.display == 'none')
        document.getElementsByTagName('ul')[0].style.display="block";
    else
        document.getElementsByTagName('ul')[0].style.display="none";

}

let slideIndex = 1;
slideShow(slideIndex);

function plusSlides(n) {
    slideShow(slideIndex += n);
  }

function slideShow(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";

}

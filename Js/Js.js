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



//Stocks page

const stocks_cards = document.getElementById("Hot-stocks").getElementsByClassName("container")[0];
const iframe_stock = document.getElementById("Hot-stocks").getElementsByTagName("iframe")[0];
const exit_frame = document.getElementsByClassName("exit_frame")[0];

const cards1 = function (event){
  getcords = event.target.closest('.cards').getAttribute("value")
  //Going in stock iframe
    if(getcords === "card-1"){
    iframe_stock.setAttribute("src", "../Stocks frames/Stocks - 1.html");
    } else if (getcords === "card-2"){
      iframe_stock.setAttribute("src", "../Stocks frames/Stocks - 2.html");
    }
    else if (getcords === "card-3"){
      iframe_stock.setAttribute("src", "../Stocks frames/Stocks - 4.html");
    }
    else if (getcords === "card-4"){
      iframe_stock.setAttribute("src", "../Stocks frames/Stocks - 3.html");
    }

    iframe_stock.style.display = "block";
    document.getElementById("Hot-stocks").getElementsByClassName("container")[0].style.display = "none";
    exit_frame.style.display = "block";

    //Exit Func
    const exit_fr = function (){
      document.getElementById("Hot-stocks").getElementsByClassName("container")[0].style.display = "";
      exit_frame.style.display = "none";
      iframe_stock.removeAttribute("src");
      iframe_stock.style.display = "none";

  }

  exit_frame.addEventListener("click", exit_fr);

}

stocks_cards.addEventListener("click", cards1)

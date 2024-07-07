function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
//   --------------Home-------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// --------------------------about-------------------------------

let user_info=document.querySelector("#user_info")
let user_data=document.querySelector("#user")
let links=document.querySelector("#link")

if (localStorage.getItem("username")){
  links.remove()
  user_info.style.display="flex"
  user_data.innerHTML=localStorage.getItem("username")
}
let logoutbtn=document.querySelector("#logout")
logoutbtn.addEventListener("click" , function(){
  localStorage.clear();
  setTimeout(()=>{
    window.location="login.html";
  },1500)
})
// ------------------------------------------------



















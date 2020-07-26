let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");

menu.addEventListener("click", ()=>{
  if(nav.style.display === "flex"){
    menu.classList.toggle("open");
    nav.style.display = "none"
  }
  
  else{
    menu.classList.toggle("open")
    nav.style.display = "flex";
    gsap.from(".odd", {duration:1, x:"-100%", duration: 0.3})
    gsap.from(".even", {duration:1, x:"100%", duration: 0.3})
    // gsap.from("nav", {duration:1, y:"-100%", duration: 0.3})
  }

})





let navLinks = document.querySelectorAll(".nav-links");



// navLinks.forEach((a, index)=>{
   

//  if (a.classList.contains("odd"))


// })
// console.log(1)
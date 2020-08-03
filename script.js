let phoneNav = document.querySelector(".phone-nav");
let nav = document.querySelector("nav");

phoneNav.addEventListener("click", function(e){
    e.preventDefault();
    if (nav.style.display === "block"){
        nav.style.display = "none";
    }
    else{
        nav.style.display = "block"
    }
})




let simpleBtn = document.querySelector(".simple");
let speedyBtn = document.querySelector(".speedy");
let easyBtn = document.querySelector(".easy")

let tabOne = document.querySelector(".one");
let tabTwo = document.querySelector(".two");
let tabThree = document.querySelector(".three");

simpleBtn.addEventListener("click", function(e){
    e.preventDefault();
    simpleBtn.style.textDecoration = "underline";
    speedyBtn.style.textDecoration = "none";
    easyBtn.style.textDecoration = "none";
    tabOne.style.display = "flex";
    tabTwo.style.display = "none";
    tabThree.style.display = "none";
})

speedyBtn.addEventListener("click", function(e){
    e.preventDefault();
    speedyBtn.style.textDecoration = "underline";
    simpleBtn.style.textDecoration = "none";
    easyBtn.style.textDecoration = "none";
    tabTwo.style.display = "flex";
    tabOne.style.display = "none";
    tabThree.style.display = "none";
})

easyBtn.addEventListener("click", function(e){
    e.preventDefault();
    easyBtn.style.textDecoration = "underline";
    simpleBtn.style.textDecoration = "none";
    speedyBtn.style.textDecoration = "none";
    tabThree.style.display = "flex";
    tabOne.style.display = "none";
    tabTwo.style.display = "none";
})

let dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach(function(a){
    a.addEventListener("click",function(e){
        e.preventDefault();
        if(e.target.parentNode.classList.contains("dropdown-Link")){
            console.log("true")
            for (let b of a.children){
                if (b.classList.contains("dropdown-content")){
                    if(b.style.display === "block"){
                        b.style.display = "none"
                    }

                    else{b.style.display = "block"}
                }
            }
                /*if (b.classList.contains("dropdown-content")){
                    b.style.display = "block"
                }*/
            
        }
        else{
            console.log("false")
        }
    })       
})

let timeline = gsap.timeline({defaults:{duration:1}})
timeline
.from("header", {y:"-100%"})
.from(".bookmark-logo", {opacity:0},"<")
.from("nav", {opacity:0},"<")
.from("main", {x:"-100%"},"<")
.from(".features", {x:"100%"},"<")
.from(".tabs", {x:"-100%"},"<")
.from(".extension", {x:"100%"},"<")
.from(".questions-container", {x:"-100%"},"<")
.from("footer", {y:"100%"},"<")

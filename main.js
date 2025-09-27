// menu apperance
let button = document.querySelector(".icon i");
let menu = document.querySelector(".icon ul");
button.addEventListener('click', () => {
    menu.classList.toggle("manuApperance")
})
menu.onmouseleave = () => {
        menu.classList.remove("manuApperance")
    }
    // chang background
let text = document.querySelector("#Home .text");
let features = document.querySelector(".features");
let images = document.querySelectorAll(".features div img");
let featuresText = document.querySelector(".features div:last-child");
let activeDot = document.querySelectorAll("#Home .dots div");
//active background
let i=2
setInterval(dotsColor,(3000))
function dotsColor() {
    activeDot.forEach(e => {
        e.classList.remove("activeDot")
    })
    if (i > 2) i = 0
    else if (i < 0) i = 2;
    activeDot[i].classList.add("activeDot")
    i++
}
// main text animation
window.onloadstart = textAnimation()

function textAnimation() {
    text.style.left = text.dataset.left;
    text.style.top = text.dataset.top;
    text.style.width = text.dataset.width
}
///////////////////////////make counter for project numbers
let projects_num=document.querySelector('.statics .projects-num span');
let certificates_num=document.querySelector('.statics .certificates-num span');
// //  // // // // // // //services animation
let head = document.querySelector("#Home .mainHead");
let boxes = document.querySelectorAll("#Services .services>div");
let statics = document.querySelectorAll(".statics span");
///// // // /// // // // skills animation
let rates = document.querySelectorAll(".skills div div div");
window.onscroll = function() {
    let homeHeight = document.querySelector("#Home").offsetHeight;
    let servicesHeight = document.querySelector("#Services").offsetHeight;
    let aboutHeight = document.querySelector("#About").offsetHeight;
    let featuresHeight = features.offsetHeight;
    let projectsHeight = document.querySelector(".previousWork").offsetHeight;
    //>>>>main head animation
    if (this.pageYOffset > this.innerHeight - 85) {
        head.classList.add("changeColor");
        //services animation
        boxes.forEach(e => {
            e.classList.add("scale");
        })
    } else {
        head.classList.remove("changeColor");

    }
    //features animation
    if (this.pageYOffset > homeHeight + servicesHeight) {
        images[0].classList.add("firstImage");
        images[1].classList.add("seconedImage");
        featuresText.classList.add("opacity");
    }
    //projcts counter animation
    if (this.pageYOffset > homeHeight + servicesHeight + featuresHeight + projectsHeight+250){
        if(projects_num.textContent=="0"){
            for(let i=0;i<9;i++){
                setTimeout(()=>{
                    projects_num.textContent=i
                    if(i<4)
                        certificates_num.textContent=i
                },i*200)
            }
            
        }
    }
    //skills animation
    if (this.pageYOffset > homeHeight + servicesHeight + featuresHeight + projectsHeight + aboutHeight - 240) {
        rates.forEach(e => {
            e.style.width = e.dataset.width;
        })
    }
}

//projects apperance
let projects = document.querySelectorAll(" .work div");
let buttons = document.querySelectorAll(" .previousWork ul li");
buttons[0].onclick = () => {
    projects.forEach(e => {
        if(e.classList.contains('layout')||e.classList.contains('download-app'))
            return
        e.style.display = "block";
    })
}
buttons[1].onclick = () => {
    projects[4].style.display = "none";
    projects[5].style.display = "none";
    projects[2].style.display = "none";
    projects[0].style.display = "block";
    projects[1].style.display = "block";
}
buttons[2].onclick = () => {
        projects[0].style.display = "none";
        projects[1].style.display = "none";
        projects[2].style.display = "block";
        projects[3].style.display = "block";
        projects[5].style.display = "none";
        projects[4].style.display = "block";
    
    }
    buttons[3].onclick = () => {
        projects[0].style.display = "none";
        projects[1].style.display = "none";
        projects[2].style.display = "none";
        projects[3].style.display = "none";
        projects[5].style.display = "block";
        projects[4].style.display = "none";
    
    }
    ////////////pop up message 
    let download_app=document.querySelector('.download-app')
    let layout=document.querySelector('.layout')
    let bo_chat=document.querySelector('.bo-chat')
    bo_chat.addEventListener('click',()=>{
        download_app.classList.add('display-download-app')
        layout.classList.add('display-layout')
    })
    layout.addEventListener('click',()=>{
        download_app.classList.remove('display-download-app')
        layout.classList.remove('display-layout')
    })
    ////target blank
let portfolio = document.querySelectorAll("section a");
let social = document.querySelectorAll("footer a");

function blank(list) {
    list.forEach(e => {
        e.setAttribute("target", "blank")
    })
}
blank(portfolio);
blank(social);



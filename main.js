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
let arrow = document.querySelectorAll("#Home .arrow div");
let i = 1;
let text = document.querySelector("#Home .text");
let features = document.querySelector(".features");
let images = document.querySelectorAll(".features div img");
let featuresText = document.querySelector(".features div:last-child");
//left arrow
arrow[0].addEventListener("click", () => {
        let leftBackground = document.querySelector(".leftBackground");
        let currentBackground = document.querySelector(".currentBackground");
        let rightBackground = document.querySelector(".rightBackground");
        leftBackground.classList.add("currentBackground");
        leftBackground.classList.remove("leftBackground");
        currentBackground.classList.add("rightBackground");
        currentBackground.classList.remove("currentBackground");
        rightBackground.classList.add("leftBackground");
        rightBackground.classList.remove("rightBackground");
        i--;
        dotsColor();
        text.classList.add("leftText");
        text.classList.remove("rightText");
        textAnimation()
    })
    //right arrow
arrow[1].addEventListener("click", () => {
    let leftBackground = document.querySelector(".leftBackground");
    let currentBackground = document.querySelector(".currentBackground");
    let rightBackground = document.querySelector(".rightBackground");
    leftBackground.classList.add("rightBackground");
    leftBackground.classList.remove("leftBackground");
    currentBackground.classList.add("leftBackground");
    currentBackground.classList.remove("currentBackground");
    rightBackground.classList.add("currentBackground");
    rightBackground.classList.remove("rightBackground");
    i++;
    dotsColor()
    text.classList.add("rightText")
    text.classList.remove("leftText");
    textAnimation()
})
let activeDot = document.querySelectorAll("#Home .dots div");
//active background
function dotsColor() {
    activeDot.forEach(e => {
        e.classList.remove("activeDot")
    })
    if (i > 2) i = 0
    else if (i < 0) i = 2;
    activeDot[i].classList.add("activeDot")
}
// main text animation
window.onloadstart = textAnimation()

function textAnimation() {
    text.style.left = text.dataset.left;
    text.style.top = text.dataset.top;
    text.style.width = text.dataset.width
}
// // services animation
let head = document.querySelector("#Home .mainHead");
let boxes = document.querySelectorAll("#Services .services>div");
let statics = document.querySelectorAll(".statics span");
/////skills animation
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
    //skills animation
    if (this.pageYOffset > homeHeight + servicesHeight + featuresHeight + projectsHeight + aboutHeight - 240) {
        rates.forEach(e => {
            e.style.width = e.dataset.width;
        })
        console.log("dsdj")
    }
}

//projects apperance
let projects = document.querySelectorAll(" .work div");
let buttons = document.querySelectorAll(" .previousWork ul li");
buttons[0].onclick = () => {
    projects.forEach(e => {
        e.style.display = "block";
    })
}
buttons[1].onclick = () => {
    projects[2].style.display = "none";
    projects[0].style.display = "block";
    projects[1].style.display = "block";
}
buttons[2].onclick = () => {
        projects[0].style.display = "none";
        projects[1].style.display = "none";
        projects[2].style.display = "block";
    }
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
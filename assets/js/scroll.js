const header = document.getElementById("fixed-header");
const mainContainer = document.getElementById("main-container");
const flechaLeft = document.getElementById("flecha-left");
const flechaRight = document.getElementById("flecha-right");
const menuH = document.getElementById("menu-h");
const despliegueH = document.getElementById("despliegue");
const aboutG = document.getElementById("about");
const aboutB = document.getElementById("about-b");
const gridB = document.getElementById("grid-b");
const gridG = document.getElementById("grid-container");
const formB = document.getElementById("contact-b");
const formG = document.getElementById("form-g");

function scrollHeadTop(){
    if(window.scrollY>500){
        header.classList.add("white-back");
    }else if (window.scrollY===0){
        header.classList.remove("white-back");
    }
}

function clicking(){
    if (mainContainer.style.transform==="translateX(-50%)"){
        mainContainer.style.transform="translateX(0%)";
    }else{
        mainContainer.style.transform="translateX(-50%)";
    }
}

let flag = false;
function rendMenu(){
    if (flag){
        despliegueH.style.transform = "scaleY(0)";
    }else{
        despliegueH.style.transform ="scaleY(1)";
    }
    flag=!flag;
}

function offsetAbout(){
    let offAbout = aboutG.offsetTop-50;
    window.scrollTo(0,offAbout);
}

function offsetGrid(){
    let offGrid = gridG.offsetTop-50;
    window.scrollTo(0,offGrid);
}

function offsetContact(){
    let offcontact = formG.offsetTop-70;
    window.scrollTo(0,offcontact);
}

document.addEventListener("scroll", scrollHeadTop);
flechaLeft.addEventListener("click",clicking);
flechaRight.addEventListener("click",clicking);
menuH.onclick = rendMenu;
aboutB.onclick =offsetAbout;
gridB.onclick = offsetGrid;
formB.onclick = offsetContact;
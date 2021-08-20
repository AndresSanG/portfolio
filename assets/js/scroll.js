const header = document.getElementById("fixed-header");
const mainContainer = document.getElementById("main-container");
const flechaLeft = document.getElementById("flecha-left");
const flechaRight = document.getElementById("flecha-right");
const menuH = document.getElementById("menu-h");
const despliegueH = document.getElementById("despliegue");

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

document.addEventListener("scroll", scrollHeadTop);
flechaLeft.addEventListener("click",clicking);
flechaRight.addEventListener("click",clicking);
menuH.onclick = rendMenu;
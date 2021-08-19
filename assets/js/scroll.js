const header = document.getElementById("fixed-header");
const mainContainer = document.getElementById("main-container");
const flechaLeft = document.getElementById("flecha-left");
const flechaRight = document.getElementById("flecha-right");


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
    // mainContainer.style.transform="translateX(-50%)"
    // mainContainer.style.transform="translateX(-50%)"
}
// function clickRight(){
//     if (mainContainer.style.transform===0){
//         mainContainer.style.transform="translateX(-50%)";
//     }else{
//         mainContainer.style.transform="translateX(0%)";
//     }
// }



document.addEventListener("scroll", scrollHeadTop);
flechaLeft.addEventListener("click",clicking)
flechaRight.addEventListener("click",clicking)
const header = document.querySelector("#header");
const header2 = document.querySelector("#header2");
const gnbMenu = document.querySelectorAll("#header .gnb > li");

const headerLogo = document.querySelector("#header .logo img");

for(let i=0; i<gnbMenu.length; i++){
    gnbMenu[i].onmouseenter = function(){
        header2.style.height = "350px";
    }
}

header2.onmouseleave = function(){
    header2.style.height = "0px";
}

window.onscroll = function(){
    let scTop = window.scrollY;

    if(scTop > 0){
        header.classList.add("on");
        headerLogo.setAttribute("src","/img/logo.png");
    } else {
        header.classList.remove("on");
        headerLogo.setAttribute("src","/img/logo_on.png");
    }  
}
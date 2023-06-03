const header = document.querySelector("#header");
const header2 = document.querySelector("#header2");
const gnbMenu = document.querySelectorAll("#header .gnb > li");

for(let i=0; i<gnbMenu.length; i++){
    gnbMenu[i].onmouseenter = function(){
        header2.style.height = "350px";
    }
}

header2.onmouseleave = function(){
    header2.style.height = "0px";
}

// 햄버거메뉴 클릭시로 변경
const hamMenu01 = document.querySelector("#header .hamMenu");
const hamMenu02 = document.querySelector("#header2 .hamMenu");
const hamSideMenu01 = document.querySelector("#header .hamSideMenu");
const hamSideMenu02 = document.querySelector("#header2 .hamSideMenu");
const close01 = document.querySelector("#header .close");
const close02 = document.querySelector("#header2 .close");

hamMenu01.onclick = function(e){
    e.preventDefault();
    hamSideMenu01.style.width = "250px";
    hamSideMenu02.style.width = 0;
}
close01.onclick = function(e){
    e.preventDefault();
    hamSideMenu01.style.width = 0;
}

hamMenu02.onclick = function(e){
    e.preventDefault();
    hamSideMenu01.style.width = 0;
    hamSideMenu02.style.width = "250px";
}
close02.onclick = function(e){
    e.preventDefault();
    hamSideMenu02.style.width = 0;
}

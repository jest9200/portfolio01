const prevInt = document.querySelector(".cont3 .prev");
const nextInt = document.querySelector(".cont3 .next");
const sliderInt = document.querySelector(".cont3 .slider");
const sliderDivs = document.querySelectorAll(".cont3 .slider > div");

let sNum = 0;

prevInt.onclick = function(e){
    e.preventDefault();
    sNum === 0 ? sNum = sliderDivs.length - 1 : sNum--
    sliderInt.style.marginLeft = sNum * -100 + "%";
}

nextInt.onclick = function(e){
    e.preventDefault();
    sNum === sliderDivs.length - 1 ? sNum = 0 : sNum++
    sliderInt.style.marginLeft = sNum * -100 + "%";
}
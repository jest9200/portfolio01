const prevCont6 = document.querySelector("#cont6 .prev");
const nextCont6 = document.querySelector("#cont6 .next");
const sliderCont6 = document.querySelector("#cont6 .slider");

prevCont6.onclick = function(e){
    e.preventDefault();
    sliderCont6.style.marginLeft = 0 + "%";
    prevCont6.style.display = "none";
    nextCont6.style.display = "block";
}

nextCont6.onclick = function(e){
    e.preventDefault();
    sliderCont6.style.marginLeft = -100 + "%";
    nextCont6.style.display = "none";
    prevCont6.style.display = "block";
}


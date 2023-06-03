const texts = document.querySelectorAll("#cont2 .textWrap > div");
const views = document.querySelectorAll("#cont2 .sliderWrap > div");
const prevBtn = document.querySelector("#cont2 .prev");
const nextBtn = document.querySelector("#cont2 .next");
const count = document.querySelector("#cont2 .count > span");
const progressBar = document.querySelector("#cont2 .progressBar");
const pauseBtn = document.querySelector("#cont2 .pause");
const playBtn = document.querySelector("#cont2 .play");

let cont2Idx = 0;

let autoMove = setInterval(function(){
    nextChange();
},5000);

pauseBtn.onclick = function(e){
    e.preventDefault();
    clearInterval(autoMove);
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
}

playBtn.onclick = function(e){
    e.preventDefault();
    autoMove = setInterval(function(){
        nextChange();
    },5000);
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

nextBtn.onclick = function(e){
    e.preventDefault();
    nextChange();
}

prevBtn.onclick = function(e){
    e.preventDefault();
    if(cont2Idx === 0){
        cont2Idx = views.length - 1;
    } else {
        cont2Idx--;
    }
    cont2Change();
}

// 리팩토링
function cont2Change() {
    for(let i=0; i<views.length; i++){
        texts[i].classList.remove("on");
        views[i].classList.remove("on");
    }
    texts[cont2Idx].classList.add("on");
    views[cont2Idx].classList.add("on");
    count.innerText = "0" + (cont2Idx + 1);
    progressBar.style.width = (cont2Idx + 1)/(views.length) * 100 + "%";
}

function nextChange(){
    if(cont2Idx === views.length - 1){
        cont2Idx = 0;
    } else {
        cont2Idx++;
    }
    cont2Change();
}
const cont1Box = document.querySelectorAll("#cont1 .cont1Wrap .box");
const vid = document.querySelectorAll(".vidWrap video");
for(let i=0; i<cont1Box.length; i++){
    cont1Box[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<cont1Box.length; j++){
            cont1Box[j].classList.remove("on");
            vid[j].pause();
        }
        cont1Box[i].classList.add("on");
        vid[i].play();
    }
}

const scrollBox = document.querySelector(".scrollBox");
setInterval(function(){
    scrollBox.classList.toggle("on");
},1200);
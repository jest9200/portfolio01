const containers04 = document.querySelectorAll("#container");
let hash04 = window.location.hash;
const array04 = ["#pbs","#rating","#ecard","#mobileapp","#partnership"];

for(let i=0; i<array04.length; i++){
    if(hash04 === array04[i]){
        for(let j=0; j<array04.length; j++){
            containers04[j].classList.remove("on");
        }
        containers04[i].classList.add("on");
    }
}

const depth2Menus = document.querySelectorAll("#header2 .gnb > li:nth-child(4) .depth2 li");

for(let i=0; i<depth2Menus.length; i++){
    depth2Menus[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<array04.length; j++){
            containers04[j].classList.remove("on");
        }
        containers04[i].classList.add("on");
        window.location.hash = array04[i];
    }
}
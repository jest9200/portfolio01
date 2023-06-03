const cont2Menus = document.querySelectorAll(".cont2 .menus li");
const cont3Wrap = document.querySelectorAll(".cont3 .wrap");

for(let i=0; i<cont2Menus.length; i++){
    cont2Menus[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<cont2Menus.length; j++){
            cont2Menus[j].classList.remove("on");
            cont3Wrap[j].classList.remove("on");
        }
        cont2Menus[i].classList.add("on");
        cont3Wrap[i].classList.add("on");
    }
}

// const containers01 = document.querySelectorAll("#container");
// let hash01 = window.location.hash;
// const array01 = ["#brand","#introduce","#csr"];

// for(let i=0; i<array01.length; i++){
//     if(hash01 === array01[i]){
//         for(let j=0; j<array01.length; j++){
//             containers01[j].classList.remove("on");
//         }
//         containers01[i].classList.add("on");
//     }
// }

// const depth2Menus = document.querySelectorAll("#header2 .gnb > li:nth-child(1) .depth2 li");

// for(let i=0; i<depth2Menus.length; i++){
//     depth2Menus[i].onclick = function(e){
//         e.preventDefault();
//         for(let j=0; j<array01.length; j++){
//             containers01[j].classList.remove("on");
//         }
//         containers01[i].classList.add("on");
//         window.location.hash = array01[i];
//     }
// }

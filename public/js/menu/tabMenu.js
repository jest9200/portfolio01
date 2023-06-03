const containers02 = document.querySelectorAll("#container");
let hashtag02 = window.location.hash;
const array02 = ["#new","#coffee","#beverage","#icecream","#food","#product"];

for(let i=0; i<array02.length; i++){
    if(hashtag02 === array02[i]){
        for(let j=0; j<array02.length; j++){
            containers02[j].classList.remove("on");
        }
        containers02[i].classList.add("on");
    }
}

const depth2Menus = document.querySelectorAll("#header2 .gnb > li:nth-child(2) .depth2 li");

for(let i=0; i<depth2Menus.length; i++){
    depth2Menus[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<array02.length; j++){
            containers02[j].classList.remove("on");
        }
        containers02[i].classList.add("on");
        window.location.hash = array02[i];
    }
}

// 같은페이지에서 탭 눌렀을때 작동
const link1_1 = document.querySelector(".link1_1");
const link1_2 = document.querySelector(".link1_2");
const link1_3 = document.querySelector(".link1_3");
const link1_4 = document.querySelector(".link1_4");
const link1_5 = document.querySelector(".link1_5");
const link1_6 = document.querySelector(".link1_6");
const link1Array = [link1_1,link1_2,link1_3,link1_4,link1_5,link1_6];

for(let i=0; i<link1Array.length; i++){
    link1Array[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<array02.length; j++){
            containers02[j].classList.remove("on");
        }
        containers02[i].classList.add("on");
    }
}

const link2_1 = document.querySelector(".link2_1");
const link2_2 = document.querySelector(".link2_2");
const link2_3 = document.querySelector(".link2_3");
const link2_4 = document.querySelector(".link2_4");
const link2_5 = document.querySelector(".link2_5");
const link2_6 = document.querySelector(".link2_6");
const link2Array = [link2_1,link2_2,link2_3,link2_4,link2_5,link2_6];

for(let i=0; i<link2Array.length; i++){
    link2Array[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<array02.length; j++){
            containers02[j].classList.remove("on");
        }
        containers02[i].classList.add("on");
    }
}

const link3_1 = document.querySelector(".link3_1");
const link3_2 = document.querySelector(".link3_2");
const link3_3 = document.querySelector(".link3_3");
const link3_4 = document.querySelector(".link3_4");
const link3_5 = document.querySelector(".link3_5");
const link3_6 = document.querySelector(".link3_6");
const link3Array = [link3_1,link3_2,link3_3,link3_4,link3_5,link3_6];

for(let i=0; i<link3Array.length; i++){
    link3Array[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<array02.length; j++){
            containers02[j].classList.remove("on");
        }
        containers02[i].classList.add("on");
    }
}

const link4_1 = document.querySelector(".link4_1");
const link4_2 = document.querySelector(".link4_2");
const link4_3 = document.querySelector(".link4_3");
const link4_4 = document.querySelector(".link4_4");
const link4_5 = document.querySelector(".link4_5");
const link4_6 = document.querySelector(".link4_6");
const link4Array = [link4_1,link4_2,link4_3,link4_4,link4_5,link4_6];

for(let i=0; i<link4Array.length; i++){
    link4Array[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<array02.length; j++){
            containers02[j].classList.remove("on");
        }
        containers02[i].classList.add("on");
    }
}

const link5_1 = document.querySelector(".link5_1");
const link5_2 = document.querySelector(".link5_2");
const link5_3 = document.querySelector(".link5_3");
const link5_4 = document.querySelector(".link5_4");
const link5_5 = document.querySelector(".link5_5");
const link5_6 = document.querySelector(".link5_6");
const link5Array = [link5_1,link5_2,link5_3,link5_4,link5_5,link5_6];

for(let i=0; i<link5Array.length; i++){
    link5Array[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<array02.length; j++){
            containers02[j].classList.remove("on");
        }
        containers02[i].classList.add("on");
    }
}

const link6_1 = document.querySelector(".link6_1");
const link6_2 = document.querySelector(".link6_2");
const link6_3 = document.querySelector(".link6_3");
const link6_4 = document.querySelector(".link6_4");
const link6_5 = document.querySelector(".link6_5");
const link6_6 = document.querySelector(".link6_6");
const link6Array = [link6_1,link6_2,link6_3,link6_4,link6_5,link6_6];

for(let i=0; i<link6Array.length; i++){
    link6Array[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<array02.length; j++){
            containers02[j].classList.remove("on");
        }
        containers02[i].classList.add("on");
    }
}
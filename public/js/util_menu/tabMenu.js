const utilMenus = document.querySelectorAll(".cont2 .menus li");
const views = document.querySelectorAll(".cont3 .view");
let hashUtil = window.location.hash;
const arrayUtil = ["#faq","#qna","#recruit","#contactus","#coffeebeans"];

for(let i=0; i<utilMenus.length; i++){
    utilMenus[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<utilMenus.length; j++){
            utilMenus[j].classList.remove("on");
            views[j].classList.remove("on");
        }
        utilMenus[i].classList.add("on");
        views[i].classList.add("on");

        // 주소창 #뒤에 알맞은 주소 붙이기위함
        window.location.hash = arrayUtil[i];
    }
}

for(let i=0; i<arrayUtil.length; i++){
    if(hashUtil === arrayUtil[i]){
        for(let j=0; j<utilMenus.length; j++){
            utilMenus[j].classList.remove("on");
            views[j].classList.remove("on");
        }
        utilMenus[i].classList.add("on");
        views[i].classList.add("on");
    }
}


// 같은페이지에서 같은 탭을 눌렀을때 
// 위의 기능이 작동되지 않아서 새로 만들어봄
const hash01 = document.querySelector(".hash01");
const hash02 = document.querySelector(".hash02");
const hash03 = document.querySelector(".hash03");
const hash04 = document.querySelector(".hash04");
const hash05 = document.querySelector(".hash05");
const hashArray = [hash01,hash02,hash03,hash04,hash05];

for(let i=0; i<hashArray.length; i++){
    hashArray[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<utilMenus.length; j++){
            utilMenus[j].classList.remove("on");
            views[j].classList.remove("on");
        }
        utilMenus[i].classList.add("on");
        views[i].classList.add("on");
    }
}

const hash01_2 = document.querySelector(".hash01_2");
const hash02_2 = document.querySelector(".hash02_2");
const hash03_2 = document.querySelector(".hash03_2");
const hash04_2 = document.querySelector(".hash04_2");
const hash05_2 = document.querySelector(".hash05_2");
const hashArray02 = [hash01_2,hash02_2,hash03_2,hash04_2,hash05_2];
console.log(hashArray02)

for(let i=0; i<hashArray02.length; i++){
    hashArray02[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<utilMenus.length; j++){
            utilMenus[j].classList.remove("on");
            views[j].classList.remove("on");
        }
        utilMenus[i].classList.add("on");
        views[i].classList.add("on");
    }
}


const tabMenuCont5 = document.querySelectorAll("#cont5 .tabMenu > li");
const tabContsCont5 = document.querySelectorAll("#cont5 .tabContents .tabBox");

for(let i=0; i<tabMenuCont5.length; i++){
    tabMenuCont5[i].onclick = function(e){
        e.preventDefault();
        for(let j=0; j<tabMenuCont5.length; j++){
            tabMenuCont5[j].classList.remove("on");
            tabContsCont5[j].classList.remove("on");
        }
        tabMenuCont5[i].classList.add("on");
        tabContsCont5[i].classList.add("on");
    }
}
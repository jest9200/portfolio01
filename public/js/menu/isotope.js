//태그의 속성값 가지고 오기
const prdMenus = document.querySelectorAll(".prdMenus li");
prdMenus.forEach(function(btn,idx){
    btn.onclick = function(event){
        event.preventDefault();
        // 클릭한 메뉴에 있는 데이터값(지금은 클래스이름)을 기준으로 정렬기능 수행
        let data = btn.getAttribute("data-prds");
        iso.arrange({
            filter:data,
            transitionDuration:".5s"
        });

        // 클릭한 메뉴만 클래스 붙이기
        for(let i=0; i<prdMenus.length; i++){
            prdMenus[i].classList.remove("on");
        }
        btn.classList.add("on");
    }
});

//정렬할 자식들을 감싸는 부모부터 선택
var elem = document.querySelector('.prds');

//포지션 값이 적용될 수 있도록 사전 세팅
var iso = new Isotope(elem, {
    // options
    itemSelector: '.all',
    layoutMode: 'fitRows'
});


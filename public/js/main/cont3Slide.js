$(function(){
    const prevCont3 = $("#cont3 .prev");
    const nextCont3 = $("#cont3 .next");
    const slideCont3 = $("#cont3 .carousel");
    // const contexts = $("#cont3 .context");
    // let cont3Idx = 0;

    carouselCont3(prevCont3,nextCont3,slideCont3);

    function carouselCont3(prev,next,move){

        $(prev).on("click",function(e){
            e.preventDefault();
            $(move).animate({"margin-left":"0%"},800,function(){
                $(move).find(".view").eq(-1).prependTo(move);
                $(move).css({"margin-left":"-100%"});
            });
            textPrev();
        });

        $(next).on("click",function(e){
            e.preventDefault();
            $(move).animate({"margin-left":"-200%"},800,function(){
                $(move).find(".view").eq(0).appendTo(move);
                $(move).css({"margin-left":"-100%"});
            });
            textNext();
        });
    }
});

// 제이쿼리 바깥에서 context on붙이는 탭메뉴 함수 선언

const contexts = document.querySelectorAll("#cont3 .context");
let cont3Idx = 1;

function textPrev(){
    if(cont3Idx === 0) {
        cont3Idx = contexts.length - 1;
    } else {
        cont3Idx--;
    }

    for(let i=0; i<contexts.length; i++){
        contexts[i].classList.remove("on");
    }
    contexts[cont3Idx].classList.add("on");
}

function textNext(){
    if(cont3Idx === contexts.length - 1) {
        cont3Idx = 0;
    } else {
        cont3Idx++;
    }

    for(let i=0; i<contexts.length; i++){
        contexts[i].classList.remove("on");
    }
    contexts[cont3Idx].classList.add("on");
}
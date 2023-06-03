$(function () {
    scrollOnlyOne();  
    function scrollOnlyOne() {
        const html = $("html");
        const sideMenu = $(".sideMenu li");
        let page = 1;
        let lastPage = $(".content").length;

        const contsName = [
            { tag: "#cont1", number: 1 },
            { tag: "#cont2", number: 2 },
            { tag: "#cont3", number: 3 },
            { tag: "#cont4", number: 4 },
            { tag: "#cont5", number: 5 },
            { tag: "#cont6", number: 6 }
        ]

        html.animate({ scrollTop: 0 }, 10);

        // sideMenu 클릭시 기능
        sideMenu.on("click", function (e) {
            e.preventDefault();
            let clickIdx = $(this).index();
            let move = $(".content").eq(clickIdx).offset().top;
            page = clickIdx + 1;

            $(this).siblings().removeClass("on");
            $(this).addClass("on");

            // 각 cont 이동시 class붙여서 변화만드는 기능
            $(".content").eq(clickIdx).addClass("on");

            html.animate({ scrollTop: move }, 800);
            headerChange();
            cont3Change();
            cont4Change();
            cont5Change();
            cont6Change();
        });



        $(window).on("wheel", function (e) {
            if (html.is(":animated")) return;
            if (e.originalEvent.deltaY > 0) {
                if (page === lastPage) return;
                page++;
                headerChange();
                cont3Change();
                cont4Change();
                cont5Change();
                cont6Change();

            } else if (e.originalEvent.deltaY < 0) {
                if (page === 1) return;
                page--;
                headerChange();
                cont3Change();
                cont4Change();
                cont5Change();
                cont6Change();
            }

            // sideMenu 클래스 붙이기
            sideMenu.eq(page - 1).siblings().removeClass("on");
            sideMenu.eq(page - 1).addClass("on");

            let posTop = (page - 1) * $(window).height();

            html.animate({ scrollTop: posTop }, 800);

        });

        // header 로고이미지 및 gnb 글씨색 변경
        function headerChange() {
            if (page >= contsName[3].number) {
                $("#header").addClass("on");
                $("#header .logo a img").attr("src", "img/logo_on.png");
            } else {
                $("#header").removeClass("on");
                $("#header .logo a img").attr("src", "img/logo.png");
            }
        }

        function cont3Change() {
            if (page === contsName[2].number) {
                $("#cont3").addClass("on");
            }
        }

        function cont4Change() {
            if (page === contsName[3].number) {
                $("#cont4").addClass("on");
            }
        }

        function cont5Change() {
            if (page === contsName[4].number) {
                $("#cont5").addClass("on");
            }
        }

        function cont6Change() {
            if (page === contsName[5].number) {
                $("#cont6").addClass("on");
            }
        }


        wheelStop();
        function wheelStop() {
            // 마우스휠 스크롤 기능 막아주기
            window.addEventListener("wheel", function (e) {
                e.preventDefault();
            }, { passive: false });

            // 마우스휠 가운데클릭 막아주기
            document.addEventListener("mousedown", (event) => {
                if (event.button === 1) {
                    event.preventDefault();
                }
            })
        }

        // 새로고침시 화면 맨 위로 올리기
        window.onload = function () {
            setTimeout(function () {
                scrollTo(0, 0);
            }, 100)
        }

        // window resizing문제
        $(window).on("resize",function(){
            $("#cont3").find(".slideWrap").css({"transition":"none"});
            $("#cont3").find(".textWrap").css({"transition":"none"});
            $("#cont4").find(".imgBox").css({"transition":"none"});
            $("#cont5").find(".tabWrap").css({"transition":"none"});
            $("#cont6").find(".leftWrap").css({"transition":"none"});
            $("#cont6").find(".rightWrap").css({"transition":"none"});
        })
    }

});
const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = 8080;

app.set("view engine","ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// 로그인 회원가입 위한 설정
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//데이터 베이스 연결작업
let db; //데이터베이스 연결을 위한 변수세팅
MongoClient.connect("mongodb+srv://jest9200:wjdtmdgur92@cluster0.iggxwpy.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    //에러가 발생했을경우 메세지 출력(선택사항)
    if(err) { return console.log(err); }

    //위에서 만든 db변수에 최종연결 ()안에는 mongodb atlas 사이트에서 생성한 데이터베이스 이름
    db = result.db("portfolio01");

    //db연결이 제대로 됬다면 서버실행
    app.listen(port,function(){
        console.log("서버연결 성공");
    });
});

// 로그인 시 검증 처리
passport.use(new LocalStrategy({
    usernameField: "memberid",
    passwordField: "memberpass",
    session: true,
},      //해당 name값은 아래 매개변수에 저장
    function (memberid, memberpass, done) {
        //회원정보 콜렉션에 저장된 아이디랑 입력한 아이디랑 같은지 체크                                 
        db.collection("members").findOne({ memberid: memberid }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            //비밀번호 체크 여기서 user는 db에 저장된 아이디의 비번값
            if (memberpass == user.memberpass) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        });
    }
));

//처음 로그인 했을 시 세션 생성 memberid는 데이터에 베이스에 로그인된 아이디
passport.serializeUser(function (user, done) {
    done(null, user.memberid)
});

//다른 페이지(서브페이지,게시판 페이지 등 로그인 상태를 계속 표기하기 위한 작업)
//로그인이 되있는 상태인지 체크
passport.deserializeUser(function (memberid, done) {
    db.collection('members').findOne({ memberid: memberid }, function (err, result) {
        done(null, result);
    })
});




// main
app.get("/",(req,res)=>{
    res.render("index.ejs",{login:req.user})
})

// aboutus
app.get("/aboutus/brand",(req,res)=>{
    res.render("aboutus_brand.ejs",{login:req.user})
})
app.get("/aboutus/introduce",(req,res)=>{
    res.render("aboutus_introduce.ejs",{login:req.user})
})
app.get("/aboutus/csr",(req,res)=>{
    res.render("aboutus_csr.ejs",{login:req.user})
})

// menu
app.get("/menu/new",(req,res)=>{
    res.render("menu_new.ejs",{login:req.user})
})
app.get("/menu/coffee",(req,res)=>{
    res.render("menu_coffee.ejs",{login:req.user})
})
app.get("/menu/beverage",(req,res)=>{
    res.render("menu_beverage.ejs",{login:req.user})
})
app.get("/menu/icecream",(req,res)=>{
    res.render("menu_icecream.ejs",{login:req.user})
})
app.get("/menu/food",(req,res)=>{
    res.render("menu_food.ejs",{login:req.user})
})
app.get("/menu/product",(req,res)=>{
    res.render("menu_product.ejs",{login:req.user})
})

// store
app.get("/store",(req,res)=>{
    res.render("store.ejs",{login:req.user})
})

// society
app.get("/society/pbs",(req,res)=>{
    res.render("society_pbs.ejs",{login:req.user})
})
app.get("/society/rating",(req,res)=>{
    res.render("society_rating.ejs",{login:req.user})
})
app.get("/society/ecard",(req,res)=>{
    res.render("society_ecard.ejs",{login:req.user})
})
app.get("/society/mobileapp",(req,res)=>{
    res.render("society_mobileapp.ejs",{login:req.user})
})
app.get("/society/partnership",(req,res)=>{
    res.render("society_partnership.ejs",{login:req.user})
})

// whatsnew
app.get("/whatsnew/event",(req,res)=>{
    res.render("whatsnew_event.ejs",{login:req.user})
})

// e-shop
app.get("/e-shop",(req,res)=>{
    res.render("e-shop.ejs",{login:req.user})
})

// util_menu
app.get("/util_menu/qna",(req,res)=>{
    res.render("util_menu_qna.ejs",{login:req.user})
})
app.get("/util_menu/recruit",(req,res)=>{
    res.render("util_menu_recruit.ejs",{login:req.user})
})
app.get("/util_menu/contactus",(req,res)=>{
    res.render("util_menu_contactus.ejs",{login:req.user})
})
app.get("/util_menu/coffeebeans",(req,res)=>{
    res.render("util_menu_coffeebeans.ejs",{login:req.user})
})

// 회원가입
app.get("/join",(req,res)=>{
    res.render("join.ejs",{login:req.user});
});

app.post("/joindb",(req,res)=>{
    db.collection("members").findOne({memberid:req.body.memberid},(err,member)=>{
        if(member){
            res.send("<script> alert('ID가 이미 가입되어 있습니다.'); location.href='/join'; </script>")
        } else {
            db.collection("count").findOne({name:"회원"},(err,result)=>{
                db.collection("members").insertOne({
                    memberno: result.memberCount,
                    membername: req.body.membername,
                    memberbirth: req.body.memberbirth,
                    memberid: req.body.memberid,
                    memberpass: req.body.memberpass,
                    memberphone: req.body.memberphone,
                    memberemail: req.body.memberemail
                },(err)=>{
                    db.collection("count").updateOne({name:"회원"},{$inc:{memberCount:1}},(err)=>{
                        res.send("<script> alert('회원가입이 완료되었습니다.'); location.href='/login' </script>")
                    })
                })
            })
        }
    })
})


// 로그인
app.get("/login",(req,res)=>{
    res.render("login.ejs",{login:req.user});
});

app.post("/logincheck", passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    res.redirect("/"); //로그인 성공시 메인페이지로 이동
})

// 로그인하지않고 notice 들어갔을때 경고창 띄우기
app.get("/needlogin",(req,res)=>{
    res.send("<script>alert('You need to login.'); location.href = '/login'</script>")
})

// 로그아웃
app.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    })
})

// 마이페이지
app.get("/mypage", (req, res) => {
    res.render("mypage.ejs", { login: req.user })
})

// 로그인페이지에서 경고창띄우기위해 axios 사용 
app.post("/user", (req, res) => {
    db.collection("members").findOne({ memberid: req.body.memberid, memberpass: req.body.memberpass }, (err, result) => {
        if (result === null) {
            res.send(result);
        }
    })
});


// 게시판 목록 페이지 (페이징까지)
app.get("/board/list",(req,res)=>{
    db.collection("board").find().toArray((err, total) => {
        // 게시글 전체 갯수값 알아내기
        let totalData = total.length;
        // 웹브라우저 주소창에 몇번 페이징 번호로 접속했는지 체크
        let pageNumber = (req.query.page == null) ? 1 : Number(req.query.page)
        // 게시판에 보여줄 게시글 갯수
        let perPage = 5;
        // 블록당 보여줄 페이징 번호 갯수
        let blockCount = 5;
        // 이전,다음 블록간 이동을 하기위한 현재 페이지 블록 구해보기
        let blockNum = Math.ceil(pageNumber / blockCount);
        // 블록안에 페이지 번호 시작값 알아내기
        let blockStart = ((blockNum - 1) * blockCount) + 1;
        // 블록안에 페이지 번호 끝값 알아내기
        let blockEnd = blockStart + blockCount - 1;

        // 게시글 전체 갯수 토대로 전체페이지 번호가 몇개가 만들어져서 표시되어야하는지
        let totalPaging = Math.ceil(totalData / perPage);

        // 블록(그룹)에서 마지막 페이지번호가 끝번호보다 크다면 페이지의 끝번호를 강제로 고정
        if (blockEnd > totalPaging) {
            blockEnd = totalPaging;
        }

        // 블록(그룹)의 총 갯수값 구하기
        let totalBlock = Math.ceil(totalPaging / blockCount);

        // db에서 3개씩 게시글을 뽑아서 가지고 오기위한 순서값을 정해줌
        let startFrom = (pageNumber - 1) * perPage;

        // db에서 find명령어로 꺼내오는 작업 진행
        db.collection("board").find().sort({ num: -1 }).skip(startFrom).limit(perPage).toArray((err, result) => {
            res.render("brd_list.ejs", {
                data: result, //find로 찾아온 게시글 데이터들 3개 보내줌
                totalPaging: totalPaging, //페이지 번호 총갯수값
                blockStart: blockStart, //블록안에 페이지 시작번호값
                blockEnd: blockEnd, //블록안에 페이지 끝번호값
                blockNum: blockNum, //보고있는 페이지의 블록(그룹)번호
                totalBlock: totalBlock, //블록(그룹)의 총갯수값
                pageNumber: pageNumber, //현재 보고있는 페이지 번호값
                text:"",
                login: req.user //로그인 정보
            })
        })

    })
})

// 게시판 글 작성 페이지
app.get("/board/insert", (req, res) => {
    res.render("brd_insert.ejs", { login: req.user });
})

app.post("/dbinsert",(req,res)=>{
    db.collection("count").findOne({name:"글번호"},(err,countResult)=>{
        db.collection("board").insertOne({
            num: countResult.brdCount,
            title: req.body.title,
            context: req.body.context,
            admintitle:"",
            adminanswer:""
        },(err,result)=>{
            db.collection("count").updateOne({name:"글번호"},{$inc:{brdCount:1}},(err,result)=>{
                res.redirect(`/board/detail/${countResult.brdCount}`)
            })
        })
    })
})

// 게시판 상세 페이지
app.get("/board/detail/:num",(req,res)=>{
    db.collection("board").findOne({num:Number(req.params.num)},(err,result)=>{
        res.render("brd_detail.ejs",{data:result, login:req.user});
    })
})

// 게시글 review 수정페이지 요청
app.get("/board/update/:num", (req, res) => {
    db.collection("board").findOne({ num: Number(req.params.num) }, (err, result) => {
        res.render("brd_update.ejs", { data: result, login: req.user });
    })
})

app.post("/dbupdate",(req,res)=>{
    db.collection("board").updateOne({num:Number(req.body.num)},{$set:{
        title: req.body.title,
        context: req.body.context,
        admintitle:req.body.admintitle,
        adminanswer:req.body.adminanswer

    }},(err,result)=>{
        res.redirect(`/board/detail/${req.body.num}`);
    })
})

// 게시글 review 삭제 요청
app.get("/dbdelete/:num", (req, res) => {
    db.collection("board").deleteOne({ num: Number(req.params.num) }, (err, result) => {
        res.redirect("/board/list")
    })
})

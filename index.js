const express = require("express")
const app = express();

app.set("view engine","ejs")
app.use(express.static('public'));

const port = 3000

//해당 사이트 서버에 접속시 성공일 경우 콘솔창 실행
app.listen(port,()=>{
    console.log("서버가 잘 실행되고 있습니다")
})

// main
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

// aboutus
app.get("/aboutus/brand",(req,res)=>{
    res.render("aboutus_brand.ejs")
})
app.get("/aboutus/introduce",(req,res)=>{
    res.render("aboutus_introduce.ejs")
})
app.get("/aboutus/csr",(req,res)=>{
    res.render("aboutus_csr.ejs")
})

// menu
app.get("/menu/new",(req,res)=>{
    res.render("menu_new.ejs")
})
app.get("/menu/coffee",(req,res)=>{
    res.render("menu_coffee.ejs")
})
app.get("/menu/beverage",(req,res)=>{
    res.render("menu_beverage.ejs")
})
app.get("/menu/icecream",(req,res)=>{
    res.render("menu_icecream.ejs")
})
app.get("/menu/food",(req,res)=>{
    res.render("menu_food.ejs")
})
app.get("/menu/product",(req,res)=>{
    res.render("menu_product.ejs")
})

// store
app.get("/store",(req,res)=>{
    res.render("store.ejs")
})

// society
app.get("/society/pbs",(req,res)=>{
    res.render("society_pbs.ejs")
})
app.get("/society/rating",(req,res)=>{
    res.render("society_rating.ejs")
})
app.get("/society/ecard",(req,res)=>{
    res.render("society_ecard.ejs")
})
app.get("/society/mobileapp",(req,res)=>{
    res.render("society_mobileapp.ejs")
})
app.get("/society/partnership",(req,res)=>{
    res.render("society_partnership.ejs")
})

// whatsnew
app.get("/whatsnew/event",(req,res)=>{
    res.render("whatsnew_event.ejs")
})
app.get("/whatsnew/notice",(req,res)=>{
    res.render("whatsnew_notice.ejs")
})

// e-shop
app.get("/e-shop",(req,res)=>{
    res.render("e-shop.ejs")
})

// util_menu
app.get("/util_menu/faq",(req,res)=>{
    res.render("util_menu_faq.ejs")
})
app.get("/util_menu/qna",(req,res)=>{
    res.render("util_menu_qna.ejs")
})
app.get("/util_menu/recruit",(req,res)=>{
    res.render("util_menu_recruit.ejs")
})
app.get("/util_menu/contactus",(req,res)=>{
    res.render("util_menu_contactus.ejs")
})
app.get("/util_menu/coffeebeans",(req,res)=>{
    res.render("util_menu_coffeebeans.ejs")
})
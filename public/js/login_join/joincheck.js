const join = document.querySelector("#join");

const membername = document.querySelector("#membername");
const memberbirth = document.querySelector("#memberbirth");
const memberid = document.querySelector("#memberid");
const memberpass = document.querySelector("#memberpass");
const memberpasschk = document.querySelector("#memberpasschk");
const memberphone = document.querySelector("#memberphone");
const memberemail = document.querySelector("#memberemail");

const checkInputs = document.querySelectorAll(".privacyWrap input");
const joinBtn = document.querySelector(".joinBtn");

// joinBtn 활성화 여부
for (let i = 0; i < checkInputs.length; i++) {
    checkInputs[i].addEventListener("click", () => {
        if (checkInputs[0].checked && checkInputs[1].checked) {
            joinBtn.disabled = false;
        } else {
            joinBtn.disabled = true;
        }
    })
}

// 회원정보 입력란에 정규표현식 사용
join.addEventListener("submit", (e) => {
    const nameValue = membername.value;
    const birthValue = memberbirth.value;
    const idValue = memberid.value;
    const passValue = memberpass.value;
    const passChkValue = memberpasschk.value;
    const phoneValue = memberphone.value;
    const emailValue = memberemail.value;

    //이름 체크
    const checkName = /^[가-힣]{2,4}$/;
    //생년월일 체크
    const checkBirth = /^(19[\d]{2}|20[\d]{2})[\-](0[1-9]|1[0-2])[\-](0[1-9]|[1-2][0-9]|3[0-1])$/;
    //아이디 체크 -> 영문대소문자,숫자,_ -> 8~12자리
    const checkId = /^[\w]{8,12}$/;
    //비밀번호 체크 -> 영문대소문자,숫자,_,!,$,&,- -> 12~16자리
    const checkPass = /^[\w\!\$\&\-]{12,16}$/;
    //전화번호 체크
    const checkPhone = /^(010)[\-][\d]{4}[\-][\d]{4}$/;
    //이메일 체크
    const checkEmail = /^[\w]+[\@][a-z]{5,7}[\.][a-z]{2,3}$/;

    //이름 체크
    if (checkName.test(nameValue)) {
        membername.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        membername.parentElement.className = "form_control no";
        membername.parentElement.querySelector(".error_msg").innerText = "한글 이름만 입력이 가능합니다."
    }

    //생년월일 체크
    if (checkBirth.test(birthValue)) {
        memberbirth.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberbirth.parentElement.className = "form_control no";
        memberbirth.parentElement.querySelector(".error_msg").innerText = "생년월일 입력이 유효하지 않습니다."
    }

    //아이디 체크
    if (checkId.test(idValue)) {
        memberid.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberid.parentElement.className = "form_control no";
        memberid.parentElement.querySelector(".error_msg").innerText = "8~12개의 영어 단어, 숫자 및 _만 허용됩니다."
    }

    //비밀번호 체크
    if (checkPass.test(passValue)) {
        memberpass.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberpass.parentElement.className = "form_control no";
        memberpass.parentElement.querySelector(".error_msg").innerText = "12~16개의 영단어, 숫자, _,!,$&,-만 입력할 수 있습니다."
    }

    //비밀번호확인 체크 -> 정규표현식을 굳이 돌릴필요 X
    if (passValue === passChkValue) {
        memberpasschk.parentElement.className = "form_control ok";
    } else {
        e.preventDefault(); s
        memberpasschk.parentElement.className = "form_control no";
        memberpasschk.parentElement.querySelector(".error_msg").innerText = "패스워드가 일치하지 않습니다."
    }

    //연락처 체크
    if(checkPhone.test(phoneValue)){
        memberphone.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberphone.parentElement.className = "form_control no";
        memberphone.parentElement.querySelector(".error_msg").innerText = "휴대폰 번호 입력이 유효하지 않습니다."
    }

    //이메일 체크
    if (checkEmail.test(emailValue)) {
        memberemail.parentElement.className = "form_control ok";
    } else {
        e.preventDefault();
        memberemail.parentElement.className = "form_control no";
        memberemail.parentElement.querySelector(".error_msg").innerText = "이메일 주소 입력이 유효하지 않습니다."
    }
})
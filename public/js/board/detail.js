// 삭제버튼 클릭시 확인 문구 등장 기능
const delBtn = document.querySelector(".delete");
delBtn.addEventListener("click", (e) => {

    let result = window.confirm("정말로 삭제하시겠습니까?");

    if (result) {
        alert("삭제가 완료되었습니다.");
        submit();
    } else {
        alert("삭제가 취소되었습니다.");
        e.preventDefault();
    }
})
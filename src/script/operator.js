/*
예약하기 모달 내부 스크립트
*/

// 모달창 인스턴트 생성
var formModal = new SubmitForm.Modal({
    id: "modal" // 모달창 아이디 지정
});

// 모달 창 여는 버튼에 이벤트 걸기
function openModal() {
  formModal.show();
}

// 모달 창 안에 있는 확인 버튼에 이벤트 걸기
$("#confirm_button").click(function() {
    alert("예약이 완료되었습니다");
    formModal.hide(); // 모달창 감추기
});

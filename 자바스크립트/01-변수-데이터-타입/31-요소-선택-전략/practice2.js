// --------------------------------------------------------------------------
// [실습 2] JS 훅을 활용해 요소 선택
// --------------------------------------------------------------------------
// 1. JS 훅을 사용해 요소를 선택합니다.
// 2. `"알림 숨기기"` 버튼을 사용자가 누르면 알림 내용(`notification`)이 감춰지도록 설정합니다.
// --------------------------------------------------------------------------

{
  const practice2 = document.querySelector('[data-practice="2"]')
  const notification = practice2.querySelector('.js-notification')
  const hideButton = practice2.querySelector('.js-hide-button')

  hideButton.addEventListener('click', () => {
    // notification.classList.toggle('hidden')
    notification.classList.add('hidden')
  })
}
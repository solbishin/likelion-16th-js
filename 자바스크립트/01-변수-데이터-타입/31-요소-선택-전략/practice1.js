// --------------------------------------------------------------------------
// [실습 1] 선택자를 활용해 요소 선택
// --------------------------------------------------------------------------
// 1. `id` 속성으로 요소를 선택한 후, 콘솔에 출력합니다.
// 2. `class` 속성으로 요소를 선택한 후, 콘솔에 출력합니다.
// 3. `button` 태그 이름으로 모든 요소를 선택한 후, 콘솔에 출력합니다.
// 4. `data-role` 속성으로 요소를 선택한 후, 콘솔에 출력합니다.
// --------------------------------------------------------------------------

// querySelector
// getElementById ✅
const mainTitle = document.getElementById('main-title')
// console.log(mainTitle)

const practice1 = document.querySelector('[data-practice="1"]')
// console.log(practice1)

const hasClassAttrs = practice1.querySelectorAll('[class]')
// console.log(hasClassAttrs)

let allButtons = practice1.getElementsByTagName('button')
// console.log(allButtons) // HTMLCollection
allButtons = practice1.querySelectorAll('button')
// console.log(allButtons) // NodeList

const confirmButton = practice1.querySelector('[data-role="confirm"]')
// console.log(confirmButton)
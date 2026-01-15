// 문서에서 .practice 요소 찾기 (변수에 참조: 기억하기 위해)
const practice = document.querySelector('.practice')
// console.log(practiceElement)

// 실습 진행을 위한 메서드 이름 변수 작성
let methodName = 'add',
  activeClassName = 'text-indigo-600'

// .practice .item-add 요소 찾기 (기억된 상위 요소를 통해)
const itemAdd = practice.querySelector('.item-add')
// console.log(itemAdd)

// itemAdd 요소(객체)가 활성 클래스 이름을 가지고 있다면?
// 활성 클래스 이름을 제거해야 하니까 methodName 값을 'remove'로 변경
// if (itemAdd.classList.contains(activeClassName)) methodName = 'remove'
// console.log('methodName =', methodName)

// itemAdd.classList[methodName](activeClassName)

// -------------------------------------------------------------------------
// 2. "bg-yellow-100" 클래스를 제거해 노란 배경을 없애보세요! (제거)
// -------------------------------------------------------------------------

const itemRemove = practice.querySelector('.item-remove')
// console.log(itemRemove)

itemRemove.classList.remove('bg-yellow-100')

// --------------------------------------------------------------------------
// 3. 한 번에 글자색, 두께, 배경색을 모두 바꿔보세요! (연쇄 조작)
// --------------------------------------------------------------------------

const itemMultiple = practice.querySelector('.item-multiple')
// console.log(itemMultiple)

// 모두 한 번에 적용
itemMultiple.classList.add(
  'bg-yellow-100',
  'text-green-500',
  'font-semibold'
)

// 배경색
// itemMultiple.classList.add('bg-yellow-100')
// 글자색
// itemMultiple.classList.add('text-green-500')
// 글자 두께
// itemMultiple.classList.add('font-semibold')


// 원하는 기능 만들기
// function replaceElementClasses(targetElement, removeClass, ...addClasses) {
//   targetElement.classList.remove(removeClass)
//   targetElement.classList.add(...addClasses)
// }

// replaceElementClasses(
//   itemReplace,
//   'text-red-500',
//   'text-purple-500', 'font-bold', 'text-lg'
// )
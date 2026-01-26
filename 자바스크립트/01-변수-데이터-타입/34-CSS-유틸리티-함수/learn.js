// --------------------------------------------------------------------------
// 실습: 스타일 제어 유틸리티 함수 작성 (Utilities)
// --------------------------------------------------------------------------

// [실습] getStyle() 함수
// 1. 요소(element)와 CSS 속성 이름(propertyName)을 인자로 받습니다.
// 2. getComputedStyle()을 사용하여 요소의 계산된 스타일 값을 반환하는 로직을 작성하세요.
console.groupCollapsed('getStyle() 함수 작성')

/* 추상화된 기능 구현 */
{// 첫 번째 버전
  function getStyleV1(element, propertyName) {
    const elementStyleSnapshot = getComputedStyle(element)
    const propertyVaue = elementStyleSnapshot.getPropertyValue(propertyName)
    return propertyVaue
  }

  // 두 번째 버전
  function getStyleV2(element, propertyName) {
    if (element === null || element.nodeType !== document.ELEMENT_NODE) {
      console.warn('전달된 element는 문서의 요소가 아닙니다. 확인해보세요.')
      return null
    }

    const elementStyleSnapshot = getComputedStyle(element)

    if (typeof propertyName !== 'string') {
      console.warn('전달된 propertyName은 CSS 속성명을 문자열로 전달해야 합니다.')
      return null
    }

    const propertyVaue = elementStyleSnapshot.getPropertyValue(propertyName)
    return propertyVaue
  }
  const strongElement = document.querySelector('.prose p:first-of-type strong')
  // console.log(getStyle('strongElement', 'font-weight'))
  // console.log(getStyle('strongElement', 'font-size'))
  // console.log(getStyle('strongElement', 'color'))
  // console.log(getStyle('strongElement', 'letter-spacing'))
  // console.log(getStyle('strongElement', 'word-spacing'))
}

/* 리마인드 */
{
  // 대상 요소
  const body = document.body
  const main = body.querySelector('main')
  const lastChild = body.children[body.children.length - 1]

  // 추상화된 기능 없이 로직을 사용한다면?
  const bodyStyleSnapshot = getComputedStyle(body)
  const viewportHeight = bodyStyleSnapshot.getPropertyValue('height')
  console.log(viewportHeight)

  // vs

  console.log(getStyle(body, 'height'))


  const mainStyleSnapshot = getComputedStyle(main)
  const mainWidth = mainStyleSnapshot.getPropertyValue('width')
  console.log(mainWidth)

  // vs

  console.log(getStyle(main, 'width'))


  const lastChildStyleSnapshot = getComputedStyle(lastChild)
  const lastChildFontSize = lastChildStyleSnapshot.getPropertyValue('font-size')
  console.log(lastChildFontSize)

  // vs

  console.log(getStyle(lastChild, 'font-size'))



  // 추상화된 기능을 정의해 사용한다면?
  function getStyle(element, propertyName) {
    const elementStyleSnapshot = getComputedStyle(element)
    const propertyValue = elementStyleSnapshot.getPropertyValue(propertyName)
    return propertyValue
  }


  // const 계산된속성값 = getStyle(요소, 속성이름)
}

console.groupEnd()


// [실습] setStyle() 함수
// 1. 요소, 속성 이름, 스타일 값을 인자로 받습니다.
// 2. 요소의 style 속성을 사용해 값을 설정하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('setStyle() 함수 작성')

// 기능 추상화 없이 로직을 작성한다면?
{
  const body = document.body
  const main = body.querySelector('main')

  body.style.setProperty('background-color', 'gold')
  main.style.setProperty('border', '6px solid currentColor')
  main.style.setProperty('padding', 24 + 'px')

}

// 기능을 추상화해 로직을 재사용한다면?
{
  const body = document.body
  const main = body.querySelector('main')

  // 추상화된 기능 정의
  function setStyle(element, propName, propValue) {
    element.style.setProperty(propName, propValue)
  }

  setStyle(body, 'background-color', 'tan')
  setStyle(main, 'border-width', 2 + 'px')
  setStyle(main, 'padding', 24 * 2 + 'px')
}

// 리마인드 타임(기능 추상화)
{
  // 요소에 헤드라인 스타일을 설정
  const body = document.body
  const heading2 = document.querySelector('h2')

  // body.style.setProperty('background-color', '#101010')
  setStyle(body, 'background-color', '#101010')

  // heading2.style.setProperty('padding', '0.3em 0.6em')
  setStyle(heading2, 'padding', '0.3em 0.6em')

  // heading2.style.setProperty('border', '8px solid currentColor')
  setStyle(heading2, 'border', '8px solid currentColor')

  // heading2.style.setProperty('border-radius', '6px')
  setStyle(heading2, 'border-radius', '6px')

  // heading2.style.setProperty('color', '#ffcb29')
  setStyle(heading2, 'color', '#00cbff')

  // 기능 추상화(복잡한 로직을 안으로 숨겨서 외부에서는 손쉽게 기능 사용
  function setStyle(element, propName, propValue) {
    element.style.setProperty(propName, propValue)
  }
}

// 방어적 프로그래밍 + 메서드 체이닝
{
  setStyle(document.body)
  setStyle(document.body, 'padding')
  setStyle(document.body, 'padding', '30px')

  function setStyle(element, propName, propValue) {
    if (element === null || element.nodeType !== document.ELEMENT_NODE) {
      console.warn('element 인자로 전달된 것은 요소 노드가 아닙니다.')
      return null
    }

    if (!propName || !propValue) {
      console.warn('propName 또는 propValue 인자는 유효한 값 전달이 필요합니다.')
      return null
    }

    element.style.setProperty(propName, propValue)
  }

}

console.groupEnd()


// [실습] css() 함수
// 1. 위에서 작성한 getStyle과 setStyle을 내부에서 활용하세요.
// 2. propertyValue가 있으면 '설정(set)'하고, 없으면 '읽기(get)'를 수행하도록 조건문을 작성하세요.
console.groupCollapsed('css() 함수 작성')

function css(element, propertyName, propertyValue) {
  // 이곳에 코드를 작성하세요.

}

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. getStyle: window.getComputedStyle(element)[propertyName] 활용
// 2. setStyle: element.style[propertyName] = propertyValue return element 활용
// 3. css: 인자(propertyValue)의 존재 여부에 따라 분기 처리 (if/else)
// --------------------------------------------------------------------------
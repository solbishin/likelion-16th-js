// ✍ 변수, 상수 작성 과제

// 각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.

// 1. 영화 제목을 저장할 변수를 선언하고 좋아하는 영화 제목을 할당하세요.
let filmName = '마틸다'

// 2. "빛의 속도(299,792,458 m/s)"를 담을 상수를 선언하세요.
const lightSpeed = 299_792_458

// 3. "이메일 인증 완료 여부"를 확인하는 불리언 타입 변수를 선언하고 적절한 값을 할당하세요.
let isVerified = true

// 4. "상품 재고 수량(예: 47개)"을 담는 변수를 선언하고 숫자 값을 할당하세요.
let productStock = 47

// 5. "회원 포인트(예: 15,800점)"를 담는 변수를 작성하세요.
let customerPoint = 15_800

// 6. API 서버의 "기본 URL(예: https://api.example.com)을 담는 상수를 작성하고 값을 할당하세요.
const defaultURL = 'https://api.example.com'

// 7. 게시글의 "조회수(예: 1,234)"를 담는 변수를 선언하고 값을 할당하세요.
let viewCount = 1234

// 8. "배송 상태('준비중', '배송중', '배송완료' 중 하나)"를 담는 변수를 작성해보세요.
let deliveryStatus = '준비중'

// 9. "쿠폰 사용 가능 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let enableCoupon = true

// 10. "최대 업로드 파일 크기(예: 10MB를 바이트 단위로 10485760)"를 담는 상수를 작성하세요.
const maxUploadFile = 10_485_760

// 11. "사용자 등급 점수(예: 85.5점)"를 담는 변수를 선언하고 소수점이 포함된 값을 할당하세요.
let levelScore = 85.5

// 12. "알림 수신 동의 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let deliverNotification = false


// ✍ 함수 작성 과제

// 1. 환영 메시지 생성
// 회원 등급과 이름을 입력받아 맞춤형 환영 메시지를 출력하는 함수를 작성합니다.

// VIP 회원: "🌟 VIP {이름}님, 특별한 혜택이 준비되어 있습니다!"
// 일반 회원: "안녕하세요, {이름}님! 즐거운 쇼핑 되세요."

// 기능: 회원 등급에 따라 다른 환영 메시지를 문자열로 반환
// 매개변수: 회원 이름, 회원 등급
// 반환값 타입: String
// 비고: 함수 선언으로 작성

// 

function greeting(userName, userGrade) {
  // VIP일 때 문구 출력
  if (userGrade === 'VIP') {
    return '🌟 VIP ' + userName + '님, 특별한 혜택이 준비되어 있습니다!'
  }

  // 일반 (회원) 등급일 때 문구 출력
  else {
    return '안녕하세요, ' + userName + '님! 즐거운 쇼핑 되세요.'
  }
}

// 문구 출력 확인
console.log(greeting('김철수', 'VIP'))
console.log(greeting('김영희', '일반'))

// 2. 배송비 계산

// 주문 금액과 배송 지역을 입력받아 배송비를 계산하는 함수를 작성합니다.

// 배송비 정책 
// 주문 금액이 50,000원 이상 : 무료 배송
// 제주/도서 지역 : 추가 배송비 3,000원
// 배송지역 값 예시 : "서울", "부산", "제주", "도서"
// 일반 지역 : 기본 배송비 3,000원
// 주문 금액이 0원 이하인 경우 : 0 반환
// 배송지역이 빈 문자열인 경우 : 기본 배송비 적용

// 기능: 주문 금액과 지역에 따라 배송비를 계산하여 반환
// 매개변수: 주문 금액, 배송 지역
// 반환값 타입: Number
// 비고: 함수 표현식으로 작성

const totalShippingFee = function (orderAmount, location) {
  // 무료 배송비, 기본 배송비, 추가 배송비 정의
  const freeShippingFee = 0
  const defaultShippingFee = 3000
  const additionalShippingFee = 3000


  // 주문 금액이 0원 이하인 경우
  if (orderAmount <= 0) {
    return 0
  }
  // 배송 지역이 빈 문자열일 때
  else if (location == '') {
    return defaultShippingFee
  }

  // 주문 금액 5만원 이상, 제주, 도서 지방이 아닐 때
  else if (orderAmount >= 50000 && (location !== '제주' && location !== '도서')) {
    return freeShippingFee
  }

  // 주문 금액 5만원 이상, 제주나 도서 지방일 때
  else if (orderAmount >= 50000 && (location == '제주' || location == '도서')) {
    return freeShippingFee + additionalShippingFee
  }

  // 주문 금액 5만원 미만, 제주, 도서 지방이 아닐 때
  else if (orderAmount < 50000 && (location !== '제주' && location !== '도서')) {
    return defaultShippingFee

  }
  // 주문 금액 5만원 미만, 제주나 도서 지방일 때
  else if (orderAmount < 50000 && (location == '제주' || location == '도서')) {
    return defaultShippingFee + additionalShippingFee
  }
}

console.log(totalShippingFee(70000, '제주'))
console.log(totalShippingFee(70000, '서울'))
console.log(totalShippingFee(30000, '제주'))
console.log(totalShippingFee(30000, '서울'))
console.log(totalShippingFee(80000, ''))
console.log(totalShippingFee(0, '서울'))
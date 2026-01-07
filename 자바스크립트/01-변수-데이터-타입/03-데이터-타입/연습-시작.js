// --------------------------------------------------------------------------
// 연습: 다음 코드의 출력 결과를 예측해 주석으로 작성하세요.
// --------------------------------------------------------------------------

console.log(typeof "JavaScript"); // 예측 값 작성: String
console.log(typeof 24); // 예측 값 작성: Number
console.log(typeof true); // 예측 값 작성: Boolean
console.log(typeof undefined); // 예측 값 작성: Undefined
console.log(typeof null); // 예측 값 작성: Null
console.log(typeof Symbol("id")); // 예측 값 작성: symbol
console.log(typeof 123n); // 예측 값 작성: bigInt
console.log(typeof [4, 7, 3]); // 예측 값 작성: Array
console.log(typeof { name: "우인" }); // 예측 값 작성: Object
console.log(typeof function () { }); // 예측 값 작성: Function

// --------------------------------------------------------------------------
// 연습: 각 타입에 맞는 값을 변수에 할당하세요.
// --------------------------------------------------------------------------

// 당신의 이름을 저장하는 문자열 변수 my_name
const my_name = '신솔비'

// 당신의 나이를 저장하는 숫자 변수 my_age
const my_age = 33

// 학생인지 여부를 저장하는 불리언 변수 is_student
const is_student = true

// 아파트 호수가 없음을 나타내는 null 변수 apt_number
const apt_number = null

// 아직 값이 정해지지 않은 변수 future_job
const future_job = undefined

// 좋아하는 과일 3개를 담은 배열 favorite_fruit
const favorite_fruit = ['딸기', '사과', '오렌지']

// 당신의 정보를 담은 객체 my_info (이름, 나이 포함)
const my_info = {
  name: "신솔비",
  age: 33
}

// "안녕하세요"를 출력하는 함수 sayHello
const sayHello = '안녕하세요.'
console.log(sayHello)

// 각 변수의 타입을 확인해보세요.
console.log("my_name의 타입:", typeof my_name);
console.log("my_age의 타입:", typeof my_age);
console.log("is_student의 타입:", typeof is_student);
console.log("apt_number의 타입:", typeof apt_number);
console.log("future_job의 타입:", typeof future_job);
console.log("favorite_fruit의 타입:", typeof favorite_fruit);
console.log("my_info의 타입:", typeof my_info);
console.log("sayHello의 타입:", typeof sayHello);

// --------------------------------------------------------------------------
// 연습: 다음 코드를 실행하고 결과를 예측한 후 확인하세요.
// --------------------------------------------------------------------------

// null의 타입
let user = null;
console.log("user의 타입:", typeof user);
// 질문: null의 타입이 'object'인 이유는 무엇일까요?
// 답: JavaScript 버그 때문에

// 문자 vs 숫자
let score1 = "100";
let score2 = 100;

console.log("score1 =", score1, "score1의 타입:", typeof score1);
console.log("score2 =", score2, "score2의 타입:", typeof score2);
// 질문: 두 변수의 값은 같아 보이지만 타입이 다릅니다. 왜 그럴까요?
// 답: score1은 큰 따옴표로 감싸져 있어 문자열로 처리되었기 때문

// undefined vs null
let user_name;
let user_age = null;

console.log(
  "user_name의 값 =",
  user_name,
  "user_name의 타입:",
  typeof user_name
);
console.log("user_age의 값 =", user_age, "user_age의 타입:", typeof user_age);
// 질문: undefined와 null의 차이는 무엇일까요?
// 답: undefined는 아직 값이 할당되지 않았고 개발자가 의도하지 않았으며, null은 개발자가 의도한 빈값

// 배열과 객체의 타입
const numbers = [1, 2, 3, 4, 5];
const person = { name: "지서현", age: 19 };
const sayHi = function () {
  console.log("안녕!");
};

console.log("numbers의 타입:", typeof numbers);
console.log("person의 타입:", typeof person);
console.log("sayHi의 타입:", typeof sayHi);
// 질문: 배열, 객체, 함수의 typeof 결과를 정리해보세요.
// 배열: array
// 객체: object
// 함수: function
// numbers: array, person: object, sayHi: function

// 타입 변환 실험
const num1 = 10;
const num2 = "10";

console.log("num1 + 5 =", num1 + 5, "num1의 타입:", typeof num1);
console.log("num2 + 5 =", num2 + 5, "num2의 타입:", typeof num2);
// 질문: 결과가 다른 이유는 무엇인가요?
// 답: num1은 숫자이고 num2는 문자이기 때문 

// BigInt vs Number
const big_number = 9007199254740991n;
const normal_number = 100;

console.log("big_number:", big_number, "big_number의 타입:", typeof big_number);
console.log(
  "normal_number:",
  normal_number,
  "normal_number의 타입:",
  typeof normal_number
);
// 질문: BigInt 뒤에 'n'이 붙는 이유는 무엇일까요?
// 답: 숫자가 커서??? 모르겠음...

// Symbol의 고유성
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log("id1:", id1, "id1의 타입:", typeof id1);
console.log("id2:", id2, "id2의 타입:", typeof id2);
console.log("id1.description:", id1.description);
console.log("id2.description:", id2.description);
// 질문: 같은 'id'로 만들었는데 id1과 id2는 같을까요, 다를까요?
// 답: 다름. symbol로 만들었기 때문에.

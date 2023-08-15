// 8월 2일 수요일 타입스크립트 문제입니다.
// 문제출제 레퍼런스: https://learntypescript.dev/02/l4-quiz
  // 1. 아래 메시지 message string 타입이 필요한가요?
function logMessage(message: string) {
    ...
}
    // -> string만 입력 받고 싶을 때로 한정했을 때 필요

  // 2. 타입스크립트에서  message 타입은 무엇으로 유추하나요?
function outputMessage(message) {
    console.log(message);
}
    // -> 매개변수의 타입은 any로 추론합니다. 타입 지정을 해야 오류를 방지할 수 있으므로 타입 지정을 추천합니다.

  // 3. 다음 타입 선언이 필요한가요?
let amount: number = 1000;
    // -> 자동으로 타입 추론이 되기 때문에 굳이 해줄 필요는 없습니다.

  // 4. 타입스크립트에서 Date 타입이 있나요?
    // -> 타입스크립트는 자바스크립트의 상위 집합이므로, 자바스크립트에서 사용할 수 있는 모든 타입과 객체를 타입스크립트에서도 사용할 수 있습니다.
    // -> 따라서 자바스크립트의 Date 객체와 관련 메서드는 타입스크립트에서도 동일하게 사용할 수 있습니다.
    // -> 타입스크립트의 타입 시스템을 이용해 해당 변수나 함수 매개변수의 타입을 Date로 지정할 수 있습니다.

  // 5. 자바스크립트에서 Date 타입이 있나요? -> Date 객체는 존재하지만 자바스크립트의 타입은 기본적으로 원시타입 6개와 참조타입 1개가 전부인 것으로 알고 있습니다.


// 8월 3일 목요일 Date 타입에 대한 문제입니다.
// 코드샌드박스 링크를 열어주세요. 
// https://learntypescript.dev/03/l1-dates

// https://codesandbox.io/s/blank-l4k1q?

  // 1. 아래 코드를 복사붙여 넣기해서 타입을 확인하세요.
  // dateOfBirth 변수의 타입을 확인해보세요.
const dateOfBirth = new Date(1990, 4, 7);
  // -> Date 타입 new로 선언했기 때문에 타입스크립트는 자동으로 Date로 타입 추론합니다.

  // 2. 아래 코드를 복사붙여 넣기해서 타입을 확인하세요. 타입 오류가 나는지 확인해보세요.
console.log(dateOfBirth.getDate());
  // -> 오류 없이 7이 잘 나옴

  // 3. 아래 코드를  복사붙여 넣기해서 타입을 확인하세요.
  // 타입 오류가 난 이유를 찾아보세요.
console.log(dateOfBirth.addDays(2));
  // -> 자바스크립트의 Date 객체에 addDays라는 메서드는 존재하지 않기 때문

  // 4. 아래 코드를  복사붙여 넣기해서 타입을 확인하세요.
  // Date 추가해주세요. (수정)
function calculateRenewal(startDate) {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 30);
  return result;
}
  // -> 오류 없이 잘 나오지만 매개변수의 타입을 지정해줄 필요가 있음
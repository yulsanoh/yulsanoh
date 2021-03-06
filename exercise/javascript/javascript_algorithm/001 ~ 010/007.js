/*
    문제7. 변수명

    다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

    1) age
    2) &age
    3) let
    4) _age
    5) 1age
*/

// 답안

// var &age = 1;
// var 1age = 1;
// 오류가 발생하기에 주석으로 대체함

/*
    - 풀이
    
    1. 변수 명명을 할 때 특수문자는 달러기호($)와 언더바(_)만 들어갈 수 있음
    2. 첫 글자는 숫자가 될 수 없음


    - 여담
    그런데 변수명을 명명할 때 예약어도 사용할 수 없다고 배웠는데 3번 지문이 let이라서 조금 의아스럽긴하다.

    그래서 간단한 테스트를 진행했는데

    1) var let = 1;  // 오류 없음, let을 호출 했을 때 정상적인 값 출력
    2) let let = 1;  // 오류 발생, Uncaught SyntaxError: let is disallowed as a lexically bound name

    var을 사용했을 땐 예약어인 let으로 명명이 가능했다.

    따라서 이번 문제는 var을 기준으로 하면 2, 5번이 되는데 let을 기준으로 하면 2, 3, 5가 되는 것 같다.
*/
/*
    문제24. 대문자로 바꿔주세요!

    문자가 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

    * 입력 : yulsan
    * 출력 : YULSAN
*/

// 답안

var str = prompt();

console.log(str.toUpperCase());

/*
    - 여담
    toLocaleUpperCase도 존재하는데 영어를 포함한 다른 모든 언어를 대문자로 변경해준다고 함
*/
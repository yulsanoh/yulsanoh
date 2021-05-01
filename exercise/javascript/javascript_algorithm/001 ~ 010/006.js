/*
    문제6. False
    
    다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
    앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

    1) NaN
    2) 1
    3) ""
    4) 0
    5) undefined
*/

// 답안
var bool = NaN;  // 1, "", 0, undefined

if(bool) {
    console.log("True");
} else {
    console.log("False");
}

// True는 2번

/*
    - 풀이

    boolean 값으로 0, -0, null, NaN, false, undefined, 빈 문자열("")은 모두 false로 초기화 되며 그 외의 값은 모두 true가 된다.

    false인 케이스만 잘 확인해두자
*/
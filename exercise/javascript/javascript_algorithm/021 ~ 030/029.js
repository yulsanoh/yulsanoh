/*
    문제29. 대문자만 지나가세요.

    알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES 아니면 NO를 출력하는 프로그램을 만들어 주세요.
*/

// 답안
var str = prompt();
var reg = /[A-Z]/;

if(reg.test(str)) {
    console.log("YES");
} else {
    console.log("NO");
}

/*
    - 풀이

    정규표현식을 사용해서 코드를 작성했다. test() 메소드 또한 정규표현식의 메소드
*/
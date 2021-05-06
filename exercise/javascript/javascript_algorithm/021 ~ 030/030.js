/*
    문제30. 문자열 속 문자 찾기

    첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
    그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요.
*/

// 답안
var str = "pineapple is yummy"

console.log(str.indexOf("apple"));

/*
    - 풀이

    String.indexOf("찾을 문자");
    문자열 메소드인 indexOf를 사용했으며 해당 메소드는 문자열의 왼쪽부터 시작하여 찾을 문자와 일치하는
    최초의 문자의 Index를 반환하는 메소드
*/
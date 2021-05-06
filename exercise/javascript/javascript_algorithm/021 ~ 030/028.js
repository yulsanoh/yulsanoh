/*
    문제28. 2-gram

    2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
    예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

    * 입력 : Javascript

    * 출력
    J a
    a v
    v a
    a s
    s c
    c r
    r i
    i p
    p t

    입력으로 문자열이 주어지면 2-gram을 출력하는 프로그램을 작성해 주세요.
*/

// 답안
var str = prompt();
var str_split = str.split("");

for(var i = 1; i < str_split.length; i++) {
    console.log(str_split[i - 1], str_split[i]);
}

/*
    - 여담

    입출력 부분만 봤을때 어떤걸 요구하는지 알 수 없었으나 2-gram과 관련해서 검색을 하다 알게되었다.
*/
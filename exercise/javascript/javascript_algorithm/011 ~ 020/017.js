/*
    문제17. 놀이기구 키 제한

    놀이기구마다 키 제한이 있습니다. 입력으로 키가 주어지면
    키가 150cm가 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.
*/

// 답안

var height = prompt();

if(height <= 0) {
    console.log("오류");
} else if(height > 150) {
    console.log("YES");
} else {
    console.log("NO");
}

/*
    - 여담

    키가 0cm 이하일 순 없으니 오류에 대한 부분도 추가해보았다.
*/
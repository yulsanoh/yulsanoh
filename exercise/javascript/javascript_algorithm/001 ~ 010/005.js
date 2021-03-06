/*
    문제5. for문 계산
    
    다음 코드의 출력 값으로 알맞은 것은?
    var a = 10;
    var b = 2;

    for(var i = 1; i < 5; i += 2) {
        a += i;
    }

    console.log(a + b);
*/

// 답안
var a = 10;
var b = 2;

for(var i = 1; i < 5; i += 2) {
    a += i;
}

console.log(a + b);  // 출력값은 16

/*
    - 풀이

    for(begin; condition; step) {
        body
    }

    for(var i = 1; i < 5; i += 2)는 '변수 i를 1로 초기화 하고(var i = 1) i의 조건을 체크(i < 5)한 후에 내용을 실행하고(a += i) step을 실행하라'와
    같으므로 첫번째 반복은 i값이 1로 초기화 되었고 i < 5의 조건에 부합하기에 a += 1 코드가 실행된다.
    
    따라서 첫번째 반복이 끝나면 a의 값은 11이 되고 step이 실행되면서 i의 값은 3으로 저장된다.

    두번째 반복은 i < 5의 조건에 부합하기에 다시 a += 1 코드가 실행된다. 따라서 두번째 반복이 끝나면 a의 값은 14가 되고 i의 값은 5가 된다.

    세번째 반복은 i < 5의 조건에 부합하지 않기 때문에 반복문이 종료되며 최종적으로 반복문을 통해 변수 a의 값은 14로 저장되어 빠져나오게 된다.

    따라서 a(14) + b(2)는 16


    - 여담

    반복문이 첫 실행일 때 step을 바로 거치고 body의 내용이 실행되는 것인지 헷갈려서 답안을 15라고 생각했는데 그게 아나였다.
    풀이 해설을 적기위해 다시한번 for 반복문의 정의를 살펴보았고 정확하게 알 수 있었다.
*/

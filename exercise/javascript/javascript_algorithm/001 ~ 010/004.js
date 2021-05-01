/*
    문제4. 변수의 타입2

    다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과 연결이 알맞지 않은 것은?
    1) 입력 : a = 1, 출력 : number
    2) 입력 : a = 2.22, 출력 : boolean
    3) 입력 : a = 'p', 출력 : string
    4) 입력 : a = [1, 2, 3], 출력 : object
*/

// 답안
var a = 1;
console.log(typeof(a));

var a = 2.22;
console.log(typeof(a));  // boolean이 아닌 number

var a = 'p';
console.log(typeof(a));

var a = [1, 2, 3];
console.log(typeof(a));

// - 풀이 : 2번은 2.22로 숫자이기 때문에 number이 정답, boolean형은 true, false 두가지 값만 존재하는 자료형
/*
    문제20. 몫과 나머지

    공백으로 구분하여 두 숫자가 주어집니다.
    두번재 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나버지를 공백으로 구분하여 출력하세요.

    * 입력 : 10 2
    * 출력 : 5 0
*/

// 답안
var input = prompt();

var a = Number(input.split(" ")[0]);
var b = Number(input.split(" ")[1]);

console.log(parseInt(a / b), a % b);

/*
    - 풀이

    018.js, 019.js와 동일하게 split 메서드를 사용해서 숫자를 구분해서 변수 a와 b에 할당하고
    할당한 부분을 console.log로 바로 계산해서 출력했다.


    - 여담

    몫을 출력하는 부분에서 parseInt()를 사용하지 않으니 소숫점 뒤까지 출력되어서 변환을 위해 사용했다.
*/
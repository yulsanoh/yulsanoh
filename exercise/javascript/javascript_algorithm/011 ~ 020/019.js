/*
    문제19. 제곱을 구하자

    공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
*/

// 답안
var input = prompt();

var a = Number(input.split(" ")[0]);
var b = Number(input.split(" ")[1]);
var result = 1;

for(var i = 1; i <= b; i++) {
    result *= a;
}

console.log(`${a}의 ${b}승은 ${result}`);

/*
    - 풀이

    우선 a의 b승을 구하기 위해서는 a를 b만큼 반복해서 곱해야하기 때문에 반복문을 사용해야할 것 같았다.
    그래서 반복문을 구성하기로 했는데 반복 횟수나 조건을 고려해봐야했다.

    조건은 'a를 b만큼' 곱해야 하기 때문에 반복 횟수가 b와 동일하면 될 것 같았다.

    그래서 for(var i = 1; i <= b; i++)가 완성되었다.

    그리고 공백으로 구분하는 두 숫자 a와 b라는 말은 한번의 입력창에서 공백을 사이에 두고 두 개의 숫자를 받아서 받아낸 데이터들을 분리해야한다.
    이 부분은 이전 문제였던 018.js를 풀며 배웠던 split 메서드를 이용했다.


    - 여담
    정답을 저장할 result 변수를 선언하고 프로그램을 돌려보던 중 예상치 못하게 오류가 발생했는데
    result값이 계속 0으로 떳다.

    생각해보니 result를 선언할 때 0으로 초기화를 시켰는데 a를 곱하기 위해서 0을 사용한다면 결국 값이 0이 된다는 것을 간과했었다.
*/
/*
    문제33. 거꾸로 출력하기

    한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

    * 입력 : 1 2 3 4 5
    * 출력 : 5 4 3 2 1
    
    * 입력 : 2 4 6 7 8
    * 출력 : 8 7 6 4 2
*/

// 답안
var number = prompt();
var new_number = [];

for(var i = number.split(" ").length - 1; i >= 0; i--) {
    console.log(number.split(" ")[i]);
    new_number.push(number.split(" ")[i]);
}

console.log(new_number.join(" "));

/*
    - 풀이

    숫자를 입력받아서 split을 통해 배열로 변환하고, 변환한 배열을 역순으로 만드는 것 까지는 무난하게 했으나
    역순으로 만든 배열을 문자열로 변환하는 부분을 toString() 메소드로 진행하려 했으나
    toString() 메소드의 문제점은 항상 값과 값 사이에 ,(반점)이 들어가는 것이었다.

    그래서 해결방법을 계속 찾아보다가 알아낸 메소드가 join() 메소드인데
    join("문자")를 사용하면 해당 문자를 중간에 삽입하면서 배열을 나타낼 수 있었다.
*/
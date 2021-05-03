/*
    문제18. 평균 점수

    공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
    단, 소숫점 자리는 모두 버립니다.

    * 입력 : 20 30 40
    * 출력 : 30
*/

var input_grade = prompt();
var grade = input_grade.split(" ");
var average = 0;

for(var i = 0; i < grade.length; i++) {
    average = average + Number(grade[i]);
}

console.log(average)
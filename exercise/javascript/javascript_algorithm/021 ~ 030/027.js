/*
    문제27. 객체 만들기

    첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가
    공백으로 구분되어 주어집니다.

    두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

    * 입력
    Yujin Hyewon
    70 100

    * 출력
    {'Yujin': 70, 'Hyewon': 100}
*/

// 답안
var names = prompt();
var scores = prompt();
var name_obj = names.split(" ");
var score_obj = scores.split(" ");
var obj = {};

for(var i = 0; i < name_obj.length; i++) {
    obj[name_obj[i]] = score_obj[i]
}

console.log(obj);

/*
    객체에 데이터를 삽입할 때 두가지 방법이 존재한다.

    1. obj.key = value
    2. obj[key] = value

    처음에는 1번 방식으로 데이터를 삽입하려 했는데 obj.name_obj[1] = score_obj[1]과 같은 방식이 안되더라

    그래서 2번 방식으로 시도했더니 성공했다.
*/
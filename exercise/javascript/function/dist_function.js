// 함수의 인수에 대한 예제 파일
// function dist는 두 점 사이의 거리를 구하는 함수
function dist(p, q) {
    var dx = q.x - p.x;
    var dy = q.y - p.y;

    return Math.sqrt(dx * dx + dy * dy);
}

var p1 = {x: 1, y: 1};
var p2 = {x: 4, y: 5};
var d = dist(p1, p2);
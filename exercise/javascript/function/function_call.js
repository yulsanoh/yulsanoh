// 값에 의한 호출

function add1(x) {
    return x = x + 1;
}

var a = 3;
var b = add1(a);  // caller

console.log(`a = ${a}, b = ${b}`);

/*
    1. argument로 값이 넘어온다.
    2. 값이 넘어올 때 복사된 값이 넘어온다.
    3. caller(호출하는 녀석)가 인자를 복사해서 넘겨줬으므로,
       호출당하는 함수에서는 인자를 변경해도 기존 데이터는 영향을 받지 않음
*/


// 참조에 의한 호출

function add2(p) {
    p.x = p.x + 1;
    p.y = p.y + 1;

    return p;
}

var a = {x: 3, y: 4};
var b = add2(a);

console.log(a, b);

/*
    1. argument로 reference(값에 대한 참조 주소, 메모리 주소를 담고있는 변수)를 넘겨준다.
    2. reference를 넘기다 보니 reference가 가르키는 값을 복사하지는 않는다.
    3. caller(호출하는 녀석)가 인자를 복사해서 넘기지 않았기에 기존 데이터가 영향을 받게 된다.
*/
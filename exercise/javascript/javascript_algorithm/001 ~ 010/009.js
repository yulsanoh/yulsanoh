/*
    문제9. concat을 활용한 출력 방법
    
    다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

    * 데이터
    var year = '2019';
    var month = '04';
    var day = '26';
    var hour = '11';
    var minute = '34';
    var second = '27';

    var result = // 빈칸을 채워주세요

    console.log(result);

    * 출력
    2019/04/26 11:34:27
*/

// 답안
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);

/*
    - 풀이

    str.concat(string2, string3[, ..., stringN])
    변수로 정의된 문자열도 가능하며 따로 문자열을 타이핑해도 된다.

    
    - 여담

    concat 메서드에 대해서 검색을 해보니 Array.prototype.concat()과 String.prototype.concat()
    두 개가 동시에 검색되었다.

    처음에는 배열 관련된 내용만 보여서 배열을 새로 만들어야 하나 고민했는데 알고보니 문자열에도 존재하는 메서드더라.
    사용법은 매우 간단했다.

    그리고 덧붙히자면 MDN 문서에서는 concat() 메서드보다 할당연산자(+, +=)가 속도가 훨씬 빠르니
    차라리 할당연산자를 쓰란다(...)
*/
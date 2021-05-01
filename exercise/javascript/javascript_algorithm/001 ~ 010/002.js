/*
    문제2. 배열의 내장함수
    
    <pass> 부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

    // 데이터
    var arr = [200, 100, 300];
    // <pass>
    console.log(arr);

    // 출력
    [200, 100, 10000, 300]
*/

// 답안
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);

console.log(arr);

/*
    - 풀이
    
    001.js와 동일하게 splice 메서드를 사용하였으며 다음과 같다.
    obj.splice(index[, deleteCount, elem1, … , elemN])
    
    splice(인덱스 번호, 제거할 요소 갯수, 추가할 요소);
    
    2번 index인 300앞에 10000이라는 값을 추가해야하고 제거할 요소는 없기 때문에 위 답안과 같이 작성함
*/
/*
    문제1. 배열의 삭제
    
    다음 배열에서 400, 500을 삭제하는 코드를 입력하세요.

    var nums = [100, 200, 300, 400, 500];
*/

// 답안
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);

console.log(nums);

/*
    - 풀이

    배열의 삭제를 위해 splice 메서드를 사용하였는데 이번 문제에서는 다음과 같이 사용되었다.

    obj.splice(index[, deleteCount, elem1, … , elemN])
    splice의 첫번째 매개변수는 인덱스 번호이고 두번째는 인덱스 번호로부터 제거하고자 하는 요소의 갯수를 나타낸다.

    따라서
    var nums = [100, 200, 300, 400, 500];
    
    위의 배열 nums에서 400, 500을 삭제하기 위해서는 먼저 삭제할 값의 인덱스를 찾아야 하는데 보통 코딩 언어에서의 인덱스 값은 0부터 시작하므로 0(100), 1(200), 2(300), 3(400), 4(500)
    
    따라서 3번 인덱스가 400이 되고 3번 인덱스로 부터 제거하고자 하는 요소의 갯수는 400, 500으로 2개가 되므로

    nums.splice(3, 2);
*/
/*
    문제10. 별 찍기

    * 입력값 : 5
    * 출력값 :
        *
       ***
      *****
     *******
    *********
*/

// 답안
for(var i = 1; i <= 5; i++) {
    for(var j = 5; j > i; j--) {
        document.write('&nbsp');
    }
    for(var j = 0; j < i; j++) {
        document.write('*');
    }
    for(var j = 1; j < i; j++) {
        document.write('*');
    }
    document.write('<br/>');
}

/*
    - 여담
    
    반복문 내의 같은 라인에서 반복문을 쓸 수 있다는 것을 깨달음
*/
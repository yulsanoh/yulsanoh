/*
    문제22. 배수인지 확인하기

    다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

    1) i / 6 == 0
    2) i % 6 == 0
    3) i & 6 == 0
    4) i | 6 == 0
    5) i // 6 == 0
*/

// 답안 : 2

/*
    - 풀이

    1)의 경우에는 일반적인 나눗셈이 진행되고 나누어진 값이 출력된다.
    2)의 경우에는 나머지 연산인데 나누고 난 후 나머지가 나오게 된다. 근데 나머지가 0이면 배수라는 이야기
    3)의 경우에는 비트연산자이다. (AND 연산)
    4)의 경우에는 비트연산자이다. (OR 연산)
    5)는... 주석인 것 같다.


    - 여담
    배수를 확인하는 방법으로 나머지 연산(%)을 사용한다는 것을 이미 알고있었지만
    1번 보기와 2번 보기를 제외한 나머지들은 자세하게 어떤건지 몰라서 한번씩 다 사용해봤는데
    비트연산자의 경우 아직 제대로 공부해보지 않아서 몰랐었고 5번 보기는 주석이라서 조금 당황했다.
*/
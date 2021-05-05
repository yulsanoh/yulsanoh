/*
    문제26. 행성 문제2

    태양계 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.
    행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
*/

// 답안

var planet = prompt();

if(planet == "수성") {
    console.log(planet.replace("수성", "Mercury"));
} else if (planet == "금성") {
    console.log(planet.replace("금성", "Venus"));
} else if (planet == "지구") {
    console.log(planet.replace("지구", "Earth"));
} else if (planet == "화성") {
    console.log(planet.replace("화성", "Mars"));
} else if (planet == "목성") {
    console.log(planet.replace("목성", "Jupiter"));
} else if (planet == "토성") {
    console.log(planet.replace("토성", "Saturn"));
} else if (planet == "천왕성") {
    console.log(planet.replace("천왕성", "Uranus"));
} else if (planet == "해왕성") {
    console.log(planet.replace("해왕성", "Neptune"));
}

/*
    - 여담

    왠지 정규표현식을 사용하면 이보다 더 짧은 코드를 작성할 수 있을 것 같다.
    하지만 지금 내가 배운 내용을 토대로 짠 코드는 위와 같다.
*/
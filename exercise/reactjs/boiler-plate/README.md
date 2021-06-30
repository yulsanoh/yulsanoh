# Boiler-plate

## 📚 백엔드 부분

---

## Node.js와 Express.js 다운로드

### Node.js가 다운로드 되어 있는지 확인하는 방법

터미널에 `node -v`로 검색해서 확인 가능함. 버전이 뜬다면 다운로드가 되어 있는 것

### 새로운 or 존재하는 npm package 만들기

터미널에 `npm init` 명령어 입력

### 백엔드의 시작점은 index.js 파일

### Express.js 다운로드

터미널에 `npm install express --save` 명령어 입력

- 명령어 마지막에 --save에 대해서
  Express.js를 다운로드 하기 위해서 명령어를 입력하게 되는데 해당 명령어 마지막에 --save를 붙혀주게 되면 package.json 파일 내의 "dependencies" 항목에 자동으로 다운로드 했던 항목이 추가가 된다.

## index.js(백엔드 서버)를 실행하기

`package.json` 파일 내에 `scripts`란에 명령어를 추가하고 사용한다.

```javascript
"scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

그리고 터미널에는 `npm run start` 명령어 입력

## Mongoose

몽구스는 MongoDB를 편하게 쓸 수 있는 Object Modeling Tool이다.
설치하는 방법은 터미널에 `npm install mongoose --save` 입력

## MongoDB Model & Schema

### Model과 Schema

model은 schema를 감싸주는 역할, Schema는 하나하나의 정보들을 지정해둘 수 있는 것

## git

git 저장소에 파일을 업로드할 때, 필요 없는 파일은 업로드를 할 필요가 없을 수 있다. 이 때 사용하는 파일명이 `.gitignore`인데 해당 파일에 폴더나 파일명을 기재하면 해당 폴더와 파일들은 무시하고 업로드를 진행하게 설정하는 것이다.

### SSH(Secure Shell)를 이용해 Git을 Github에 연결하기

1. 구글에 Git SSH 사이트 들어가기 (링크: https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

2. Generating a new SSH key 파트를 순서대로 진행

3. 그 이후 background에서 ssh-agent를 실행한다. (Agent pid 숫자가 출력됨)

4. 그 후 SSH private key를 ssh-agent에 추가한다.

5. 그리고 SSH key를 github에 연결한다.

## Client - Server 통신하는 법

크롬 브라우저를 Client라고 칭하고 해당 클라이언트에서 아이디와 비밀번호를 입력하면 Server에다 보내야하는데 이 때, 서버는 우리가 지금 만들고 있는 boiler-plate이다.

이 때 서버에서 받을 때 필요한 것이 있는데 Body-parser이다.

- Body-parser 설치 방법
  `npm install body-parser --save`

## NODE MON

원래 기존에 만들어진 서버는 코드의 변화를 주고 난 후 서버를 껏다 켜야지 반영이 되는데 NODE MON은 서버를 끄지 않아도 소스의 변화를 감지해서 적용시켜준다.

- NODE MON 설치 방법
  `npm install nodemon --save-dev`

뒤에 -dev를 붙히는 이유는 local에서 할 때만 사용하겠다는 의미이며 package.json 파일 내에서 `devDependencies` 부분에 위치하게 된다.

그리고 기존 시작 파일을 대체해서 NODE MON을 사용하게 될 것이니 package.json 파일의 scripts 항목에 명령어를 추가한다.

`"backend": "nodemon index.js"`

## 비밀 정보를 보호하기

소스 코드를 Git에다 올리면 private-key가 노출될 수 있기 때문에 js 파일로 따로 생성한 후 변수를 통해 접근되게 만들고 .gitignore 명단에 올린다.

## Bcrypt를 이용해서 암호화 하기

POSTMAN을 이용해서 password를 데이터 베이스로 보내면 그대로 전송되기 때문에 보안성이 약해짐. 그래서 보낼 때 비밀번호를 암호화 해서 데이터 베이스에 저장해야 한다.

- Bcrypt 설치 방법
  `npm install bcrypt --save`

salt를 이용해서 비밀번호를 암호화 해야함, 그러기 위해서는 salt를 먼저 생성해야함

## 토큰(Token)

비밀 번호까지 같다면 토큰을 생성해주어야 하는데, 토큰 생성을 위해서 JsonWebToken 라이브러리를 설치하여야한다.

`npm install jsonwebtoken --save`

해당 라이브러리 사이트 주소: https://www.npmjs.com/package/jsonwebtoken

## Cookie-parser

`npm install cookie-parser`

## 인증(Authentication) 기능 만들기

페이지 이동을 할 때 마다 로그인이 되어있는지 유무와 관리자 유무를 체크할 때 사용함

1. Cookie에 저장된 Token을 Server에 가져와서 복호화를 한다.
2. 복호화를 하면 user.\_id가 나오는데 이것을 이용해서 데이터베이스 User Collection에서 유저를 찾은 후 쿠키에서 받아온 token이 유저도 갖고있는지 확인

## 로그아웃 기능 만들기

1. 로그아웃 Route 만들기
2. 로그아웃하려는 유저를 DB에서 찾아서 유저의 토큰을 지워줌

---

## 📚 프론트엔드 부분

---

## ReactJS

ReactJS는 프레임워크가 아니다. 페이스북에서 2013년에 릴리즈된 라이브러리임

특징적인 부분은 컴포넌트(Components)로 이루어져있고 module과 비슷하게 재사용성이 뛰어남

### Real DOM과 Virtual DOM

ReactJS는 Virtual DOM을 사용하며 Real DOM과의 차이점은 아래와 같다.

- Real DOM

  - 만약 10개의 리스트가 있다.

  - 그 중에 한가지의 리스트만 Update 됨

  - 전체 리스트를 다시 Reload 해야함

- Virtual DOM

  - 만약 10개의 리스트가 있다.

  - 그 중에 한가지의 리스트만 Update 됨

  - 바뀐 한가지의 리스트만 DOM에서 Update 해준다.

## ReactJS 시작하기

### Babel

Babel은 최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을 구형 브라우저에서도 사용할 수 있게 변환시켜주는 역할을 한다.

### Webpack

Webpack은 많은 module들을 합쳐서 간단하게 만들어주는 역할을 함.

Webpack이 관리하는 폴더는 src 폴더뿐이며 public 폴더는 관리해주지 않음

그렇기에 JS, CSS 파일들과 이미지 파일 같은 부분은 src 폴더에 넣어주는것이 좋음

### ReactJS 설치하는 방법

`npx create-react-app .`, 끝에 .까지 입력해주어야 함

#### 기존의 설치방법

원래 create-react-app을 할 때, `npm install -g create-react-app` 명령어를 입력해서 했었음

### ReactJS 실행

`npm run start`

server에도 동일하게 구성했듯이 package.json에 정의가 되어있음

### Extensions

익스텐션의 검색창에 `es7`이라고 검색을 하면 `ES7 React/Redux/GraphQL/React-Native snippets`라는 확장팩이 존재하는데

이 확장팩을 깔게되면 `rfce`로 간편하게 기본 구성요소를 불러올 수 있다.

- `rcc`는 클래스 컴포넌트 구성요소를 세팅해줌

### App.js React-Router-Dom

ReactJS에서는 페이지 이동을 할 때 React Router Dom 이라는 것을 사용한다.

설치 명령어는 `npm install react-router-dom --save`

기본 사용법이 작성된 페이지: https://reactrouter.com/web/example/basic

## Axios 설치

`npm install axios --save`

## CORS 이슈와 Proxy 설정

### CORS 이슈(**매우 중요**)

한 출처(도메인, 프로토콜, 포트)에서 다른 출처의 데이터를 주고받는 것을 아무나 어느곳에서든 할 수 있게 된다면 보안적인 이슈가 발생할 수 있음. 그렇기 때문에 웹 애플리케이션은 리소스가 자신의 출처와 다를 때 교차 출처 HTTP 요청을 실행함

### Proxy 설정

CORS 이슈를 해결하는 방법으로는 여러가지가 있지만 해당 강의는 이 중에 Proxy를 사용하는 방법을 택함

먼저 설정을 위해서는 모듈을 다운로드 받아야함

`npm install http-proxy-middleware --save`

## Concurrently

- Concurrently란 여러개의 commands를 동시에 작동 시킬 수 있는 Tool.

`npm install concurrently --save`

## CSS Framework

- CSS Framework를 쓰는 이유?
  기능을 만드는데 더욱 집중하기 위해서

- CSS Framework 종류 for ReactJS
  1. Material UI
  2. React Bootstrap
  3. Semantic UI
  4. Ant Design
  5. Meterialize

해당 강의에서는 4번 항목인 Ant Design을 사용함
(링크: https://ant.design/)

### Ant design 설치 방법

`npm install antd --save`

## Redux

상태 관리 라이브러리

다운 받아야 할 Dependency들

1. redux
2. react-redux
3. redux-promis
4. redux-thunk

한번에 설치하는 방법
`npm install redux react-redux redux-promise redux-thunk --save`

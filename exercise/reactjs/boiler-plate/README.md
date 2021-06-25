# Boiler-plate

## 폴더 및 파일 설명

- index.js : 백엔드 메인 js 파일
- models > User.js : MongoDB의 Model과 Schema

## Node.js와 Express.js 다운로드

---

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

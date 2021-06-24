# Boiler-plate

## 폴더 및 파일 설명

* index.js : 백엔드 메인 js 파일
* models > User.js : MongoDB의 Model과 Schema


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
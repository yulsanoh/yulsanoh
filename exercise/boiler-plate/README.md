# Node.js와 Express.js

## Node.js 설치와 Express.js 설치 및 간단한 사용방법

1. Node.js를 통해 `npm init`을 하게 되면 package.json 파일을 생성할 수 있게 된다.

그리고 index.js 파일을 생성하면 되는데 백엔드 단에서는 index.js를 시작점으로 본다.

2. express.js 설치 방법은 터미널에 `npm install express --save`를 입력한다.

3. package.json 파일에서 `script` 부분에 "start": "node index.js"를 입력하고 터미널에 `npm run start`를 치게 되면 `index.js` 파일이 실행되게 된다.

## MongoDB 클러스터 생성 및 연결

1. MongoDB에 클러스터를 생성하고 해당 클러스터에 CONNECT 버튼을 눌러서 Create a Database User에 ID와 비밀번호를 입력한다. * 꼭 기억해야함

2. 그리고 Choose a connection method를 눌러서 Connect your application을 누른 다음 application code를 복사한다.

3. `npm install mongoose --save`를 터미널에 입력해서 몽구스를 설치한다. 그 후
```javascript
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://yulsanoh:<password>@boilerplate.whhvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",  // 위의 password 란에 mongoDB 비밀번호를 쳐줘야함
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
```
를 index.js에 추가한다. 하단에 중괄호 안에 있는 부분은 안쓰게 되면 에러가 터질 수 있다하니 참고(영상 다시보면서 오류 해결해야함)

4. git에 버전을 올릴때는 node_modules와 라이브러리는 빼고 올림 / 이 부분은 .gitignore 파일에 작성하면 됨
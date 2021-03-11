const express = require("express"); // express 모듈을 가져옴
const app = express(); // 새로운 express app을 만듬
const port = 5000; // 포트는 상관없음, 5000번 포트를 백서버로 둠

const { User } = require("./models/User"); // User 모델 가져옴
const bodyParser = require("body-parser");

const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!~~안녕하세요~ㅋㅋ")); // express 앱의 루트 디렉토리에 Hello World를 출력되게 하는 것

// register router
app.post("/register", (req, res) => {
  // 회원가입을 위한 라우터
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post("./login", (req, res) => {
  // 요청된 이메일을 데이터베이스에 존재하는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "이메일에 해당하는 유저가 없습니다.",
      });
    }
    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      // 비밀번호까지 맞다면 토큰을 생성하기
      user.generateToken((err, user) => {});
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // express app이 5000에 listen을 하면 콘솔이 프린트 됨

const express = require("express"); // express 모듈을 가져옴
const app = express(); // 새로운 express app을 만듬
const port = 5000; // 포트는 상관없음, 5000번 포트를 백서버로 둠

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://yulsanoh:aktnftk@boilerplate.whhvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!~~안녕하세요~")); // express 앱의 루트 디렉토리에 Hello World를 출력되게 하는 것

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // express app이 5000에 listen을 하면 콘솔이 프린트 됨

// 회원가입을 할 때 쓴 유저이름, 사는 곳 등 입력한다 치면 User Database에 들어가게 된다.
// 그래서 그 User Data들을 보관하기 위해서 User model, schema를 만들어본다.
// model은 schema를 감싸주는 역할이다. 이름(name)의 타입은 무엇인지? 그리고 최대 글자수가 몇인지?
// 와 같이 하나하나 지정하는 것을 schema를 통해 할 수 있다.

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // yulsan oh@naver.com 이렇게 쳤을 때 공백을 없애줌
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    // 관리자와 일반 유저를 정할 때 사용
    type: Number,
    default: 0,
  },
  image: String, // 이렇게만 사용할 수 있음
  token: {
    // 토큰
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  var user = this;

  // 만약 비밀번호가 변경이 된다면
  if (user.isModified("password")) {
    // 비밀번호를 암호화 시킴
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainpassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch); // isMatch는 boolean형
  });
};

const User = mongoose.model("User", userSchema); // model('모델이름', 스키마)

module.exports = { User };

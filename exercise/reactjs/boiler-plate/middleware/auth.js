const { response } = require("express");
const { User } = require("../models/User");

let auth = (req, res, next) => {
  // 인증 처리를 함
  // 1. 클라이언트 쿠키에서 토근을 가져옴
  let token = req.cooikes.x_auth;

  // 2. 토큰을 복호화 한 후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
  // 3. 유저가 있으면 인증 Okay
  // 4. 유저가 없으면 인증 No
};

module.exports = { auth };

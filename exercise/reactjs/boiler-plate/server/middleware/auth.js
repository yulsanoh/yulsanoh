const { User } = require('../models/User');

let auth = (req, res, next) => {
    // 인증 처리를 하는 곳
    // 클라이언트 쿠키에서 token을 가져옴
    let token = req.cookies.x_auth;

    // token을 복호화(decode) 한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) {
            throw err;
        }
        
        if(!user) {
            return res.json({ isAuth: false, error: true });
        }

        req.token = token;
        req.user = user;

        // next()가 없으면 middleware에서 갇혀버림
        next();
    })
    // 유저가 있으면 인증O

    // 유저가 없다면 인증X
}

module.exports = { auth };
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        // trim이란 yulsan oh@gmail.com 이라는 이메일을 썻을 때 공백을 없애주는 역할을 함
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    }, 
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
        // Number가 1이면 관리자, 0이면 일반유저
    },
    image: String,
    // 유효성
    token: {
        type: String
    },
    // 토큰의 유효기간
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

// 이 모듈을 다른 파일에서도 사용할 수 있게 exports 해줌
module.exports = { User }
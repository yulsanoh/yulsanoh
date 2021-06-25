const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// 10자리의 salt
const saltRounds = 10;

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

// mongoose에서 가져온 메소드로 'save'를 진행하기 전에 처리가 된다.
userSchema.pre('save', function(next) {
    // 비밀번호를 암호화 시킴
    var user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) {
                return next(err);
            }
    
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) {
                    return next(err);
                }
                
                user.password = hash;
                // next()로 index.js에 userSchema에 저장
                next() 
            })
        })
    }

})

const User = mongoose.model('User', userSchema)

// 이 모듈을 다른 파일에서도 사용할 수 있게 exports 해줌
module.exports = { User }
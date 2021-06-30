const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// 10자리의 salt
const saltRounds = 10;
const jwt = require('jsonwebtoken');

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

    // 비밀번호를 변경할 때 암호화 진행
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
    } else {
    // 비밀번호 외에 다른 것을 변경할 때
        next()
    }

})

userSchema.methods.comparePassword = function(plainPassword, cb) {
    // plainPassword > 1234567이라고 생각, 암호화 된 비밀번호 $2b$10$2fpDZIslg7JHu58KoUayyO/RQEPK1zsanKjCIyPfTQtmrN9VB15M6
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) {
            return cb(err);
        }
        cb(null, isMatch);
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    // jsonwebtoken을 이용해서 token을 생성하기
    // 여기서 user._id는 database의 '_id'
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    // user._id와 'secretToken'을 합쳐서 = token을 생성
    // 그리고 'secretToken'을 넣으면 user._id가 나옴

    user.token = token;
    user.save(function(err, user) {
        if(err) {
            return cb(err);
        }
        cb(null, user);
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    // token을 decode한다.
    jwt.verify(token, 'secretToken', function(err, decoded) {
        // user._id를 이용해서 유저를 찾은 후
        // 클라이언트에서 가져온 token과 DB에 보관된 token이 일치하는지 확인

        user.findOne({"_id": decoded, "token": token}, function(err, user) {
            if(err) {
                return cb(err);
            }
            cb(null, user);
        })
    })
}

const User = mongoose.model('User', userSchema)

// 이 모듈을 다른 파일에서도 사용할 수 있게 exports 해줌
module.exports = { User }
// express 모듈을 가져옴
const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require('./models/User')

const config = require('./config/key');

// bodyParser가 client에서 오는 정보를 Server에서 분석해서 가져올 수 있게 해주는 것
// application/x-www-form-urlencoded을 분석해서 가져올 수 있게 하는 것
app.use(bodyParser.urlencoded({extended: true}));

// application/json type을 분석해서 가져올 수 있게 하는 것
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


// '/'는 root-directory를 칭함
app.get('/', (req, res) => res.send('Hello World! 변경된 페이지'))

app.post('/register', (req, res) => {
    // 회원가입 시 필요한 정보들을 Client에서 가져오면 해당 데이터들을 데이터베이스에 넣어준다.
    const user = new User(req.body)



    // userSchema에 저장
    // .save()는 mongoDB에서 오는 method
    user.save((err, userInfo) => {
        if(err) {
            return res.json({ success: false, err})
        }
        return res.status(200).json({
            success: true
        })    
    })
})

app.post('/login', (req, res) => {
    
    // 요청된 이메일을 data-base에 존재하는지 찾는다.
    // .findOne() > MongoDB에서 제공하는 method
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "해당 이메일에 해당하는 유저가 없습니다."
            })
        }
        
        // 요청된 이메일이 data-base에 존재한다면 비밀번호가 맞는지 확인.
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) {
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
            }
            
            // 비밀번호가 정확하다면 token을 생성하기.
            user.generateToken((err, user) => {
                
            })
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
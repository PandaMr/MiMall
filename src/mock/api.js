import Mock from 'mockjs'

Mock.mock('/api/user/login',{
    "status": 0,
    "data": {
        "id": 10,
        "username": "panda",
        "email": "expect_us@163.com"
    }
})
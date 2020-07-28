import Mock from 'mockjs'

Mock.mock('/api/user/login',{
    "status": 200,
    "data": {
        "id": 10, 
        "username": "panda",
        "email": "expect_us@163.com"
    }
})

Mock.mock('/product/list','get',{
    "status": 200,
    "data": {
        productList: [
            [
              {
                id: 10,
                img: require("@/assets/images/advertise-4.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce: "不漂白，天然抑菌，无有害添加。",
                price: 29.00
              },
              {
                id: 10,
                img: require("@/assets/images/advertise-1.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce: "不漂白，天然抑菌，无有害添加。",
                price: 29.00
              },
              {
                id: 10,
                img: require("@/assets/images/advertise-2.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce:
                  "不漂白，天然抑菌，无有害添加。有机全竹，天然抑菌，不漂白无荧光剂，四层加厚家庭装。",
                price: 29.00
              },
              {
                id: 10,
                img: require("@/assets/images/advertise-3.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce: "不漂白，天然抑菌，无有害添加。",
                price: 29.00
              },
              {
                id: 10,
                img: require("@/assets/images/advertise-4.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce: "不漂白，天然抑菌，无有害添加。",
                price: 29.00
              }
            ],
            [
              {
                id: 10,
                img: require("@/assets/images/advertise-3.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce: "不漂白，天然抑菌，无有害添加。",
                price: 29.00
              },
              {
                id: 10,
                img: require("@/assets/images/advertise-1.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce: "不漂白，天然抑菌，无有害添加。",
                price: 29.00
              },
              {
                id: 10,
                img: require("@/assets/images/advertise-2.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce: "不漂白，天然抑菌，无有害添加。",
                price: 29.00
              },
              {
                id: 10,
                img: require("@/assets/images/advertise-3.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce: "不漂白，天然抑菌，无有害添加。",
                price: 29.00
              },
              {
                id: 10,
                img: require("@/assets/images/advertise-4.png"),
                title: "熊猫优品无芯卷纸12卷",
                introduce: "不漂白，天然抑菌，无有害添加。",
                price: 29.00
              }
            ]
          ]
    }
})

Mock.mock('/login','post',(config)=>{
    const user = {
        username: 'panda',
        password: 'panda'
    }
    let data = JSON.parse(config.body);
    console.log(data);
    if(data.username === user.username && data.password === user.password){
        return {
            "status": 200,
            "data": {
                userId: data.id,
                username: data.username,
            }
        }
    }
    return {
        "status": 401,
        "data": {
            msg: '账户或密码错误'
        }
    }
    
})
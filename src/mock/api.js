import Mock from "mockjs";

const user = [
  {
    username: "panda",
    password: "panda",
  },
  {
    username: "expect",
    password: "expect",
  },
];

Mock.mock("/product/list", "get", {
  status: 200,
  data: {
    productList: [
      [
        {
          id: 10,
          img: require("@/assets/images/advertise-4.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce: "不漂白，天然抑菌，无有害添加。",
          price: 29.0,
        },
        {
          id: 10,
          img: require("@/assets/images/advertise-1.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce: "不漂白，天然抑菌，无有害添加。",
          price: 29.0,
        },
        {
          id: 10,
          img: require("@/assets/images/advertise-2.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce:
            "不漂白，天然抑菌，无有害添加。有机全竹，天然抑菌，不漂白无荧光剂，四层加厚家庭装。",
          price: 29.0,
        },
        {
          id: 10,
          img: require("@/assets/images/advertise-3.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce: "不漂白，天然抑菌，无有害添加。",
          price: 29.0,
        },
        {
          id: 10,
          img: require("@/assets/images/advertise-4.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce: "不漂白，天然抑菌，无有害添加。",
          price: 29.0,
        },
      ],
      [
        {
          id: 10,
          img: require("@/assets/images/advertise-3.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce: "不漂白，天然抑菌，无有害添加。",
          price: 29.0,
        },
        {
          id: 10,
          img: require("@/assets/images/advertise-1.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce: "不漂白，天然抑菌，无有害添加。",
          price: 29.0,
        },
        {
          id: 10,
          img: require("@/assets/images/advertise-2.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce: "不漂白，天然抑菌，无有害添加。",
          price: 29.0,
        },
        {
          id: 10,
          img: require("@/assets/images/advertise-3.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce: "不漂白，天然抑菌，无有害添加。",
          price: 29.0,
        },
        {
          id: 10,
          img: require("@/assets/images/advertise-4.png"),
          title: "熊猫优品无芯卷纸12卷",
          introduce: "不漂白，天然抑菌，无有害添加。",
          price: 29.0,
        },
      ],
    ],
  },
});

Mock.mock("/login", "post", (config) => {
  let data = JSON.parse(config.body);
  // 判断用户名或密码
  for (let i = 0; i < user.length; i++) {
    let flag = data.username === user[i].username && data.password === user[i].password;
    if (flag) {
      return {
        status: 200,
        data: {
          userId: data.id,
          username: data.username,
        },
      };
    }
  }

  return {
    status: 401,
    data: {
      msg: "账户或密码错误",
    },
  };
});

Mock.mock('/cart/count', {
  status: 200,
  count: 2
})

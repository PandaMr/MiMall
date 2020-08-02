<template>
  <div class="header">
    <div class="container">
      <div class="nav-header">
        <div class="nav-header-left">
          <a href="/index">熊猫纸业</a>
          <a href="#">生活用品</a>
          <a href="#">婴儿系列</a>
          <a href="#">成人系列</a>
          <a href="#">湿巾系列</a>
        </div>
        <div class="nav-header-right">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" v-if="username" @click="clearUser()">退出</a>
          <a href="/login" v-if="!username">登录</a>
          <a href="#" v-if="!username">注册</a>
          <a href="#" v-if="!username">访客浏览</a>
          <div class="cart" @click="cart">
            <img src="../assets/images/cart.png" alt="购物车" width="20" />
            <span>购物车 ({{cartCount}})</span>
          </div>
        </div>
      </div>
    </div>

    <div class="nav-menu">
      <div class="header-logo">
        <img src="../assets/images/logo.png" alt="logo" width="100" />
      </div>
      <div class="header-menu">
        <div class="menu-item">
          <a href="javascript:;" class="menu-title">卫生纸</a>
          <ul class="menu-child">
            <li v-for="(item,index) in menuList" :key="index">
              <a href="javascript:;">
                <div class="child-box">
                  <img v-lazy="item.img" />
                  <p class="menu-img-text">{{item.name}}</p>
                  <p class="price">{{item.price}}元</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-item">
          <a href="#" class="menu-title">卫生巾</a>
          <ul class="menu-child">
            <li v-for="(item,index) in menuList" :key="index">
              <a href="javascript:;">
                <div class="child-box">
                  <img v-bind:src="item.img" />
                  <p class="menu-img-text">{{item.name}}</p>
                  <p class="price">{{item.price}}元</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-item">
          <a href="#" class="menu-title">纸尿裤</a>
          <ul class="menu-child">
            <li v-for="(item,index) in menuList" :key="index">
              <a href="javascript:;">
                <div class="child-box">
                  <img v-bind:src="item.img" />
                  <p class="menu-img-text">{{item.name}}</p>
                  <p class="price">{{item.price}}元</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-item">
          <a href="#" class="menu-title">美容巾</a>
          <ul class="menu-child">
            <li v-for="(item,index) in menuList" :key="index">
              <a href="javascript:;">
                <div class="child-box">
                  <img v-bind:src="item.img" />
                  <p class="menu-img-text">{{item.name}}</p>
                  <p class="price">{{item.price}}元</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-item">
          <a href="#" class="menu-title">抽纸</a>
          <ul class="menu-child">
            <li v-for="(item,index) in menuList" :key="index">
              <a href="javascript:;">
                <div class="child-box">
                  <img v-bind:src="item.img" />
                  <p class="menu-img-text">{{item.name}}</p>
                  <p class="price">{{item.price}}元</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="header-search">
        <input type="text" name="搜索" />

        <a href="#"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    
    return {
      // username: this.$store.state.username,
      menuList: [
        {
          id: 10,
          name: "本色纸",
          img: require("@/assets/images/menu-img-1.png"),
          price: "¥29.00",
        },
        {
          id: 11,
          name: "干湿两用",
          img: require("@/assets/images/menu-img-1.png"),
          price: "¥29.00",
        },
        {
          id: 12,
          name: "白色纸",
          img: require("@/assets/images/menu-img-1.png"),
          price: "¥29.00",
        },
        {
          id: 13,
          name: "速溶纸",
          img: require("@/assets/images/menu-img-1.png"),
          price: "¥29.00",
        },
      ],
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    username() {
      return this.$store.state.username;
      //  // 用户名存储到localStorage中
      // window.localStorage.setItem("username", this.$store.state.username);
      // // 从localSrorage获取用户名
      // return window.localStorage.getItem("username");
    },
    cartCount(){
      return this.$store.state.cartCount;
    },
    clearUser() {
      window.localStorage.removeItem("username");
      // this.username = '';
      this.$store.state.username = '';
      this.$message({
        showClose: true,
        message: "已退出！",
        type: "success",
      });
    }

  },
  methods: {
    cart() {
      this.$router.push("/cart");
    },
    init() {
      // // 用户名存储到localStorage中
      // window.localStorage.setItem("username", this.$store.state.username);
      // // 从localSrorage获取用户名
      // this.username = window.localStorage.getItem("username");
      
    },
    
    
  },
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
// @import url("../assets/scss/mixin.scss");
@import "../assets/scss/mixin.scss";

.header {
  .container {
    width: 100%;
    background-color: #333333;
    .nav-header {
      width: 1226px;
      margin: 0 auto;
      @include flex();
      .nav-header-left {
        a {
          line-height: 40px;
          display: inline-block;
          padding-right: 20px;
          color: #ffffff;
        }
      }
      .nav-header-right {
        @include flex();
        a {
          display: inline-block;
          padding-left: 20px;
          color: #ffffff;
        }
        .cart {
          padding: 0 20px;
          height: 40px;
          line-height: 40px;
          background-color: #999999;
          margin-left: 20px;
          span {
            margin-left: 10px;
          }
          img {
            position: relative;
            top: 4px;
          }
        }
      }
    }
  }
  .nav-menu {
    width: 1226px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    @include flex();
    .header-menu {
      width: 630px;
      @include flex();
      .menu-item {
        // height: 100px;
        &:hover {
          .menu-child {
            height: 220px;
            opacity: 1;
          }
        }
        .menu-title {
          display: inline-block;
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          padding: 0 10px;
          &:hover {
            @include color();
          }
        }
        .menu-child {
          position: absolute;
          left: 0;
          top: 100px;
          width: 1226px;
          height: 0;
          opacity: 0;
          overflow: hidden;
          border-top: 1px #e5e5e5 solid;
          box-shadow: 0px 5px 5px -5px #999;
          background-color: #ffffff;
          transition: all 0.5s;
          z-index: 9;
          @include flex(flex-start, center);
          li {
            position: relative;
            width: 200px;
            .child-box {
              // border-right: 1px #e5e5e5 solid;
              img {
                width: 100px;
              }
              .menu-img-text {
                color: #333;
              }
              .price {
                color: $color-brand;
              }
            }
            &:before {
              content: " ";
              position: absolute;
              right: 0;
              border-left: 1px #e5e5e5 solid;
              height: 100px;
              width: 1px;
            }
            &:last-child:before {
              border: none;
            }
          }
        }
      }
    }
    .header-search {
      width: 295px;
      height: 50px;
      border: 1px #e0e0e0 solid;
      @include flex();
      input {
        width: 245px;
        margin-left: 10px;
        border: none;
        height: 50px;
        border-right: 1px #e0e0e0 solid;
      }
      a {
        width: 50px;
        height: 50px;
        background: url("../assets/images/search.png") no-repeat center;
        background-size: 22px;
      }
    }
  }
}
</style>

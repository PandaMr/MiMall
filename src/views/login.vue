<template>
  <div class="login">
    <nav-header></nav-header>
    <div class="login-form">
      <div class="form-title">用户登录</div>
      <div class="form-container">
        <div class="username">
          <input type="text" v-model="username" placeholder="Panda ID" />
        </div>
        <div class="password">
          <input type="password" v-model="password" placeholder="密码" name="password" id="password" />
        </div>
        <div class="introduce">您的Panda ID是你用来登录网站、小程序和APP的电子邮箱或手机号码。</div>
        <div class="submit-button" :plain="true" @click="submit">
          <a href="javascript:;">登录</a>
        </div>
        <div class="register">
          <p>
            <a href="javascript:;">忘记了 Panda ID 或密码</a>
          </p>
          <p>
            <a href="javascript:;">还没有 Panda ID？创建一个</a>
          </p>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";

export default {
  name: "login",
  components: {
    NavHeader,
    NavFooter,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.axios
        .post("/login", {
          id: 1,
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 200) {
            let username = res.data.data.username;
            //  // 用户名存储到localStorage中
            window.localStorage.setItem("username", username);
            // 登录成功后将用户名存储到Vuex中
            this.$store.dispatch("saveUsername", username);
            // 获取购物车数量
            this.axios.get("/cart/count").then((res) => {
              console.log(res.data.count);
              this.$store.dispatch("saveCartCount", res.data.count);
              window.localStorage.setItem('cartCount', res.data.count);
            });
            // 调转到首页
            this.$router.push("/index");
            this.$message({
              showClose: true,
              message: "登录成功",
              type: "success",
            });
          } else {
            // alert(res.data.data.msg);
            this.$message({
              showClose: true,
              message: res.data.data.msg,
              type: "error",
            });
          }
        });
    },
  },
};
</script>
<style lang="scss">
.login {
  .login-form {
    width: 100%;
    border-top: 1px #e5e5e5 solid;
    padding: 50px 0;
    .form-title {
      font-size: 40px;
    }
    .form-container {
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .username {
        width: 410px;
        border-radius: 12px;
        border: 1px #d2d2d7 solid;
        margin: 0 auto;
        input {
          width: 360px;
          height: 56px;
          border: none;
        }
      }
      .password {
        width: 410px;
        border-radius: 12px;
        border: 1px #d2d2d7 solid;
        margin: 16px auto;
        input {
          width: 360px;
          height: 56px;
          border: none;
        }
      }
      .introduce {
        margin-top: 6px;
        width: 410px;
        text-align: left;
        font-size: 14px;
        line-height: 20px;
      }
      .submit-button {
        width: 410px;
        height: 56px;
        border-radius: 12px;
        background-color: #096759;
        margin-top: 36px;
        cursor: pointer;
        a {
          color: #ffffff;
          font-size: 16px;
          line-height: 56px;
        }
      }
      .register {
        margin-top: 20px;
        width: 410px;
        text-align: left;
        p {
          margin: 6px 0;
          a {
            font-size: 16px;
            line-height: 20px;
            color: #096759;
          }
        }
      }
    }
  }
}
</style>
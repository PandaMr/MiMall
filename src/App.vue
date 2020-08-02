<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      res: {},
      name: 'panda'
    }
  },
  mounted(){
    // 保持登录状态
    this.$store.dispatch('saveUsername', window.localStorage.getItem("username")); 
    // 获取购物车数量
    this.axios.get('/cart/count').then((res)=>{
      console.log(res.data.count);
      this.$store.dispatch('saveCartCount', res.data.count);
    })

    //在线API数据模拟 
    // this.axios.get('https://easydoc.xyz/mock/EZSa5oYu/p/86669362/product/123').then((res)=>{
    //   console.log(res.data);
    // })
  
    // this.axios({
    //   url: 'https://easydoc.xyz/mock/EZSa5oYu/p/86669362/product/123',
    //   method: "GET",
    //   header:{
    //     "Access-Control-Allow-Origin":"*"
    //   },
    //   data:{

    //   }
    // }).then((res)=>{
    //   console.log(res);
    // })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

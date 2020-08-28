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
    this.$store.dispatch('saveCartCount', window.localStorage.getItem('cartCount'));
    const arr = [];
const testObj = {};
console.log(arr === "");
console.log(arr == "");
arr.toString = () => 1;
console.log(arr === 1);
console.log(arr == 1);
arr.valueOf = () => 2;
console.log(arr == 2);
arr.valueOf = () => testObj;
console.log(arr == testObj);

function fun(){
  this.name='panda';
}
// typeof 判断类型。fun类型是Function  fun.prototype 类型是对象Object
console.log(typeof fun.prototype);

// typeof 判断array 、object、null 都为Object
var a = null;
var a1 = {};
var a2 = [];

console.log(typeof(a));
console.log(typeof(a1));
console.log(typeof(a2));


    // 获取购物车数量
    // this.axios.get('/cart/count').then((res)=>{
    //   console.log(res.data.count);
    //   this.$store.dispatch('saveCartCount', res.data.count);
    // });

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

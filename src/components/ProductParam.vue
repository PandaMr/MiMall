<template>
  <div class="product-param" :class="{'is-fixed': isFixed}">
    <div class="container">
      <div class="product-param-left">
        <a href="javascript:;">熊猫优选无芯卷纸</a>
      </div>
      <div class="product-param-right">
        <a href="javascript:;" class="active">商品详情</a>
        <a href="javascript:;">联系客服</a>
        <a href="javascript:;">用户评价</a>
        <slot name="buy" class="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "productParam",
  data() {
    return {
        isFixed: false
    };
  },
  mounted(){
    window.addEventListener('scroll', this.initHight);
  },
  destroyed(){
    window.removeEventListener('scroll', this.initHight, false);
  },
  methods: {
      initHight(){
          let scrollTop = window.scrollY;
          this.isFixed = scrollTop > 140 ? true:false;
          console.log(this.isFixed);
      }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";

.product-param {
  width: 100%;
  border-top: 1px #e5e5e5 solid;
  border-bottom: 1px #e5e5e5 solid;
  background-color: #ffffff;
  &.is-fixed{
    transition: all 0.5s;
    position: fixed;
    top: 0;
    left: 0;
    
  }
  
 
  .container {
    width: 1226px;
    height: 65px;
    margin: 0 auto;
    @include flex();
    .product-param-left {
      a {
        font-size: 18px;
        color: #424242;
      }
    }
    .product-param-right {
      a {
        display: inline-block;
        font-size: 14px;
        line-height: 16px;
        color: #616161;
        font-weight: 460;
        padding: 0 10px;
        border-right: 1px #999999 solid;
        &:last-child{
            border: none;
        }
        &:nth-last-child(2){
            border: none;
        }
        &:hover{
          color: #096759;
        }
      }
      .active{
        color: #096759;
      }
      
    }
  }
}
</style>
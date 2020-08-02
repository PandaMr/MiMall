<template>
  <div class="product">
    <product-param>
      <a href="javascript:;" slot="buy" id="buy" @click="buy">立即购买</a>
    </product-param>
    <div class="product-container">
      <div>product</div>
      <div>product</div>
      <div>product</div>
      <div>product</div>
      <div>product</div>
      <div>product</div>
      <div>product</div>
      <div>product</div>
    </div>
  </div>
</template>

<script>
import ProductParam from "../components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParam,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
      buy(){
          let productId = this.$route.params.id;
          this.$router.push(`/detail/${productId}`);
      }
  },
};
</script>

<style lang="scss">
.product {
  #buy {
    display: inline-block;
    width: 120px;
    height: 30px;
    line-height: 30px;
    background-color: #096759;
    color: #ffffff;
  }
  .product-container {
    widows: 1226px;
    div {
      height: 100px;
    }
  }
}
</style>
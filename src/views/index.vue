<template>
  <div class="index-box">
    <div class="container">
      <el-carousel height="460px" indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
            <a href="#"><img src="../assets/images/swiper-1.jpg" width="100%" ></a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      swiperList: [
        {
          id: 10,
          img: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.index-box {
  width: 100%;
  .container {
    width: 1226px;
    margin: 0 auto;
  }
}
</style>
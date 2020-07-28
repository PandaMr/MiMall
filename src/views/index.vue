<template>
  <div class="index-box">
    <div class="container">
      <div class="swiper-box">
        <el-carousel height="460px">
          <el-carousel-item v-for="(item,index) in swiperList" :key="index">
            <a href="javascript:;">
              <img :src="item.img" width="100%" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="advertised-box">
        <a v-for="(item,index) in advertiseList" :key="index" :href="'/product/'+item.id">
          <img :src="item.img" alt="抽纸" />
        </a>
      </div>
      <div class="advertise-column">
        <a href="javascript:;">
          <img src="../assets/images/advertise-column.png" alt="抽纸" width="100%" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>全部产品</h2>
        <div class="product-item" v-for="(product,i) in productList" :key="i">
          <div class="product-info" v-for="(item,j) in product" :key="j">
            <div class="product-img">
              <img :src="item.img" />
            </div>
            <p class="title">{{item.title}}</p>
            <p class="introduce">{{item.introduce}}</p>
            <p class="price">{{item.price}}元</p>
            <p class="cart" @click="onCart">加入购物车</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗组件 -->
    <model
      title="提示"
      sureText="查看购物车"
      cancelText="关闭"
      buttonType="1"
      modelType="middle"
      v-bind:showModel="showModel"
      @submit="submit()"
      @cancel="cancel()"
    >
      <p slot="model-body">商品添加成功！</p>
    </model>
  </div>
</template>

<script>
import Model from "../components/model";
export default {
  name: "index",
  components: {
    Model
  },
  data() {
    return {
      swiperList: [
        {
          id: 10,
          img: require("@/assets/images/swiper-1.jpg")
        },
        {
          id: 11,
          img: require("@/assets/images/swiper-1.jpg")
        },
        {
          id: 12,
          img: require("@/assets/images/swiper-1.jpg")
        }
      ],
      advertiseList: [
        {
          id: 10,
          img: require("@/assets/images/advertise-1.png")
        },
        {
          id: 11,
          img: require("@/assets/images/advertise-2.png")
        },
        {
          id: 12,
          img: require("@/assets/images/advertise-3.png")
        },
        {
          id: 13,
          img: require("@/assets/images/advertise-4.png")
        }
      ],
      productList: [],
      showModel: false
    };
  },
  methods: {
    onCart() {
      console.log("cart");
      this.showModel = true;
      return;
    },
    submit() {
      this.$router.push("/cart");
    },
    cancel() {
      this.showModel = false;
    }
  },
  mounted() {
    // 获取商品列表
    this.axios.get("/product/list").then(res => {
      this.productList = res.data.data.productList;
    });
    

  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";

.index-box {
  width: 100%;
  .container {
    width: 1226px;
    margin: 0 auto;
    .advertised-box {
      width: 100%;
      margin-top: 16px;
      @include flex();
      a {
        display: inline-block;
        width: 24%;
        img {
          width: 100%;
        }
      }
    }
    .advertise-column {
      margin: 16px 0;
    }
  }
  .product-box {
    margin-top: 16px;
    background-color: #f5f5f5;
    h2 {
      text-align: left;
      padding: 16px 0;
    }
    .product-item {
      @include flex();
      .product-info {
        width: 19%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 16px;
        background-color: #ffffff;
        padding-bottom: 20px;
        .product-img {
          img {
            width: 100%;
          }
        }
        .title {
          color: #333333;
          font-weight: bold;
          padding: 4px 0;
        }
        .introduce {
          color: #b0b0b0;
          font-size: 12px;
        }
        .price {
          // color: #4bc9f3;
          color: #096759;
          font-weight: bold;
          padding: 10px;
        }
        .introduce {
          margin: 0 auto;
          width: 80%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .cart {
          width: 100px;
          height: 28px;
          line-height: 28px;
          background-color: #096759;
          color: #ffffff;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
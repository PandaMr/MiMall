<template>
  <div class="cart">
    <nav-header></nav-header>
    <div class="totalPrice">
      <p class="price">您的购物车一共 ¥12600 元</p>
      <p class="tip">所有的订单均享受免费送货上门服务</p>
      <p class="submitOrder">结算订单</p>
    </div>
    <div class="cartBox">
      <div class="cartContainer">
        <div class="orderList">
          <!-- 订单列表标题 -->
          <ul class="orderItem">
            <li class="checkAll">
              <input class="checkAllInput" type="checkbox" /><span class="checkAllText">全选</span>
            </li>
            <li class="productImg"></li>
            <li class="productName">商品名称</li>
            <li class="productPrice">单价</li>
            <li class="productNumber">数量</li>
            <li class="productToatl">小计</li>
            <li class="productHandle">操作</li>
          </ul>
          <ul class="orderItem">
            <li class="productCheck">
              <input type="checkbox" />
            </li>
            <li class="productImg"><img src="../assets/images/order-item-1.jpg" height="80" alt="电饭煲" /></li>
            <li class="productName">米家电饭煲C1 5L</li>
            <li class="productPrice">268元</li>
            <li class="productNumber">
							<el-input-number size="mini" v-model="number" @change="handleChange" :min="1" :max="10"></el-input-number>
						</li>
            <li class="productToatl">268元</li>
            <li class="productHandle">删除</li>
          </ul>
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
  name: "cart",
  components: {
    NavHeader,
    NavFooter,
	},
	data(){
		return {
			number: 1
		}
	},
	methods: {
		handleChange(){

		}
	}
};
</script>
<style lang="scss">
@import url("../assets/scss/reset.scss");
@import './../assets/scss/mixin.scss';
.cart {
  .totalPrice {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    padding: 30px;
    border-top: 2px solid #096759;
    .tip {
      font-size: 18px;
      padding: 28px 0;
    }
    .submitOrder {
      font-size: 18px;
      display: inline-block;
      width: 200px;
      height: 48px;
      line-height: 48px;
      background-color: #096759;
      color: #ffffff;
      border-radius: 12px;
      cursor: pointer;
    }
  }
  .cartBox {
    width: 100%;
    background-color: #f5f5f5;
    padding-top: 10px;
    .cartContainer {
      margin-top: 10px;
      background-color: #ffffff;
      min-height: 500px;
      width: 1226px;
      margin: 0 auto;
      .orderList {
        margin-top: 20px;
				width: 100%;
				.orderItem:first-child {
					padding: 30px 0;
				}
        .orderItem {
					padding: 10px 0px;
					@include flex();
          // display: flex;
          // flex-direction: row;
          // justify-content: space-between;
          // align-items: center;
          border-bottom: 1px #f5f5f5 solid;
        }
        .orderItem > li {
          width: 150px;
          text-align: center;
					.checkAllInput {
            margin-left: 38px;
					}
					.checkAllText {
						margin-left: 10px;
					}

        }
      }
    }
  }
}
</style>
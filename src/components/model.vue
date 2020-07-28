<template>
  <transition name="slide">
    <div class="model" v-show="showModel">
      <div class="model-mask"></div>
      <div class="model-message-box">
        <div class="model-header">
          <span>{{title}}</span>
          <a class="icon-close" href="javascript:;" @click="$emit('cancel')">
            <img src="../assets/images/close.png" />
          </a>
        </div>
        <div class="model-body">
          <slot name="model-body"></slot>
        </div>
        <div class="model-footer">
          <el-button @click="$emit('submit')" type="primary">{{sureText}}</el-button>
          <el-button @click="$emit('cancel')">{{cancelText}}</el-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "model",
  data() {
    return {};
  },
  props: {
    // 弹窗信息类型：small/middle/large/表单
    modelType: {
      type: String,
      default: "form"
    },
    // 弹窗标题
    title: String,
    // 按钮类型：1:确定按钮 2:取消按钮 3:确定 取消
    buttonType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },

    showModel: Boolean
  }
};
</script>
<style lang="scss" >
@import "../assets/scss/mixin.scss";
.model {
  @include position(fixed, 0, 0, 100%, 100%);
  transition: all 0.5s;
  .model-mask {
    @include position(absolute, 0, 0, 100%, 100%);
    z-index: 11;
    background-color: #000000;
    opacity: 0.5;
  }
  
  &.slide-enter-active{
      top: 0;
  }
  &.slide-leave-active{
      top: -100%;
  }
  &.slide-enter{
      top: -100%;
  }
  .model-message-box {
    @include position(absolute, 40%, 50%, 660px, auto);
    background-color: #ffffff;
    transform: translate(-50%, -50%);
    z-index: 12;
    .model-header {
      @include flex();
      width: 100%;
      height: 60px;
      line-height: 60px;
      padding: 0px 30px;
      font-size: 16px;
      box-sizing: border-box;
      .icon-close {
        img {
          width: 24px;
          height: 24px;
          margin-top: 20px;
          transition: transform 0.3s;
          &:hover {
            transform: scale(1.5);
          }
        }
      }
    }
    .model-body {
      padding: 50px;
      font-size: 14px;
    }
    .model-footer {
      height: 80px;
      line-height: 80px;
      .el-button--primary,
      .el-button {
        width: 120px;
      }
    }
  }
}
</style>
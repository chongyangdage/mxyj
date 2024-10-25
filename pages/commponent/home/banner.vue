<template>
<view class="banner">
    <image src="https://picsum.photos/300/200?20" lazy-load="true" mode="scaleToFill" class="imgs"></image>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.banner{
  height: 26vw;
  width: 94%;
  margin: 0 auto;
  margin-top: 20upx;
  overflow: hidden;
  .imgs{
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 15upx;
  }
}
</style>
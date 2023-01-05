<template>
  <div class="notfound">
    <div class="wrapper">
      <div class="big">页面不见了！</div>
      <div class="link">
        点击<router-link to="/">这里</router-link>进入首页.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.notfound {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../assets/NotFound.jpg') no-repeat center;
  background-size: cover;
}
.wrapper {
  position: absolute;
  right: 30px;
  bottom: 80px;
  .big {
    font-size: 60px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 50px;
  }
  .link {
    font-size: 26px;
    color: #e0e2df;
    .router-link-active {
      color: #f2cd43;
      text-decoration: none;
    }
  }
}
</style>

<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
          <BreadCrumb />
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer> <Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './common/Header.vue';
import Footer from './common/Footer.vue';
import Menu from './common/Menu.vue';
import BreadCrumb from './common/BreadCrumb.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Menu,
    BreadCrumb
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont {
      margin: 20px auto;
    }
  }
}
</style>

<template>
  <div>
    <home-header></home-header>
    <div :class="['wrapper', { 'wrapper_sidebar_on': isOpenSidebar }]">
      <home-sidebar @toggle="open"
                    :isOpenSidebar="isOpenSidebar"
                    class="wrapper__sidebar">
      </home-sidebar>
      <router-view class="wrapper__content"></router-view>
    </div>
  </div>
</template>
<script>
import HomeHeader from './HomeHeader';
import HomeSidebar from './HomeSidebar';

export default {
  components: { HomeHeader, HomeSidebar },
  data() {
    return {
      isOpenSidebar: false
    }
  },
  methods: {
    open() {
      this.isOpenSidebar = !this.isOpenSidebar;
    }
  },
  created() {
    setTimeout(() => {
      this.isOpenSidebar = true;
    }, 0);
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  transition: all .5s;
  &__sidebar {
    position: fixed;
    top: 55px;
    left: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: all .5s;
  }
  &__content {
    width: 100%;
    padding: 10px 120px;
  }
  &_sidebar_on {
    padding-left: 350px;
    .wrapper__sidebar {
      transform: translateX(0);
    }
  }
}
</style>

<template>
  <div>
    <home-header :class="{'header_close': hide}"></home-header>
    <div :class="['wrapper', { 'wrapper_sidebar_on': isOpenSidebar }]">
      <home-sidebar @toggle="open"
                    :isOpenSidebar="isOpenSidebar"
                    :class="['wrapper__sidebar', {'sidebar_top': hide}]">
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
      isOpenSidebar: false,
      scrollTop: null,
      heightHeader: 55
    }
  },
  computed: {
    hide() {
      return this.scrollTop > this.heightHeader ? true : false;
    }
  },
  methods: {
    open() {
      this.isOpenSidebar = !this.isOpenSidebar;
    },
    scrolled() {
      this.scrollTop = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrolled);
    
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
    padding-top: 55px;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    transform: translateX(-100%);
    transition: all .5s;
  }
  &__content {
    width: 100%;
    padding: 55px 120px;
  }
  &_sidebar_on {
    padding-left: 350px;
    .wrapper__sidebar {
      transform: translateX(0);
    }
  }
}
</style>

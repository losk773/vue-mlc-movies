<template>
  <div>
    <HomeHeader></HomeHeader>
    <div class="wrapper wrapper_sidebar_on">
      <HomeSidebar class="wrapper__sidebar"></HomeSidebar>
      <router-view class="wrapper__content"></router-view>
    </div>
  </div>
</template>
<script>
import HomeHeader from './HomeHeader';
import HomeSidebar from './HomeSidebar';

export default {
  components: { HomeHeader, HomeSidebar }
}
</script>
<style lang="scss" scoped>
.wrapper {
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
    padding: 0 120px;
  }
  &_sidebar_on {
    padding-left: 350px;
    .wrapper__sidebar {
      transform: translateX(0);
    }
  }
}
</style>

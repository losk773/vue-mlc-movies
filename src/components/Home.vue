<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSidebar></HomeSidebar>
    <router-view></router-view>
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

</style>

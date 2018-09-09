<template>
  <div class="welcome">
    <div class="welcome__box">
      <img src="../assets/logo.png" alt="My lovely movie">
      <authorization-form></authorization-form>
    </div>
  </div>  
</template>
<script>
import AuthorizationForm from './AuthorizationForm'

export default {
  components: {
    AuthorizationForm
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton');
@import url('https://fonts.googleapis.com/css?family=Fascinate+Inline');
.welcome {
  position: relative;
  height: 100vh;
  background: url(../assets/cover.jpg) center center no-repeat;
  background-size: cover;
  &__box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding-top: 80px;
    text-align: center;
  }
}
</style>


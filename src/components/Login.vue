<template>
  <div class="welcome">
    <div class="welcome__box">
      <img src="../assets/logo.png" class="welcome__logo" alt="My lovely movie">
      <login-form></login-form>
    </div>
  </div>  
</template>
<script>
import LoginForm from './LoginForm'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  position: relative;
  height: 100vh;
  background: url(../assets/cover.jpg) center center no-repeat;
  background-size: cover;
  &__box {
    padding-top: 80px;
    text-align: center;
  }
  &__logo {
    max-width: 100%;
    margin-bottom: 150px;
  }
}
</style>


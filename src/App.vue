<template>
  <div class="welcome">
    <div class="welcome__box">
      <h1 class="weclome__title">My lovel Movie</h1>
      <authorization-form></authorization-form>
    </div>
  </div>  
</template>
<script>
import AuthorizationForm from './components/AuthorizationForm'

export default {
  components: {
    AuthorizationForm
  }
}
</script>
<style lang="scss" scoped>
.welcome {
  height: 100vh;
  background: url(./assets/cover_1.jpg) center center no-repeat;
  background-size: cover;
}
</style>


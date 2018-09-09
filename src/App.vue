<template>
  <div class="welcome">
    <div class="welcome__box">
      <!-- <h1 class="welcome__title">My Lovely Movie</h1> -->
      <img src="./assets/logo.png" alt="My lovely movie">
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
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&subset=latin-ext');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

body {
  font-family: 'Montserrat', sans-serif;
}
* {
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton');
@import url('https://fonts.googleapis.com/css?family=Fascinate+Inline');
.welcome {
  position: relative;
  height: 100vh;
  background: url(./assets/cover.jpg) center center no-repeat;
  background-size: cover;
  &__title {
    font-family: 'Monoton', cursive;
    font-size: 125px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 0 2px 5px #272727;
  }
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


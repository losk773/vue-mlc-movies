<template>
  <header class="header">
    <div class="header__thumb">
      <router-link :to='"/home"'>
        <img src="/public/images/logo_white.png" class="header__logo" alt="My lovely menu">
      </router-link>
    </div>
    <div class="account">
        <div class="account__thumb">
          <i class="material-icons">person</i>
        </div>
        <div class="account__person">
          losk773
        </div>
    </div>
  </header>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 5;
  transform: translateY(0);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: 55px;
  background-color: #a92929;
  transition: all .5s;
  &__thumb {
    max-width: 220px;
  }
  &__logo {
    max-width: 100%;
  }
  &_close {
    transform: translateY(-55px);
  }
}
.account {
  display: flex;
  align-items: center;
  &__thumb {
    position: relative;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: #fff;
    color: #272727;
    border-radius: 50%;
    i.material-icons {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      font-size: 26px;
    }
  }
  &__person {
    padding-left: 10px;
    font-weight: 300;
    color: #ffffff;
  }
}
</style>

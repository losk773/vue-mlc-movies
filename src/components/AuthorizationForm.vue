<template>
  <form class="login-form">
      <div class="login-form__field login-form__field_login">
        <input type="text" class="login-form__input" placeholder="Login">
      </div>
      <div class="login-form__field login-form__field_password">
        <input type="password" class="login-form__input" placeholder="Password">
      </div>
        <button class="login-form__submit">Sign in</button>
  </form>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 35px 25px;
  border-radius: 5px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fcfcfc;
    opacity: .65;
    z-index: -1;
  }
  &__field {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    margin-bottom: 20px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 21px;
      background-color: #f1f1f1;
      color: #a59d9d;
      z-index: 5;
      font-family: 'Material Icons';
    }
    &_login {
      &:before {
        content: 'person';
      }
    }
    &_password {
      &:before {
        content: 'lock';
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__title {
    font-size: 21px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffffff;
  }
  &__input {
    position: relative;
    width: 100%;
    padding: 5px 50px;
    height: 40px;
    font-size: 14px;
    border: none;
  }
  &__submit {
    display: block;
    min-width: 200px;
    margin: 0 auto;
    padding: 15px 0;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    border: none;
    border-radius: 3px;
    background-color: #076f8a;
    color: #ffffff;
    cursor: pointer;
    transition: all .4s;
    &:hover {
      background-color: #a92929;
    }
  }
}
</style>

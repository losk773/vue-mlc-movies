<template>
  <form class="login-form" 
        @submit.prevent="authorization(inputData)">
      <div class="login-form__field login-form__field_login">
        <input v-model="inputData.login"
               type="text" 
               class="login-form__input" 
               placeholder="Login"
               required>
      </div>
      <div class="login-form__field login-form__field_password">
        <input v-model="inputData.password"
               type="password"
               class="login-form__input"
               placeholder="Password"
               required>
      </div>
      <div v-if="wrongPassword" 
           class="login-form__notice">
        Неверный пароль или логин
      </div>
      <button class="login-form__submit">Sign in</button>
  </form>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  data(){
    return {
      inputData: {
        login: '',
        password: '',
      }
    }
  },
  computed: {
    ...mapGetters('auth', [
      'wrongPassword'
    ])
  },
  methods:{
    ...mapActions('auth', [
      'authorization'
    ])
  
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  position: relative;
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  padding: 35px 25px;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
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
  &__notice {
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    background-color: #dc5555;
    font-size: 14px;
    color: #ffffff;
    border-radius: 3px;
  }
}
</style>

<template>
  <router-view></router-view>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    if(!this.isAuthorized) {
      this.$router.push('/login')
    } else {
      this.$router.push('/home')
    }
  },
  computed: {
    ...mapGetters('auth', [
      'isAuthorized'
    ])
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&subset=latin-ext');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

body {
  font-family: 'Montserrat', sans-serif;
}
</style>


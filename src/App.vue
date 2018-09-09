<template>
  <router-view></router-view>
</template>
<script>
import Welcome from './components/Welcome'

export default {
  components: {
    Welcome
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


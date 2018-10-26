<template>
  <div class="welcome">
    <h1 class="welcome__title">My Lovely Movies</h1>
    <p class="welcome__desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
    <a class="welcome__btn" href="https://github.com/losk773/vue-mlc-movies" target="_blank">GitHub</a>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.welcome {
  text-align: center;
  &__title {
    padding-top: 250px;
    margin-bottom: 25px;
    font-size: 100px;
    font-weight: 700;
    color: #272727;
    text-transform: uppercase;
  }
  &__desc {
    max-width: 900px;
    margin: auto;
    margin-bottom: 35px;
    line-height: 28px;
    font-size: 18px;
    color: #6b6565;
  }
  &__btn {
    display: inline-block;
    min-width: 200px;
    line-height: 54px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    border: none;
    border-radius: 3px;
    background-color: #a92929;
    color: #ffffff;
    cursor: pointer;
    transition: all .4s;
    &:hover {
      background-color: #076f8a;
    }
  }
}
</style>

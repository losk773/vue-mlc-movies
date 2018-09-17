<template>
  <div class="sidebar">
    <button class="sidebar__toggle material-icons">arrow_back</button>
    <div class="sidebar__inner">
      <h1>SideBar</h1>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.sidebar {
  width: 350px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .8;
  }
  &__inner {
    height: 100%;
  }
  &__toggle {
    position: absolute;
    top: 10px;
    left: 100%;
    width: 35px;
    height: 35px;
    margin-left: 25px;
    padding: 0;
    background: #272727;
    border-radius: 50%;
    border: none;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      background: #a92929;
    }
  }
}
</style>

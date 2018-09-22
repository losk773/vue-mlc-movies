<template>
  <div class="sidebar">
    <button @click="toggleSidebar"
            class="sidebar__toggle material-icons">
      {{ arrowIcon }}
    </button>
    <div class="sidebar__inner">
      <movie-categories></movie-categories>
    </div>
  </div>
</template>
<script>
import MovieCategories from './MovieCategories';

export default {
  components: { MovieCategories },
  props: {
    isOpenSidebar: Boolean
  },
  computed: {
    arrowIcon() {
      return this.isOpenSidebar ? 'arrow_back' :  'arrow_forward';
    }
  },
  methods: {
    toggleSidebar(event) {
      this.$emit('toggle', event.target);
    }
  }
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
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .8;
  }
  &__inner {
    padding: 60px 25px;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar-track { 
      background-color:#dddddd;
    } 

    &::-webkit-scrollbar-thumb { 
      background-color: #acacac;
      transition: all .4s;
    }   
    &::-webkit-scrollbar{ 
      width: 10px; 
    }
  }
  &__toggle {
    position: absolute;
    top: 10px;
    left: 100%;
    right: auto;
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

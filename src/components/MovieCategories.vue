<template>
<div class="movie-categories">
  <h2 class="movie-categories__title">Categories</h2>
  <ul class="movie-categories__list">
    <router-link v-for="item in genres"
                 :to="{ name: 'movies', params: { idGenres: item.id, nameGenres: item.name.toLowerCase() } }"
                 :key="item.id"
                 tag="li"
                 class="movie-categories__item"
                 active-class="movie-categories__item_active"
    >
      <a class="movie-categories__link" :data-hover="item.name">{{ item.name  }}</a>
    </router-link>
  </ul>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('movies', [ 'genres' ])
  },
  methods: {
    ...mapActions('movies', {
      getGenres: 'getGenres'
    })
  },
  mounted() {
    this.getGenres();
  }
}
</script>
<style lang="scss" scoped>
.movie-categories {
  &__title {
    padding-bottom: 15px;
    margin-bottom: 25px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #ffffff;
  }
  &__item {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    &_active {
      a {
        color: #ffffff;
      }
    }
  }
  &__link {
    position: relative;
    display: block;
    color: #797979;
    font-weight: 300;
    font-size: 14px;
    &:before {
      content: attr(data-hover);
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      max-width: 0;
      color: #fff;
      white-space: nowrap;
      transition: max-width .6s;
    }
    &:hover {
      &:before {
        max-width: 100%;
      }
    }
  }
}
</style>

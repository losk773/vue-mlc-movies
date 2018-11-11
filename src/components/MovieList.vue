<template>

<div :class="['movies', {'movies_loading': loading}]">
  <spinner v-if="loading"></spinner>
  <template v-else>
    <h2 class="movies__title">Categories>{{ nameGenres | capitalize }}</h2>
    <div class="movies__grid">
      <div  v-for="movie in moviesList"
            :key="movie.id"
            class="movie">
        <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path"
            class="movie__poster" 
            :alt="movie.title">
        <h3 class="movie__title">{{ movie.title }}</h3>
        <p class="movie__desc">{{ movie.overview | truncate }}</p>
      </div>
    </div>
  </template>
</div>
</template>
<script>

import Spinner from './Spinner';

import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  components: {
    Spinner
  },
  props: [
    'idGenres', 
    'nameGenres'
  ],
  computed: {
    ...mapGetters('movies', ['moviesList', 'loading'])
  },
  methods: {
    ...mapActions('movies', ['getMoviesInGenres'])
  },
  mounted() {
    this.getMoviesInGenres(this.idGenres);
  },
  watch: {
    '$route' (to, from) {
      this.getMoviesInGenres(this.idGenres);
    }
  },
  filters: {
    capitalize: (value) => {
      if (!value) return ''
      value = value.toString();

      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    truncate: (value) => {
      return value.substring(0, 150);
    }
  }
}
</script>
<style lang="scss" scoped>
.movies {
  &__grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &.movies_loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
}

.movie {
  width: 300px;
  margin-bottom: 30px;

  .movie__title {
    margin: 10px 0;
    font-weight: 500;
    font-size: 18px;
  }

  .movie__desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  .movie__poster {
    max-width: 100%;
  }
}
</style>

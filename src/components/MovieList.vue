<template>
<div class="movies">
  <h1 class="movies__title">{{ nameGenres | capitalize }}</h1>
  <div class="movies__grid">
    <div  v-for="movie in moviesList"
          :key="movie.id"
          class="movie">
      <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path"
           class="movie__poster" 
           :alt="movie.title">
      <h2 class="movie__title">{{ movie.title }}</h2>
      <p class="movie__desc">{{ movie.overview | truncate }}</p>
    </div>
  </div>
</div>
</template>
<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  props: [
    'idGenres', 
    'nameGenres'
  ],
  computed: {
    ...mapGetters('movies', ['moviesList'])
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
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
.movie {
  width: 20%;
  margin-bottom: 30px;
  &__title {
    font-weight: 500;
    font-size: 18px;
  }
  &__desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
  &__poster {
    max-width: 100%;
  }
}
</style>

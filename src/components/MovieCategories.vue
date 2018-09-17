<template>
<div class="movie-categories">
  <h2 class="movie-categories__title">Categories</h2>
  <ul class="movie-categories__list">
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Horrors">Horrors</a></li>
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Popular 250">Popular 250</a></li>
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Comedy">Comedy</a></li>
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Serials">Serials</a></li>
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Fantastic">Fantastic</a></li>
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Horrors">Horrors</a></li>
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Popular 250">Popular 250</a></li>
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Comedy">Comedy</a></li>
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Serials">Serials</a></li>
    <li class="movie-categories__item"><a class="movie-categories__link" href="#" data-hover="Fantastic">Fantastic</a></li>
  </ul>
</div>
</template>
<script>
export default {
  
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
    margin-bottom: 25px;
  }
  &__link {
    position: relative;
    display: block;
    color: #797979;
    font-weight: 400;
    font-size: 18px;
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

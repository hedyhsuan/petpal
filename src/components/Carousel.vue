<template>
  <div class="container">
    <div class="main_slider">
      <Carousel
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="3000"
        :pauseAutoplayOnHover="true"
        :breakpoints="breakpoints"
      >
        <Slide v-for="slide in picsrc" :key="slide.id">
          <div class="carousel__item">
            <img :src="slide.imageUrl" alt="" />
          </div>

        </Slide>

        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  props: ['picsrc'],
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  setup () {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'center'
      },
      breakpoints: {
        390: {
          itemsToShow: 1,
          snapAlign: 'center'
        },
        // 700px and up
        768: {
          itemsToShow: 2,
          snapAlign: 'start'
        },
        // 1024 and up
        1200: {
          itemsToShow: 3,
          snapAlign: 'start'
        }
      }
    }
  }
}
</script>

<style scoped>
.carousel__item {
  width: 100%;
  height: 100%;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
}

.carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.main_slider {
  margin-top: 100px;
  margin-bottom: 100px;
}
.carousel__pagination {
  padding: 0;
}
</style>

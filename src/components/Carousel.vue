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
        <h6>紀媽狗園</h6>
        <Slide v-for="slide in picsrc" :key="slide.id">
          <div class="carousel_info">
            <div class="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                />
                <path
                  d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                /></svg
              >˝
              <p>位置：</p>
            </div>

            <p>電話：</p>
          </div>
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

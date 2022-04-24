<template>
  <div>
    <loading :active="isLoading" />
    <div class="container">
      <div class="promote row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        <div v-if="favorite.length === 0" class="text-center mx-auto">
          <h5>還沒有任何收藏喔</h5>
          <button
            type="button"
            class="btn btn-primary mt-3"
            style="color: white"
          >
            <router-link to="/shelter/allselter" FavoriteView.vue
              >來去逛逛</router-link
            >
          </button>
          <div class="mt-5">
            <img src="https://imgur.com/RPJ2acE.jpg" alt="" />
          </div>
        </div>
        <CardCarousel
          class="col"
          v-for="(item, index) in favorite"
          :key="index"
          :selectitem="item"
        ></CardCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import CardCarousel from '@/components/CardCarousel.vue'
export default {
  data () {
    return {
      isLoading: false,
      hearted: JSON.parse(localStorage.getItem('hearted')) || [],
      selterIntro: [],
      favorite: []
    }
  },
  components: {
    CardCarousel
  },
  methods: {
    getShelter () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      const vm = this
      // 先取得各園的資料
      this.$http.get(url).then((res) => {
        this.isLoading = false
        vm.products = res.data.products
        vm.products.forEach((item) => {
          if (item.introFile === 1) {
            vm.selterIntro.push(item)
          }
        })
        vm.selterIntro.forEach((item) => {
          vm.hearted.forEach((item2) => {
            if (item.category === item2) {
              vm.favorite.push(item)
            }
          })
        })
      })
    }
  },
  watch: {},
  mounted () {
    this.getShelter()
  }
}
</script>
<style scoped>
.promote {
  margin-top: 100px;
}
</style>

<template>
  <div class="container">
    <div class="promote row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
    <CardCarousel
      class="col"
      v-for="(item, index) in favorite"
      :key="index"
      :selectitem="item"
    ></CardCarousel>
  </div>
  </div>
</template>
<script>
import CardCarousel from '../components/CardCarousel.vue'
export default {
  data () {
    return {
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
      const vm = this
      // 先取得各園的資料
      this.$http.get(url).then((res) => {
        vm.products = res.data.products
        vm.products.forEach((item) => {
          if (item.introFile === 1) {
            vm.selterIntro.push(item)
          }
        })
        console.log(vm.selterIntro)
        vm.selterIntro.forEach((item) => {
          vm.hearted.forEach((item2) => {
            if (item.category === item2) {
              vm.favorite.push(item)
            }
          })
        })
      })
    }
    // getFavotite () {
    //   const vm = this
    //   //   在各園中過濾出收藏商品
    //   vm.selterIntro.forEach((item) => {
    //     vm.hearted.forEach((item2) => {
    //       if (item.category === item2) {
    //         vm.favorite.push(item)
    //       }
    //     })
    //   })
    // }
  },
  watch: {
    // selterIntro: function () {
    //   const vm = this
    //   vm.selterIntro.forEach((item) => {
    //     console.log('1')
    //     vm.hearted.forEach((item2) => {
    //       if (item.category === item2) {
    //         vm.favorite.push(item)
    //       }
    //     })
    //   })
    //   console.log(vm.vm.favorite)
    // }
  },
  mounted () {
    this.getShelter()
  }
}
</script>
<style scoped>
.promote{
    margin-top:100px ;
}

</style>

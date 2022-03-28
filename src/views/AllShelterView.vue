<template>
  <div class="container">
    <div class="btn_group">
      <button class="button-38" role="button" @click="area = ''">
        全部愛園
      </button>
      <button class="button-38" role="button" @click="area = '北部'">
        北部
      </button>
      <button class="button-38" role="button" @click="area = '中部'">
        中部
      </button>
      <button class="button-38" role="button" @click="area = '南部'">
        南部
      </button>
    </div>
    <div class="mian">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div
          class="product_item col-12"
          v-for="shelter in sortIntro"
          :key="shelter.id"
        >
          <div class="shelter_card">
            <div class="topinfo">
              <div class="left">
                <span class="d-block mb-3 mx-3">{{ shelter.category }}</span>
              </div>
              <div class="right"></div>
            </div>
            <div class="product_cover">
              <a
                href="#"
                class="imglink"
                @click.prevent="goShelter(shelter.category)"
              >
                <img :src="shelter.imageUrl" class="img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data () {
    return {
      products: [],
      selterIntro: [],
      area: ''
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      const vm = this
      this.$http.get(url).then((res) => {
        vm.products = res.data.products
        vm.products.forEach((item) => {
          if (item.introFile === 1) {
            vm.selterIntro.push(item)
          }
        })
      })
    },

    goShelter (id) {
      this.$router.push(`${id}`)
    }
  },
  computed: {
    sortIntro () {
      if (this.area === '') {
        return this.selterIntro
      } else {
        return this.selterIntro.filter((item) => {
          if (item.area === this.area) {
            return item
          }
        })
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
/*btn */
.btn_group {
  display: flex;
  justify-content: center;
  margin: 0 auto 50px;
}
.button-38 {
  margin: 10px;
  background-color: #ffffff;
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-38:hover {
  background-color: rgb(249, 250, 251);
}

.button-38:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.button-38:focus-visible {
  box-shadow: none;
}
.shelter_card {
  height: 90%;
}
.product_cover {
  position: relative;
  box-shadow: 0 15px 10px -15px rgb(0 0 0 / 30%);
  height: 100%;
}
.product_item {
  /* margin:0 10px 60px 10px; */
  margin-bottom: 60px;
  padding: 0 20px;
}
.imglink img {
  opacity: 0.8;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1 solid #ddd;
  border-radius: 10px;
}
</style>

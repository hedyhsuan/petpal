<template>
  <div
    class="container product-wrap"
    v-for="item in introProduct"
    :key="item.id"
  >
    <div class="row">
      <div class="product-left col-md-7">
        <div>
          <img class="w-100" :src="item.imageUrl" alt="" />
        </div>
      </div>
      <div class="product-right col-md-5 p-4">
        <h5>{{ item.category }}</h5>
        <div class="d-flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
              />
            </svg>
          </div>
          <p class="mx-2">加入收藏</p>
        </div>

        <div class="product-option" v-for="item in sortProduct" :key="item.id">
          <div class="mt-3">
            <div class="d-flex justify-content-between">
              <button
                class="button-38"
                role="button"
                @click="clickedItem(item)"
              >
                {{ item.title }}
              </button>
              <div class="goal mx-3 d-flex">
                <div
                  class="circle d-flex justify-content-center align-items-center"
                >
                  <div style="color: #51c951">40%</div>
                </div>
                <div class="mx-4">
                  <div style="font-size: 1rem; font-weight: bold">
                    目前數量<span class="mx-2">75</span>{{ item.unit }}
                  </div>
                  <div style="font-size: 0.75rem">
                    需求數量<span class="mx-2">{{ item.requiredQty }}</span
                    >包
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex"
          style="
            margin: 30px 10px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
          "
        >
          <h5>NT.{{ donateItem.price }}</h5>
          <h5 class="mx-5">/ {{ donateItem.unit }}</h5>
        </div>

        <div class="input-group">
          <button class="btn down" @click="btnMinus">-</button>
          <input
            type="text"
            class="text-center quantity"
            v-model="donateItem.num"
          />
          <button class="btn up" @click="btnPlus">+</button>
        </div>
        <div class="addCart" @click.prevent="addtoCart()">加入購物車</div>
      </div>
    </div>
    <div class="mainIntro col-12">
      <div class="introText">
        <p>地址：宜蘭縣文話一村三普李332-1號</p>
        <p>電話：092348923-018</p>
        <div>
          {{ item.content }}
        </div>
      </div>

      <div
        class="introPics"
        v-for="(pics, index) in item.imagesUrl"
        :key="index"
      >
        <img :src="pics" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      shelterName: '',
      sortProduct: [],
      // 撈同一間愛園的資料
      introProduct: [],
      // 愛園中有介紹資料的一筆
      donateItem: {
        num: '1'
      },

      cart: []
    }
  },
  methods: {
    getProduct () {
      const vm = this
      vm.shelterName = this.$route.params.id
      //   const url = `https://vue3-course-api.hexschool.io/v2/api/houhsuan/product/${id}`
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        this.products.forEach((item) => {
          // 從所有商品中將同一個愛園的資料抓出來
          if (item.category === vm.shelterName) {
            vm.sortProduct.push(item)
            vm.donateItem = vm.sortProduct[0]
          }
        })
        console.log(vm.sortProduct[0])
        // 把有介紹資料的資料抓出來
        this.sortProduct.forEach((item) => {
          if (item.introFile === 1) {
            vm.introProduct.push(item)
          }
        })
      })
    },
    // 點擊確認要下單的品項
    clickedItem (item) {
      this.donateItem = item
      this.donateItem.num = 1

      console.log(this.donateItem)
    },
    btnPlus () {
      this.donateItem.num++
    },
    btnMinus () {
      if (this.donateItem.num < 2) {
        this.donateItem.num = 1
      } else {
        this.donateItem.num--
      }
    },

    addtoCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const item = {
        product_id: this.donateItem.id,
        qty: this.donateItem.num
      }
      this.$http.post(url, { data: item }).then((res) => {
        alert(res.data.message)
      })
    },

    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const vm = this
      this.$http.get(url).then((res) => {
        vm.cart = res.data.data.carts
        // console.log(vm.cart)
      })
    }
  },
  mounted () {
    this.getProduct()
    // this.getCart()
  }
}
</script>

<style scoped>
.product-right {
  border: 1px solid #ccc;
}
.product-wrap {
  margin-top: 70px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .product-wrap {
    margin-top: 70px;
  }
}
@media (max-width: 575px) {
  .product-wrap {
    margin-top: 30px;
  }
}

.product-option {
  /* border-top: 1px solid #ccc; */
}
/*btn */
.btn_group {
  display: flex;
  justify-content: start;
}
.button-38 {
  margin: 10px;
  background-color: #ffffff;
  border: 0;
  /* border-radius: 0.5rem; */
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
/* input */
.input-group {
  margin: 30px 10px;
}
.input-group .btn {
  background-color: #fff;
  border: 1px solid black;
  border-radius: 0;
}
.btn .up {
}
.input-grounp .quantity {
  width: 50px;
  border-radius: 0;
}
.quantity {
  padding: 6px 12px;
  border: 1px solid #ccc;
  width: 50px;
}
.addCart {
  margin: 10px;
  padding: 10px 0;
  text-align: center;
  background-color: #fff;
  color: #000;
  transition: all 0.2s ease-in;
  cursor: pointer;
}
.addCart:hover {
  background-color: #5d8964;
  color: #fff;
}

.goal {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.circle {
  border-radius: 50%;
  border: 3px solid #51c951;
  height: 50px;
  width: 50px;
}
.mainIntro {
  margin-top: 100px;
  /* text-align: center; */
}
.introPics {
}
.mainIntro img {
  width: 100%;
  margin-top: 45px;
}
.introText {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
</style>

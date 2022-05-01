<template>
  <div>
    <loading :active="isLoading" />
    <div
      class="container product-wrap"
      v-for="item in introProduct"
      :key="item.id"
    >
      <div class="row product">
        <div class="product-left col-lg-7 col-md-6">
          <div>
            <img class="w-100" :src="item.imageUrl" alt="中途之家主圖" />
          </div>
        </div>
        <div class="product-right col-lg-5 col-md-6">
          <div class="d-flex justify-content-between mx-2">
            <h5>{{ item.category }}</h5>
            <div class="addFav" @click="switchHeart(item)">
              <i :class="changeIcon"></i>
            </div>
          </div>

          <div
            class="product-option"
            v-for="item in sortProduct"
            :key="item.id"
          >
            <div class="mt-3">
              <div class="d-flex justify-content-between">
                <button
                  type="button"
                  class="button-38"
                  :class="{ active: activeName == item.title }"
                  role="button"
                  @click="clickedItem(item, item.title)"
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
                      >{{ item.unit }}
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
            <button type="button" class="btn down" @click="btnMinus">-</button>
            <input
              type="text"
              class="text-center quantity"
              v-model="donateItem.num"
            />
            <button type="button" class="btn up" @click="btnPlus">+</button>
          </div>
          <button
            :disabled="disabled === true"
            type="button"
            class="addCart"
            @click="addtoCart()"
          >
            加入購物車
          </button>
        </div>
      </div>

      <div class="mainIntro col-12">
        <div class="col-12 d-flex justify-content-center paw">
          <img src="https://imgur.com/v6RZO4g.jpg" alt="狗掌印" />
        </div>
        <div class="introText">
          <p>
            地址：<span>{{ item.location }}</span>
          </p>
          <p>
            電話：<span>{{ item.tel }}</span>
          </p>
          <div>
            {{ item.content }}
          </div>
        </div>

        <div
          class="introPics"
          v-for="(pics, index) in item.imagesUrl"
          :key="index"
        >
          <img :src="pics" alt="中途之家環境照" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      isLoading: false,
      disabled: false,
      products: [],
      // 所有後台商品
      shelterName: '',
      // 用params抓到的id(愛園名稱)
      hearted: JSON.parse(localStorage.getItem('hearted')) || [],
      sortProduct: [],
      // 過濾出同一間愛園的資料
      introProduct: [],
      // 愛園中有介紹資料的一筆
      donateItem: {
        num: '1'
      },
      activeName: '罐罐',
      sortArea: [],
      index: '',
      orders: []
      // 所有訂單
    }
  },
  methods: {
    getProduct () {
      const vm = this
      vm.shelterName = this.$route.params.id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.isLoading = false
        vm.products = res.data.products
        vm.products.forEach((item) => {
          // 從所有商品中將同一個愛園的資料抓出來
          if (item.category === vm.shelterName) {
            vm.sortProduct.push(item)

            vm.donateItem = vm.sortProduct[0]
            vm.donateItem.num = 1
            // 先把第一筆資料撈出來顯示畫面上的價錢/單位
          }
        })
        // 把有介紹資料的資料抓出來
        vm.sortProduct.forEach((item) => {
          if (item.introFile === 1) {
            vm.introProduct.push(item)
          }
        })
        // 把同區域的愛園資料
        vm.sortArea = vm.products.filter((item) => {
          if (item.introFile === 1 && item.area === vm.donateItem.area) {
            // 撈出有介紹資料且同區的
            return item.id !== vm.donateItem.id
            // 將本頁的商品過濾掉
          }
        })
        console.log(vm.sortArea)
      })
    },
    // 點擊確認要下單的品項
    clickedItem (item, title) {
      this.donateItem = item
      this.donateItem.num = 1
      this.activeName = title
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
    switchHeart (select) {
      this.hearted = JSON.parse(localStorage.getItem('hearted')) || []
      this.index = this.hearted.findIndex((item) => {
        return select.category === item
        // 如果點擊的內容是已關注的商品就存取他的索引值做為刪除的目標
      })

      if (this.hearted.indexOf(select.category) === -1) {
        this.hearted.push(select.category)
        // 如果點擊的item的id沒有在已關注區就塞進去
        localStorage.setItem('hearted', JSON.stringify(this.hearted))
      } else {
        this.hearted.splice(this.index, 1)
        // 如果已經在裡面就用前面得到的index刪掉它
        localStorage.setItem('hearted', JSON.stringify(this.hearted))
      }
    },

    addtoCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.disabled = true
      const item = {
        product_id: this.donateItem.id,
        qty: this.donateItem.num
      }
      this.$http.post(url, { data: item }).then((res) => {
        this.disabled = false
        emitter.emit('get-cart')
        // 更新上方小購物車數字
        // sweet alert
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: false,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: '已加入購物車'
        })
      })
    }
  },
  computed: {
    changeIcon () {
      if (this.hearted.indexOf(this.shelterName) === -1) {
        return 'icon bi-suit-heart-fill heart'
      } else {
        return 'icon bi-suit-heart-fill hearted'
      }
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped>
.product-right {
  /* border: 1px solid #ccc; */
  padding: 10px 20px;
}
@media (max-width: 767px) {
  .product-right {
    margin-top: 30px;
  }
}
.product-left {
  padding: 10px;
  /* border-bottom: 2px solid #3c6042; */
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
.product {
  margin-bottom: 100px;
}
.addFav {
  /* position: absolute; */
  width: 35px;
  height: 35px;
  border: 1px solid #849387;
  border-radius: 50%;
  background-color: #d5e3d5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(189, 189, 189);
  cursor: pointer;
}
.heart {
  color: white;
}
.hearted {
  color: #3c6042;
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
.btn-active {
  background-color: #5d8964;
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
  border: 0px;
  width: 100%;
  margin: 10px auto;
  padding: 10px 0;
  text-align: center;
  background-color: #bfd7c3;
  color: #3c6042;
  transition: all 0.15s ease-in;
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

.paw {
  margin-bottom: 100px;
}
.paw img {
  width: 40px;
}
.mainIntro {
  margin-top: 100px;
  max-width: 800px;
  margin: 0 auto;

  /* text-align: center; */
}
.introPics {
}
.introPics img {
  width: 100%;
  margin-top: 45px;
}
.introText {
  /* width: 60%; */
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.active {
  background-color: #5d8964;
  color: white;
}
.active:hover {
  background-color: #5d8964;
  color: white;
}
</style>

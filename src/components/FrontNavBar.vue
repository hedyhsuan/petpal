<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">PetPal</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/shelter/allselter"
              >愛園一覽</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">
              <span>
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
                收藏</span
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">登入</router-link>
          </li>
        </ul>
      </div>

      <div class="cart dropdown" style="cursor: pointer" @click="gocart()">
        <div
          class=""
          id="cartDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div class="d-flex">
            <div class="position-relative me-md-2">
              <i class="bi bi-cart-fill"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ carts.length }}</span
              >
            </div>
            <span class="d-none d-md-block">購物車</span>
          </div>
        </div>

        <!-- 下拉選單 -->
        <div class="dropdown-content" aria-labelledby="cartDropdown">
          <div>
            <div class="minicart">
              <h6 class="minicart-header">購物車</h6>
              <ul class="minicart-body">
                <li
                  class="d-flex justify-content-between align-items-center border-bottom-1 p-2"
                  v-for="item in carts"
                  :key="item.id"
                >
                  <div>
                    <div style="font-size: 16px; font-weight: bold">
                      {{ item.product.category }}
                    </div>
                    <div class="d-flex">
                      <div></div>
                      <div style="font-size: 14px">
                        {{ item.product.title }}
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-between"
                      style="font-size: 14px"
                    >
                      <span>數量：</span>
                      <input
                        min="1"
                        type="number"
                        class="form-control"
                        v-model.number="item.qty"
                        @change="updateCart(item.id)"
                      />
                      <!-- <span>{{ item.qty }}</span> -->
                    </div>
                  </div>
                  <div class="delCart" @click="delProduct(item.id)">
                    <i class="bi bi-trash-fill"></i>
                  </div>
                </li>
              </ul>
              <div class="text-end">
                <p>
                  小計 <span>{{ cartData.total }}</span> 元
                </p>
              </div>
            </div>
            <div
              class="cart-body overflow-auto h-100 p-2"
              style="max-height: 70vh"
            >
              <router-link to="/cart">結帳</router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="mx-2">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bookmark-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
            />
          </svg>
        </a>
        <span class="mx-2">收藏</span>
      </div> -->

      <!-- <div class="d-flex mx-2">
        <a href="#" class="position-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {{ cartData.carts.length }}
            <span class="visually-hidden">unread messages</span>
          </span>
        </a>
        <span class="mx-2">購物車</span>
      </div> -->
    </div>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      isLoadingItem: '',
      cartData: {},
      carts: {},
      hearted: [],
      heartQuantity: ''
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cartData = res.data.data
        this.carts = res.data.data.carts
        // console.log(this.cartData)
      })
    },
    getHearted () {
      this.hearted = JSON.parse(localStorage.getItem('hearted')) || []
      // 每次觸發都要重新撈一次vm.hearted來做更新
      // 若local端還沒有任何資料則vm.hearted.length程式會判斷為null.length並跳錯
      // 因此一定要加|| []
      this.heartQuantity = this.hearted.length
    },
    updateCart (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.put(url).then((res) => {
        alert(res.data.message)
        this.getCart()
        // 更新上方小購物車數量
      })
    },
    delProduct (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        alert(res.data.message)
        this.getCart()
        // 更新上方小購物車數量
      })
    },
    gocart () {
      this.$router.push('/cart')
    }
  },

  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
      // 當監聽到get-cart就觸發
    })
  }
}
</script>

<style scoped>
.cart {
  color: rgba(0, 0, 0, 0.55);
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  right: -50px;
  width: 265px;
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.cart-body {
  border-top: 1px solid #ddd;
  text-align: center;
  line-height: 52px;
}

.minicart {
  padding: 10px;
}
.minicart-header {
  margin: 10px;
  text-align: center;
}
.minicart-body {
  padding: 10px;
}
.delCart {
  color: #94a597;
}
.delCart:hover {
  color: #5d8964;
}
</style>

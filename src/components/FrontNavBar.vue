<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">PetPal</router-link>
      <!-- 小購物車 -->
      <div class="cart dropdown ms-auto order-lg-3" style="cursor: pointer">
        <div
          class=""
          id="cartDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div @click="gocart()">
            <div class="position-relative me-md-2">
              <i class="bi bi-cart-fill"></i>
              <span
                :class="{ 'd-none': !carts.length }"
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ carts.length }}</span
              >
            </div>
            <span class="d-none d-md-block"></span>
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
                      <!-- <span>{{ item.qty }}</span> -->
                      <input
                        style="width: 100px; height: 30px"
                        :disabled="disabled === true"
                        min="1"
                        type="number"
                        class="form-control"
                        v-model.number="item.qty"
                        @change="updateCart(item.id, item.qty)"
                      />
                    </div>
                  </div>
                  <div
                    class="delCart"
                    @click="delProduct(item.id, item.product.category)"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </div>
                </li>
              </ul>
              <div v-if="cartData.total > 0" class="text-end">
                <p>
                  小計 <span>{{ cartData.total }}</span> 元
                </p>
              </div>
              <div v-else class="text-center">
                <h6>購物車內尚無商品</h6>
              </div>
            </div>

            <div
              class="cart-body overflow-auto h-100 p-2"
              style="max-height: 70vh"
            >
              <router-link to="/checkout">結帳</router-link>
            </div>
          </div>
        </div>
      </div>

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
      <!-- 漢堡按鈕dropdown -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/shelter/allselter"
              @click="hideDropdown"
            >
              <span>
                <i class="bi bi-file-earmark-image"></i>
                愛園一覽</span
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/favorite" @click="hideDropdown">
              <span>
                <i class="bi bi-suit-heart-fill"></i>
                收藏</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter'
import { Collapse } from 'bootstrap'

export default {
  data () {
    return {
      isLoadingItem: '',
      cartData: {},
      carts: {},
      hearted: [],
      heartQuantity: '',
      disabled: false
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`

      this.$http.get(url).then((res) => {
        this.cartData = res.data.data
        this.carts = res.data.data.carts
      })
    },
    getHearted () {
      this.hearted = JSON.parse(localStorage.getItem('hearted')) || []
      // 每次觸發都要重新撈一次vm.hearted來做更新
      // 加|| []若local端還沒有任何資料則vm.hearted.length程式會判斷為null.length並跳錯
      this.heartQuantity = this.hearted.length
    },
    delProduct (id, category) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        emitter.emit('update-cart')
        // 更新上方小購物車
        this.getCart()

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
          title: `已刪除${category}`
        })
      })
    },
    gocart () {
      this.$router.push('/cart')
    },
    updateCart (id, qty) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.disabled = true
      const item = {
        product_id: id,
        qty: qty
      }
      this.$http.put(url, { data: item }).then((res) => {
        this.disabled = false
        this.getCart()
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
          title: '已更新購物車'
        })
      })
    },
    hideDropdown () {
      const Dropdown = document.getElementById('navbarSupportedContent')
      const myDropdown = new Collapse(Dropdown, {
        toggle: false
      })
      myDropdown.hide()
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
.navbar-toggler {
  border: none;
}

@media (max-width: 992px) {
  .navbar-collapse {
    background-color: white;
    padding: 10px;
  }
}
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
@media (max-width: 767px) {
  .dropdown:hover .dropdown-content {
    display: none;
  }
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

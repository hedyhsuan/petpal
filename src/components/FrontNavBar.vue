<template>
  <nav class="navbar navbar-expand-lg navbar-light">
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

      <div class="cart dropdown " style="cursor:pointer;">
        <div
          class=""
          id="cartDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div class="d-flex">
            <div class="position-relative me-md-2">
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
                {{ cartData.carts.length }}</span
              >
            </div>
            <span class="d-none d-md-block">購物車</span>
          </div>
        </div>
        <div class="dropdown-menu" aria-labelledby="cartDropdown">
          <div>
            <div class="cart-header py-4 d-flex flex-column align-items-center border-bottom-2">
              <p class="fs-4 fw-bold text-primaryDark letter-md-spacing border-primary">購物車</p>
            </div>
            <div class="cart-body overflow-auto h-100 p-2" style="max-height:70vh">
               <ul class="h-100">
                 <li class="d-flex align-items-center w-100">
                   <div>3294u1jeiqodw</div>
                 </li>
               </ul>
            </div>

          </div>
        </div>

        <!-- <span class="position-relative d-flex">
            <div>
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
            </div>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartData.carts.length }}
              <span class="visually-hidden">unread messages</span>
            </span>

            購物車</span
          > -->
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
      cartData: {
        carts: []
      },
      isLoadingItem: ''
    }
  },
  methods: {
    getCart () {
      const api = 'https://vue3-course-api.hexschool.io/v2/api/houhsuan/cart'
      this.$http.get(api).then((res) => {
        this.cartData = res.data.data
        // console.log(this.cartData)
      })
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
svg{ }
<style scoped>
.cart {
  color: rgba(0, 0, 0, 0.55);
}
</style>

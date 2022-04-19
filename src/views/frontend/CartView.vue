<template>
  <div>
    <loading :active="isLoading" />
    <div class="container">
      <div class="cart_page">
        <div class="cart-contain">
          <div class="">
            <div class="step-panel d-flex">
              <div class="step active">確認購物車內容</div>
              <div class="step">填寫訂購資料</div>
              <div class="step">購物完成!</div>
            </div>
            <div class="orderlist row" v-if="data.total > 0">
              <div class="col-12 col-lg-7 mb-5">
                <h5 class="">購物清單</h5>
                <table id="checkoutList" class="w-100 mt-4">
                  <tbody>
                    <tr v-for="item in cartData" :key="item.id">
                      <td width="80">
                        <button
                          type="button"
                          class="btn btn-outline-primary btn-sm"
                          @click="delProduct(item.id)"
                        >
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </td>
                      <td width="120">
                        <div class="cart-title">
                          {{ item.product.category }}
                        </div>
                      </td>
                      <td width="80">
                        <div class="cart-title">{{ item.product.title }}</div>
                      </td>
                      <!-- <td>{{item.price|currency}}</td> -->
                      <td class="text-center" width="100">
                        <input
                          min="1"
                          type="number"
                          class="form-control"
                          v-model.number="item.qty"
                          @change="updateCart(item.id, item.qty)"
                        />
                      </td>

                      <td class="text-end" width="80">NT.{{ item.total }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-12 col-lg-5 total">
                <div class="text-end">
                  總金額：
                  <span class="h5">NT.{{ data.total }}</span>
                </div>
                <div class="addCart" @click.prevent="Checkout()">結帳去</div>
              </div>
            </div>
            <div v-else class="text-center">
              <h5>購物車內尚無商品</h5>
            </div>
          </div>
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
      data: [],
      cartData: [],
      products: [],
      isLoadingItem: ''
      // 轉圈效果
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      const vm = this
      this.$http.get(url).then((res) => {
        this.isLoading = false
        vm.data = res.data.data
        vm.cartData = res.data.data.carts
      })
    },
    updateCart (id, qty) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      const item = {
        product_id: id,
        qty: qty
      }
      this.$http.put(url, { data: item }).then((res) => {
        // 同品項不累加
        emitter.emit('get-cart')
        // 更新上方小購物車內容

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
    delProduct (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        this.getCart()
        emitter.emit('get-cart')
        // 更新上方小購物車數量

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
          title: '已刪除'
        })
      })
    },

    deleteAll () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message)
          emitter.emit('get-cart')
        })
        .catch((res) => {
          alert(res.data.message)
        })
    },
    Checkout () {
      this.$router.push('/checkout')
    }
  },

  mounted () {
    this.getCart()
  }
}
</script>

<style scoped>
.cart-contain {
  max-width: 900px;
  margin: 0px auto;
}
.cart_page {
  min-height: 500px;
  padding-top: 100px;
  padding-bottom: 100px;
}
.orderlist div {
  /* padding: 10px; */
  /* margin: 0px 10px; */
}
.step-panel {
  margin-bottom: 50px;
}
.step {
  width: 100%;
  text-align: center;
  background-color: ;
  color: #3c6042;
  padding: 10px;
  margin: 0 10px;
  border: 1px solid #ddd;
}
.active {
  background-color: #bfd7c3;
}
.addCart {
  margin: 10px 0;
  padding: 10px 0;
  text-align: center;
  background-color: #bfd7c3;
  color: #3c6042;
  color: #000;
  transition: all 0.2s ease-in;
  cursor: pointer;
}
.addCart:hover {
  background-color: #5d8964;
  color: #fff;
}
.total {
  display: flex;
  flex-direction: column;
  justify-content: end;
}
</style>

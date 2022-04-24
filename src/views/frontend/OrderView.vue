<template>
  <div class="container">
    <div class="order-page">
      <div class="order-contain">
        <div class="step-panel d-flex">
          <div class="step">確認購物車內容</div>
          <div class="step">填寫訂購資料</div>
          <div class="step active">購物完成!</div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h5 class="px-2">訂單明細</h5>
            <table id="checkoutList" class="w-100 mt-4">
              <tbody>
                <tr
                  v-for="item in orderlist"
                  :key="item.id"
                  class="border-bottom"
                >
                  <td width="150">
                    <div class="px-2">{{ item.product.category }}</div>
                  </td>
                  <td class="cart-item d-flex align-items-center">
                    <div class="px-3">{{ item.product.title }}</div>
                  </td>
                  <td class="text-center">{{ item.qty }}</td>
                </tr>
              </tbody>
            </table>
            <div class="my-5 text-end">
              總金額<span class="mx-3 h5">NT.{{ order.total }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <table class="table">
              <tbody>
                <tr>
                  <th>訂單編號</th>
                  <td>{{ order.id }}</td>
                </tr>
                <tr>
                  <th>下單日期</th>
                  <td>{{ order.create_at }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ user.name }}</td>
                </tr>
                <tr>
                  <th>聯絡電話</th>
                  <td>{{ user.tel }}</td>
                </tr>
                <tr>
                  <th>電子信箱</th>
                  <td>{{ user.email }}</td>
                </tr>
                <tr>
                  <th>地址</th>
                  <td>{{ user.address }}</td>
                </tr>
                <tr>
                  <th>備註</th>
                  <td></td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-success h6">付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="text-center mt-5" v-if="!order.is_paid">
          <button
            type="button"
            class="btn btn-primary"
            style="color: white"
            @click="payorder"
          >
            確認付款去
          </button>
        </div>
        <div class="text-center mt-5" v-if="order.is_paid">
          <button type="button" class="btn btn-primary" style="color: white">
            <router-link to="/shelter/allselter" FavoriteView.vue
              >再去逛逛</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      orderId: '',
      order: {},
      user: {},
      orderlist: [],
      orders: []
    }
  },
  methods: {
    getOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${vm.orderId}`
      this.$http.get(url).then((res) => {
        vm.order = res.data.order
        vm.orderlist = res.data.order.products
        vm.user = res.data.order.user
      })
    },
    getOrders () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/orders`
      this.$http.get(url).then((res) => {
        vm.orders = res.data
      })
    },
    payorder () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${vm.orderId}`
      vm.isLoading = true
      this.$http.post(url).then((response) => {
        vm.isLoading = false
        vm.getOrder()
      })
    }
  },
  mounted () {
    this.orderId = this.$route.params.id
    // params後面的參數名稱要對應router的動態名稱
    this.getOrder()
  }
}
</script>
ㄋ

<style scoped>
.order-page {
  padding-top: 100px;
  padding-bottom: 100px;
  /* min-height: 100vh */
}
.order-contain {
  max-width: 900px;
  margin: 0px auto;
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
</style>

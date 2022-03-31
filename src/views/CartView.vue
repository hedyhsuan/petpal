<template>
  <div class="">
    <div class="checkout_page">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="px-2">購物清單</h5>
            <table id="checkoutList" class="w-100 mt-4">
              <tbody>
                <tr v-for="item in cartData" :key="item.id">
                  <td>
                    <div class="cart-img" style="max-width: 120px">
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                  <td class="">
                    <div class="cart-title">{{ item.product.category }}</div>
                  </td>
                  <td class="">
                    <div class="cart-title">{{ item.product.title }}</div>
                  </td>
                  <!-- <td>{{item.price|currency}}</td> -->
                  <td class="text-center">{{ item.qty }}</td>

                  <td>{{ item.total }}</td>
                </tr>

                <tr>
                  <td class="border-bottom-0"></td>
                  <td>總金額</td>
                  <td>{{ data.total }}</td>
                </tr>
                <!-- <tr>
                  <td class="border-bottom-0"></td>
                  <td>折扣後價格</td>
                  <td style="font-size: 18px">12313</td>
                </tr> -->
              </tbody>
            </table>
            <!-- <div class="coupon-group mt-4">
              <div>
                <i class="fas fa-gift"> </i>
                開幕期間輸入lovedecor結帳即享85折
              </div>
              <div class="input-group mt-2">
                <input
                  type="text"
                  name=""
                  class="form-control rounded-0"
                  v-model="coupon_code"
                  placeholder="請輸入優惠碼"
                />
                <div class="input-group-append">
                  <button class="btn btn-dark rounded-0" @click="addCouponCode">
                    套用優惠碼
                  </button>
                </div>
              </div>
            </div> -->
          </div>

          <Form
            ref="form"
            class="col-md-6"
            v-slot="{ errors }"
            @submit="createOrder"
          >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="numeric|required|min:8|max:10"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger">送出訂單</button>
            </div>
          </Form>
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
      data: [],
      cartData: [],
      products: [],
      isLoadingItem: '',
      // 轉圈效果
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const vm = this
      this.$http.get(url).then((res) => {
        vm.data = res.data.data
        vm.cartData = res.data.data.carts
        // console.log(vm.data)
      })
    },

    // 從商品列表增加進購物車

    deleteAll () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      // const url = 'https://vue3-course-api.hexschool.io/v2/api/houhsuan/carts'
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
    createOrder () {}
  },

  mounted () {
    this.getCart()
  }
}
</script>

<style scoped>
.checkout_page {
  margin-top: 100px;
  padding-bottom: 100px;
}
</style>

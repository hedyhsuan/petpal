<template>
  <div class="container">
    <div class="checkout_page">
      <div class="checkout-contain">
        <div class="step-panel d-flex">
          <div class="step">確認購物車內容</div>
          <div class="step active">填寫訂購資料</div>
          <div class="step">購物完成!</div>
        </div>
        <div class="row">
          <div class="col-md-6 orderlist">
            <table id="checkoutList" class="w-100">
              <thead>
                <th>愛園名稱</th>
                <th>商品</th>
                <th>數量</th>
                <th>小計</th>
              </thead>
              <tbody>
                <tr v-for="item in cartData" :key="item.id">
                  <td width="150">
                    <div class="cart-title">{{ item.product.category }}</div>
                  </td>
                  <td width="80">
                    <div class="cart-title">{{ item.product.title }}</div>
                  </td>
                  <!-- <td>{{item.price|currency}}</td> -->
                  <td width="80">{{ item.qty }}</td>

                  <td width="80">NT.{{ item.total }}</td>
                </tr>
              </tbody>
            </table>
            <div class="my-5 text-end">
              小計<span class="mx-3 h5">NT.{{ data.total }}</span>
            </div>
            <div class="checkImg">
              <img
                src="https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwdGhhbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>

          <div class="col-md-6 customerInfo">
            <h6>訂購人資料</h6>
            <Form ref="form" v-slot="{ errors }" @submit="createOrder">
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
                <label for="name" class="form-label">訂購人姓名</label>
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
                <ErrorMessage
                  name="姓名"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="tel" class="form-label">訂購人電話</label>
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
                <ErrorMessage
                  name="電話"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">訂購人地址</label>
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
                <ErrorMessage
                  name="地址"
                  class="invalid-feedback"
                ></ErrorMessage>
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
                <button type="submit" class="btn sendOrder">送出訂單</button>
              </div>
            </Form>
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
    createOrder () {
      const order = this.form
      // console.log(order)

      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`

      this.$http.post(url, { data: order }).then((res) => {
        alert(res.data.message)
        emitter.emit('get-cart')
        this.$router.push(`/order/${res.data.orderId}`)

        // 觸發上方小購物車更新
        // emitter.emit('get-cart')
        // this.$router.push(`order/${res.data.orderId}`)
        // console.log(res.data.orderId)
      })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style scoped>
.checkout-contain {
  max-width: 900px;
  margin: 0px auto;
}
.checkout_page {
  padding-top: 100px;
  padding-bottom: 100px;
}
.checkoutList {
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
.sendOrder {
  background-color: #bfd7c3;
  color: #3c6042;
}
.sendOrder:hover {
  background-color: #5d8964;
  color: #fff;
}
form {
  padding: 7px 10px;
}
thead {
  background-color: #bfd7c3;
  color: #3c6042;
}
thead th {
  padding: 7px 10px;
}
tbody td {
  padding: 7px 10px;
  border-bottom: 1px dashed #ddd;
}
.customerInfo h6 {
  margin: 0;
  padding: 9px 10px;
  background-color: #bfd7c3;
  color: #3c6042;
}
.checkImg {
  border: 1px solid #ddd;
  background-color: white;
}
.checkImg img {
  width: 100%;
  opacity: 0.9;
  padding: 20px;
}
</style>

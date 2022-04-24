<template>
  <div>
    <div
      id="orderModal"
      ref="orderModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="orderModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="orderModalLabel" class="modal-title">
              <span>訂單編號:{{ form.id }}</span>
            </h5>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <h5 class="px-2">訂單明細</h5>
                <h6 class="px-2">訂單日期 ： {{ form.create_at }}</h6>

                <table id="checkoutList" class="w-100 mt-4">
                  <tbody>
                    <tr
                      v-for="item in form.products"
                      :key="item.id"
                      class="border-bottom"
                    >
                      <td width="150">
                        <div class="px-2">{{ item.product.category }}</div>
                      </td>
                      <td width="100" class="">
                        <div class="px-3">{{ item.product.title }}</div>
                      </td>
                      <td class="">
                        {{ item.qty }} <span>{{ item.product.unit }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="my-5 text-end">
                  總金額<span class="mx-3 h5">NT.{{ form.total }}</span>
                </div>
              </div>
              <div class="col-md-6 customerInfo">
                <h6>訂購人資料</h6>
                <Form ref="form" v-slot="{ errors }" @submit="updateProduct">
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
                    <button
                      type="button"
                      class="btn btn-outline-secondary me-3"
                      data-bs-dismiss="modal"
                    >
                      取消
                    </button>
                    <button type="submit" class="btn btn-primary" style="color:white;">確認</button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
export default {
  data () {
    return {
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
  props: ['order'],
  inject: ['emitter'],
  methods: {
    updateProduct () {
      const order = this.form
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.order.id}`
      this.$http.put(url, { data: order }).then((res) => {
        this.$emit('update')
        // 更新畫面資料
        this.hideModal()
      })
    },
    openModal () {
      this.orderModal.show()
    },
    hideModal () {
      this.orderModal.hide()
    }
  },
  watch: {
    order () {
      this.form = JSON.parse(JSON.stringify(this.order))
      console.log(this.form)
    }
  },
  mounted () {
    this.orderModal = new Modal(this.$refs.orderModal)
  }
}
</script>

<template>
  <loading :active="isLoading" />
  <div class="container">
    <div class="py-3">
      <h3>訂單管理</h3>
      <table class="table mt-4">
        <thead>
          <tr>
            <th class="text-center" width="80">序號</th>
            <th width="150">下單日期</th>
            <th>訂單編號</th>
            <th>訂購人</th>
            <th>下單金額</th>
            <th width="80">付款</th>
            <th width="120"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td class="text-center">{{ item.num }}</td>
            <td>{{ item.create_at }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.user.name }}</td>
            <td>{{ item.total }}</td>
            <td v-if="item.is_paid" class="text-success">已付款</td>
            <td v-else>未付款</td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                style="color: white"
                @click="openModal(item)"
              >
                訂單詳情
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openDel(item)"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :page="pagination" @switch-page="getOrders"> </pagination>
      <order-modal
        ref="orderModal"
        :order="tempOrder"
        @update="getOrders"
      ></order-modal>
      <del-order-modal
        ref="delOrderModal"
        :delItem="delItem"
        @update="getOrders"
      ></del-order-modal>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination.vue'
import orderModal from '@/components/OrderModal.vue'
import delOrderModal from '@/components/DelOrderModal.vue'

export default {
  components: {
    pagination,
    orderModal,
    delOrderModal
  },
  data () {
    return {
      orders: [],
      pagination: {},
      isLoading: false,
      tempOrder: {},
      delItem: {}
    }
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      const vm = this
      this.$http.get(url).then((response) => {
        vm.isLoading = false
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
      })
    },
    openDel (item) {
      const delOrderCom = this.$refs.delOrderModal
      this.delItem = JSON.parse(JSON.stringify(item))
      console.log(this.delItem)
      delOrderCom.openModal()
    },
    delOrder (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      const vm = this
      this.$http.delete(url).then((response) => {
        vm.isLoading = false
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
      })
    },
    openModal (item) {
      const orderCom = this.$refs.orderModal
      this.tempOrder = JSON.parse(JSON.stringify(item))
      orderCom.openModal()
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>

<template>
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
                class="btn btn-primary"
                style="color: white"
                @click="getOrder(item)"
              >
                訂單詳情
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :page="pagination" @switch-page="getOrders"> </pagination>
    </div>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
export default {
  components: {
    pagination
  },
  data () {
    return {
      orders: [],
      pagination: {}
    }
  },
  methods: {
    getOrders (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      const vm = this
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        vm.isLoading = false
        // vm.data=response.data;
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
      })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>

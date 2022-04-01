<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin">PetPal</router-link>
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
            <router-link class="nav-link" to="/admin/products"
              >後台商品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders"
              >訂單管理</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout()">登出</a>
            <!-- 如果沒有要去的頁面就不能用router-link會跳錯 -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      const vm = this
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login')
        }
      })
    }
  }
}
</script>

<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="h3 font-weight-normal text-center">請先登入</h1>
        <div class="col-8">
          <form id="form" class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="username"
                placeholder="name@example.com"
                v-model="user.username"
                required
                autofocus
              />
              <label for="username">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="user.password"
                required
              />
              <label for="password">Password</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
              登入
            </button>
          </form>
        </div>
      </div>
      <p class="mt-5 mb-3 text-muted text-center">&copy; 2021~∞ - 六角學院</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${process.env.VUE_APP_API}/admin/signin`
      this.$http
        .post(url, this.user)
        .then((response) => {
          const { token, expired } = response.data
          // 取得response中的token,expired
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          // token寫入cookie
          // expired 設置有效時間
          this.$router.push('/admin/products')
        })
        .catch(() => {
          alert('帳號或密碼不正確')
          this.user = {}
          // 登入失敗就將欄位清空
        })
    }
  },
  mounted () {}
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>

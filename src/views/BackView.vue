<template>
  <BackNavBar></BackNavBar>
  <ToastMessage></ToastMessage>
  <router-view v-if="checkSuccess"></router-view>

  <!-- 用checkSuccess來切換驗證與否 -->
</template>

<script>
import emitter from '@/methods/eventBus'
import BackNavBar from '@/components/BackNavBar'
import ToastMessage from '@/components/ToastMessage'

export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  components: {
    BackNavBar,
    ToastMessage
  },

  provide () {
    return {
      emitter
    }
  },
  methods: {
    // 登入admin相關頁面就要做登入驗證
    checkLogin () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        const api = `${process.env.VUE_APP_API}/api/user/check`
        this.$http
          .post(api)
          .then((res) => {
            this.checkSuccess = true
          })
          .catch((err) => {
            alert(err.data.message)
            this.$router.push('/login')
          })
      } else {
        alert('您尚未登入')
        this.$router.push('/login')
      }
    },
    signout () {
      document.cookie = 'hexToken=;expires=;'
      alert('token已清除')
      this.$router.push('/login')
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>

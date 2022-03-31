import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import carousel from 'vue-owl-carousel'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 調整為輸入字元立即進行驗證，若要等enter再驗證就拿掉這行
})
// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)

// 數字轉換日期
app.component('owl-carousel', carousel)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')

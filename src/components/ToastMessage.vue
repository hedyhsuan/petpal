<template>
  <!-- 如果要疊用toast就以toast-container包覆並定位 -->
  <!-- 因為要確保它不會被認何物件檔住所以給它一個z-index:1500 -->
  <div
    class="toast-container position-fixed pe-3 top-0 end-0"
    style="z-index: 1500"
  >
    <!-- 放入toast模版 並加入迴圈-->
    <div
      v-for="(msg, key) in messages"
      :key="key"
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <span
          :class="`bg-${msg.style}`"
          class="p-2 rounded me-2 d-inline-block"
        ></span>
        <!-- <img src="..." class="rounded mr-2" alt="..."> -->
        <strong class="mr-auto">{{ msg.title }}</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      messages: [
        // 每一個物件代表一個toast,分別把內容傳進toast裡面
        // {
        //     style:'顏色',
        //     title:'標題',
        //     content:'內容'
        // }
      ]
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      // 接收資料
      const { style = 'success', title, content } = message
      this.message.push({ style, title, content })
      this.toastShow()
    })
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="content">
    <FrontNavBar/>
    <router-view></router-view>
    </div>
  </div>

  <footer>
    <div class="my-4">
      <p style="margin: 0">僅供學習使用 無商業用途 <span>2022</span></p>
    </div>
  </footer>

</template>

<script>
import FrontNavBar from '@/components/FrontNavBar.vue'
export default {
  components: {
    FrontNavBar
  }
}
</script>

<style scoped>
.wrapper{
  min-height:100vh;
  margin-bottom: -100px;
}
.content{
  padding-bottom: 100px;
}

footer {
  background-color: #5d8964;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

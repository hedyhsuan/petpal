<template>
  <div class="bg-light">
    <FrontNavBar></FrontNavBar>
    <router-view></router-view>

    <footer>
      <div class="my-4">
        <p style="margin: 0">僅供學習使用 無商業用途 <span>2022</span></p>
      </div>
    </footer>
  </div>
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
footer {
  background-color: #5d8964;
  height: 100px;
  display: flex;
  justify-content: center;
}
.bg-light {
  /* min-height: 100vh; */
}
</style>

<template>
  <div class="shelter_banner container">

    <div class="banner_img">
      <img src="https://imgur.com/kaTljeN.jpg" alt="" />
    </div>
        <div class="text_area">
      <h4>捐出小愛心</h4>
      <h5>陪浪浪等一個家</h5>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},

  mounted () {}
}
</script>

<style scoped>
.shelter_banner {
  max-height: 300px;
  /* max-width: 100%; */
  overflow: hidden;
  margin-bottom: 100px;
  margin-top: 100px;
  position: relative;
}
.banner_text {
  writing-mode: vertical-rl;
  position: relative;
  width: 33%;
}
.text_area {
  letter-spacing: 0.4em;
  position: absolute;
  /* bottom: 40%; */
  top: 15%;
  left: -10px;
  padding: 10px;
  background-color: #5d8964;
  text-align: center;
  writing-mode: vertical-rl;
  color: aliceblue;
}
.banner_img {
  height: 100%;

  /* width: 66%; */
}
.banner_img img {
  opacity: 0.9;
  width: 100%;
  height: 100%;
}
</style>

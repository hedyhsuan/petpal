<template>
  <div class="container">
    <div class="promote row row-cols-md-3 row-cols-sm-1">
      <div class="col" v-for="item in picsrc" :key="item.id">
        <div class="card h-100">
          <img
            class="card-img-top"
            :src="item.imageUrl"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5>{{ item.category }}</h5>
            <p class="card-text">嘉義</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['picsrc'],
  data () {
    return {}
  }
}
</script>
<style scoped>
.promote {
  margin: 150px 0;
}
.card {
  /* box-shadow: 24px 24px 80px rgba(0, 0, 0, 0.1); */
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  width:100%;

}
.card-img-top{
    width: 100%;
    height: 100%;
    object-fit:cover;

}
</style>

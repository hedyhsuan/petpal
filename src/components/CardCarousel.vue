<template>
  <div class="container">
    <div class="promote row row-cols-md-3 row-cols-sm-1">
      <div class="col" v-for="item in picsrc" :key="item.id">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ item.category }}</h5>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                    />
                    <path
                      d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                  </svg>
                </div>
                <p class="card-text mx-2">嘉義</p>
              </div>
              <div>
                <button type="button" class="btn btn-primary">進去看看</button>
              </div>
            </div>
          </div>
          <img class="cardImg" :src="item.imageUrl" alt="Card image cap" />
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
  max-height: 300px;
}
.card {
  /* box-shadow: 24px 24px 80px rgba(0, 0, 0, 0.1); */
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding: 10p
}
.cardImg {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>

<template>
  <div>
    <div class="card h-100">
      <div class="addFav" @click="switchHeart(selectitem)">
        <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50%"
              height="50%"
              fill="currentColor"
              class="bi bi-suit-heart"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
              />
            </svg> -->
        <i :class="changeIcon"></i>
      </div>
      <div class="card-body">
        <h5>{{ selectitem.category }}</h5>
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
            <p class="card-text mx-2">{{ selectitem.location }}</p>
          </div>
          <div>
            <button
              class="button-8"
              role="button"
              @click="goShelter(item.category)"
            >
              進去看看
            </button>
          </div>
        </div>
      </div>
      <img class="cardImg" :src="selectitem.imageUrl" alt="Card image cap" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['selectitem'],
  data () {
    return {
      index: '',
      randomItem: [],
      hearted: JSON.parse(localStorage.getItem('hearted')) || []
    }
  },
  methods: {
    goShelter (id) {
      this.$router.push(`${id}`)
    },

    switchHeart (select) {
      this.hearted = JSON.parse(localStorage.getItem('hearted')) || []
      this.index = this.hearted.findIndex((item) => {
        return select.category === item
        // 如果點擊的內容是已關注的商品就存取他的索引值做為刪除的目標
      })

      if (this.hearted.indexOf(select.category) === -1) {
        this.hearted.push(select.category)
        // 如果點擊的item的id沒有在已關注區就塞進去
        localStorage.setItem('hearted', JSON.stringify(this.hearted))
      } else {
        this.hearted.splice(this.index, 1)
        // 如果已經在裡面就用前面得到的index刪掉它
        localStorage.setItem('hearted', JSON.stringify(this.hearted))
      }
      // 如果首頁nav要即時更新我的最愛數字就要在這邊觸發祖父層更新

      this.hearted = JSON.parse(localStorage.getItem('hearted')) || []
      // console.log(this.hearted.length)
    }
  },
  computed: {
    changeIcon () {
      if (this.hearted.indexOf(this.selectitem.category) === -1) {
        return 'icon bi-suit-heart-fill heart'
      } else {
        return 'icon bi-suit-heart-fill hearted'
      }
    }
  },
  mounted () {
    console.log(this.hearted)
  }
}
</script>
<style scoped>
.card {
  /* box-shadow: 24px 24px 80px rgba(0, 0, 0, 0.1); */
  border: 1px solid #ddd;
  border-radius: 10px;
  /* background-color: rgba(0, 0, 0, 0); */
  width: 100%;
  padding: 10px;
  transition: 0.2s ease-in;
}
.card:hover {
  transform: translateY(-2%);
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.06);
}
.addFav {
  position: absolute;
  width: 35px;
  height: 35px;
  border: 1px solid #849387;
  border-radius: 50%;
  background-color: #d5e3d5;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 26px;
  color: rgb(189, 189, 189);
  cursor: pointer;
}
.cardImg {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.button-8 {
  /* background-color: #e1ecf4; */
  background-color: #dfe6e2;
  border-radius: 3px;
  /* border: 1px solid #7aa7c7; */
  border: 1px solid #849387;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  /* color: #39739d; */
  color: #5d8964;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-8:hover,
.button-8:focus {
  background-color: #b3d3ea;
  background-color: #bfd7c3;
  /* color: #2c5777; */
  color: #3c6042;
}

.button-8:focus {
  /* box-shadow: 0 0 0 4px rgba(0, 149, 255, .15); */
  box-shadow: 0 0 0 4px rgba(0, 255, 30, 0.15);
}

.button-8:active {
  background-color: #a0c7e4;
  box-shadow: none;
  /* color: #2c5777; */
  color: #3c6042;
}

.heart {
  color: white
}
.hearted {
  color: #3c6042;
}
</style>

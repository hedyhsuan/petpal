<template>
  <div class="cards">
    <div class="card h-100">
      <div class="addFav" @click="switchHeart(selectitem)">
        <i :class="changeIcon"></i>
      </div>
      <div class="card-body">
        <h5>{{ selectitem.category }}</h5>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex">
            <div>
              <i class="icon bi bi-geo-alt"></i>
            </div>
            <p class="card-text mx-2">{{ selectitem.location }}</p>
          </div>
          <div>
            <button
              class="button-8"
              role="button"
              @click="goShelter(selectitem.category)"
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
      this.$router.push(`/shelter/${id}`)
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
    // console.log(this.hearted)
  }
}
</script>

<style scoped>
.cards {
  margin-bottom: 100px;
}
.card {
  /* box-shadow: 24px 24px 80px rgba(0, 0, 0, 0.1); */
  border: 1px solid #ddd;
  border-radius: 10px;
  /* background-color: rgba(0, 0, 0, 0); */
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
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
  /* background-color: #b3d3ea; */
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
  color: white;
}
.hearted {
  color: #3c6042;
}
</style>

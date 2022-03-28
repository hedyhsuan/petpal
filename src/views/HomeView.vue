<template>
  <div class="intro_back">
    <div class="container">
      <div class="intro">
        <div class="inner row">
          <div class="col-12 col-md-5 d-flex inner-left">
            <div class="me-md-5">
              <div>
                <h1 class="text-white">浪。我照顧你</h1>
              </div>
              <p class="text-white mt-3">
                全台有超過15萬隻流浪動物，儘管有無數盡心盡力的愛爸愛媽頃盡全力，收容照顧他們，我們仍需要
                您的支持，透過PetPal，我們希望把大家的愛心做數據化的管理，讓更多愛園都能安心的照顧等待
                收容的動物伙伴
              </p>
            </div>
          </div>
          <div class="col-12 col-md-7 inner-right">
            <img
              class="inner_rightImg"
              src="https://imgur.com/DpLwooV.jpg"
              alt=""
            />
          </div>
          <img
            class="inner_mainImg"
            src="https://imgur.com/ThK5mNj.jpg"
            alt=""
          />
        </div>
      </div>
      <div></div>
    </div>
  </div>
  <div class="mx-5"></div>
  <div class="">
    <Carousel :picsrc="selterIntro"></Carousel>

    <div class="container sectionb">
      <div class="row">
        <div
          class="col-12 col-md-4 sectionb_left d-flex justify-content-center align-items-center"
        >
          <h4>PetPal在做什麼？</h4>
        </div>
        <div class="col-12 col-md-8 d-grid gap-5 spirits">
          <div class="spirit">
            <h5 style="margin: 20px">貓狗園的資助物資整合</h5>
          </div>
          <p>
            將物資的捐贈整合，並密切的跟愛園做更新，以確保每個愛園都有足夠的物資
          </p>
          <div class="spirit">
            <h5 style="margin: 20px">貓狗園的資助物資整合</h5>
          </div>
          <p>
            將物資的捐贈整合，並密切的跟愛園做更新，以確保每個愛園都有足夠的物資
          </p>
          <div class="spirit">
            <h5 style="margin: 20px">貓狗園的資助物資整合</h5>
          </div>
          <p>
            將物資的捐贈整合，並密切的跟愛園做更新，以確保每個愛園都有足夠的物資
          </p>
        </div>
      </div>
    </div>

    <CardCarousel :picsrc="selterIntro"></CardCarousel>
  </div>

</template>

<script>
import Carousel from '../components/Carousel.vue'
import CardCarousel from '../components/CardCarousel.vue'

export default {
  components: {
    Carousel,
    CardCarousel
  },
  data () {
    return {
      products: [],
      selterIntro: []
    }
  },
  methods: {
    getShelters () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      const vm = this
      this.$http.get(url).then((res) => {
        vm.products = res.data.products
        vm.products.forEach((item) => {
          if (item.introFile === 1) {
            vm.selterIntro.push(item)
          }
        })
        console.log(vm.selterIntro)
      })
    }
  },
  mounted () {
    this.getShelters()
  }
}
</script>

<style scoped>
.intro_back {
  background-color: #5d8964;
  /* border-bottom-left-radius: 20%; */
  border-bottom-right-radius: 400px;
}
.intro {
  position: relative;
  overflow: hidden;
}
.inner {
  min-height: 600px;
  /* display: flex; */
  position: relative;
}
.inner_mainImg {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 65%;
}
.inner-left {
  margin-top: 10%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 45%;
  z-index: 1; */
}
.inner-right {
  position: relative;
}
.inner_rightImg {
  width: 90%;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 0;
}
.sectionb {
  margin-top: 150px;
  margin-bottom: 150px;
  overflow: hidden;
}
.sectionb_left {
  background-image: url(https://imgur.com/DpLwooV.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.sectionb_left h4 {
  margin: 40px 0px;
}
.spirits {
  text-align: center;
}
.spirit {
  position: relative;
  background-image: url(https://imgur.com/w842bv1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  /* <img src="https://imgur.com/w842bv1.jpg" alt="" /> */
}

.spirit img {
  position: absolute;
  top: 0;
  left: 30%;
  z-index: -1;
}
.spirit h5 {
  margin-top: 10px;
  z-index: 1;
}

</style>

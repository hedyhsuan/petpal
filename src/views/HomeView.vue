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
            src="https://imgur.com/TxR2XpW.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div class="">
    <div class="container">
      <div class="sectionb">
        <div class="row">
          <div class="col-12 d-flex justify-content-center paw">
            <img src="https://imgur.com/v6RZO4g.jpg" alt="" />
          </div>
          <!-- paw -->
          <div class="text-center">
            <h4 class=" mb-5">petpal在做什麼？</h4>
          </div>

          <div class="bg-white">
            <div>
              <div class="spirit_wrap row">
                <div class="spirit_img col-md-6">
                  <img
                    class="w-100"
                    src="https://imgur.com/SnpDfOS.jpg"
                    alt=""
                  />
                </div>

                <div class="spirit_text_area col-md-6 p-4">
                  <div>
                    <div class="spirit_text">
                      <h5 class="text-center">貓狗園的資助物資整合</h5>
                    </div>
                    <div class="p-md-4 p-2">
                      <p>
                        愛園最常面臨的狀況往往是人力的不足，捐贈物資時而過剩時而潰乏，我們將物資的捐贈整合，並密切的跟愛園做更新，以確保每個愛園都有足夠的物資
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="spirit_wrap row flex-row-reverse">
                <div class="spirit_img col-md-6">
                  <img
                    class="w-100"
                    src="https://imgur.com/US9HVsB.jpg"
                    alt=""
                  />
                </div>

                <div class="spirit_text_area col-md-6 p-4">
                  <div>
                    <div class="spirit_text">
                      <h5 class="text-center">專案人員定期訪視及紀錄</h5>
                    </div>
                    <div class="p-md-4 p-2">
                      <p>
                        我們跟每一個合作的愛園都有專案人員的紀錄及訪視，除了確認環境的狀況之外，也會依動物入住的數量給予建議，數量如果超過負擔就安排轉往其它愛圓，維護動物們的生活品質
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="spirit_wrap row">
                <div class="spirit_img col-md-6">
                  <img
                    class="w-100"
                    src="https://imgur.com/TMOZ4aO.jpg"
                    alt=""
                  />
                </div>

                <div class="spirit_text_area col-md-6 p-4">
                  <div>
                    <div class="spirit_text">
                      <h5 class="text-center">平均物資</h5>
                    </div>
                    <div class="p-md-4 p-2">
                      <p>
                        將物資的狀況透明化，讓所有捐贈者都能在捐贈時知道哪一個愛園目前還需要幫助，也減少過剩屯放的問題
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center paw">
        <img src="https://imgur.com/v6RZO4g.jpg" alt="" />
      </div>
      <div class="action">
        <div class="action_img"></div>
        <div class="action_text_wrap">
          <div class="action_text_area bg-light">
            <h4 class="text-center mb-3">浪浪的困境</h4>
            <div class="action_text">
              <p>零撲殺的政策保障了浪浪的生命</p>
              <p>隨之而來的是資源不足及糧食不足的狀況</p>
              <p>我們需要你的幫忙</p>
              <p>讓中途浪浪安心等家</p>
            </div>
          </div>
        </div>

        <div class="text"></div>
      </div>
      <!-- <Carousel :picsrc="selterIntro"></Carousel> -->
      <div class="promote row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        <CardCarousel
          class="col"
          v-for="(item, index) in selterIntro.slice(0, 3)"
          :key="index"
          :selectitem="item"
        ></CardCarousel>
      </div>
    </div>
  </div>
</template>

<script>
// import Carousel from '../components/Carousel.vue'
import CardCarousel from '../components/CardCarousel.vue'

export default {
  components: {
    // Carousel,
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
        // console.log(vm.selterIntro)
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
@media (max-width: 991px) {
  .inner_mainImg {
    width: 85%;
  }
}
@media (max-width: 768px) {
  .inner_mainImg {
    width: 100%;
  }
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
@media (max-width: 768px) {
  .inner_rightImg {
    top: -80%;
  }
}
/* sectionb */
.paw {
  margin-bottom: 100px;
}
/* @media (max-width: 768px) {
  .paw {
    margin: 10px 0;
  }
} */
.paw img {
  width: 35px;
}
.sectionb {
  margin-top: 100px;
  margin-bottom: 100px;
  overflow: hidden;
}
.sectionb_left {
  /* background-image: url(https://imgur.com/DpLwooV.jpg); */
  position: relative;
}
.sectionb_left img {
  position: absolute;
  width: 95%;
  z-index: 0;
}
.sectionb_left h4 {
  margin: 40px 0px;
  z-index: 1;
}
@media (max-width: 768px) {
  .sectionb_left h4 {
    margin: 120px 0;
  }
  .sectionb_left img {
    width: 40%;
  }
}
.spirit_wrap > div {
  padding: 0;
}
.spirit_text_area {
  display: flex;
  justify-content: center;
  align-items: center;
}
.spirit_text {
  position: relative;
}

.spirits p {
  padding: 10px 50px;
}

.action {
  padding-bottom: 100px;
}
.action_text_wrap {
  max-width: 820px;
  padding: 0 20px;
  margin: -100px auto 0;
}
.action_text_area {
  position: relative;
  padding: 40px 20px 0;
}
.action_img {
  background-image: url(https://imgur.com/PtYqk0C.jpg);
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;
  opacity: 0.8;
}
.action_text {
  line-height: 1rem;
  text-align: center;
}
</style>

<template>
  <div>
    <loading :active="isLoading" />
    <div class="intro_back">
      <div class="container">
        <div class="intro">
          <div class="inner row">
            <div class="col-12 col-md-5 d-flex inner-left">
              <div class="me-md-5">
                <div data-aos="fade-left" data-aos-duration="1300">
                  <h1 class="text-white">浪。我照顧你</h1>
                </div>
                <p
                  class="text-white mt-3"
                  data-aos="fade-left"
                  data-aos-duration="1800"
                >
                  全台有超過15萬隻流浪動物，儘管有無數盡心盡力的愛爸愛媽頃盡全力，收容照顧他們，我們仍需要
                  您的支持，透過PetPal，我們希望把大家的愛心做數據化的管理，讓更多愛園都能安心的照顧等待
                  收容的動物伙伴
                </p>
                <!-- <div class="contactus">
                  <h5>訂閱我們</h5>
                  <p>獲得最新的愛園情報</p>
                  <div class="input-group mb-3">
                    <label for="email"></label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="請輸入email"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <button
                      class="btn btn-secondary"
                      type="button"
                      id="button-addon1"
                    >
                      訂閱
                    </button>
                  </div>
                </div> -->
                <div
                  class="text-white mt-5"
                  data-aos="fade-down"
                  data-aos-duration="1700"
                >
                  <h5>
                    <i class="bi bi-chevron-double-down"></i>下滑來看看我們
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-7 inner-right">
              <img
                class="inner_rightImg"
                src="https://imgur.com/DpLwooV.jpg"
                alt="黃色背景"
              />
            </div>
            <img
              class="inner_mainImg"
              src="https://imgur.com/SgHLimi.gif"
              alt="狗狗圖片"
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
              <img src="https://imgur.com/v6RZO4g.jpg" alt="狗掌印" />
            </div>
            <!-- paw -->
            <div class="text-center">
              <h4
                class="mb-5"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                PetPal在做什麼？
              </h4>
            </div>

            <div class="bg-white">
              <div>
                <div class="spirit_wrap row">
                  <div
                    class="spirit_img col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <img
                      class="w-100"
                      src="https://imgur.com/SnpDfOS.jpg"
                      alt="貓狗園的資助物資整合"
                    />
                  </div>

                  <div class="spirit_text_area col-md-6 p-4">
                    <div>
                      <div
                        class="spirit_text"
                        data-aos="fade-right"
                        data-aos-duration="1300"
                      >
                        <div class="text-center my-3">
                          <i class="fs-1 bi bi-file-ruled"></i>
                        </div>
                        <h5 class="text-center">物資需求整合</h5>
                      </div>
                      <div
                        class="p-md-3 p-2"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                      >
                        <p>
                          愛園最常面臨的狀況往往是人力的不足，捐贈物資時而過剩時而潰乏，我們將物資的捐贈整合，並密切的跟愛園做更新，以確保每個愛園都有足夠的物資
                        </p>
                      </div>
                      <div class="spirit_text_img_1 ml-auto">
                        <img
                          class="w-100"
                          src="https://imgur.com/GacoAdy.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="spirit_wrap row flex-row-reverse">
                  <div
                    class="spirit_img col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <img
                      class=""
                      src="https://imgur.com/1JIlzWn.jpg"
                      alt="專案人員定期訪視及紀錄"
                    />
                  </div>

                  <div class="spirit_text_area col-md-6 p-4">
                    <div>
                      <div
                        class="spirit_text"
                        data-aos="fade-right"
                        data-aos-duration="1300"
                      >
                        <div class="text-center my-3">
                          <i class="fs-1 bi bi-clipboard-check"></i>
                        </div>

                        <h5 class="text-center">專案人員定期訪視及紀錄</h5>
                      </div>
                      <div
                        class="p-md-3 p-2"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                      >
                        <p>
                          我們跟每一個合作的愛園都有專案人員的紀錄及訪視，除了確認環境的狀況之外，也會依動物入住的數量給予建議，數量如果超過負擔就安排轉往其它愛圓，維護動物們的生活品質
                        </p>
                      </div>
                      <div class="spirit_text_img_2">
                        <img
                          class="w-100"
                          src="https://imgur.com/l1uvkBh.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="spirit_wrap row">
                  <div
                    class="spirit_img col-md-6"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <img
                      class="w-100"
                      src="https://imgur.com/TMOZ4aO.jpg"
                      alt="平均物資"
                    />
                  </div>

                  <div class="spirit_text_area col-md-6 p-4">
                    <div>
                      <div
                        class="spirit_text"
                        data-aos="fade-right"
                        data-aos-duration="1300"
                      >
                        <div class="text-center my-3">
                          <i class="fs-1 bi bi-box2-heart"></i>
                        </div>
                        <h5 class="text-center">平均物資</h5>
                      </div>
                      <div
                        class="p-md-3 p-2"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                      >
                        <p>
                          將物資的狀況透明化，讓所有捐贈者都能在捐贈時知道哪一個愛園目前還需要幫助，也減少過剩屯放的問題
                        </p>
                      </div>
                      <div class="spirit_text_img_3">
                        <img
                          class="w-100"
                          src="https://imgur.com/9DJ8Eau.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center paw">
          <img src="https://imgur.com/v6RZO4g.jpg" alt="狗掌印" />
        </div>
        <div class="action">
          <div class="action_img"></div>
          <div class="action_text_wrap">
            <div
              class="action_text_area bg-light"
              data-aos="fade-down"
              data-aos-duration="1600"
            >
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
  </div>
</template>

<script>
import CardCarousel from '@/components/CardCarousel.vue'
import AOS from 'aos'

export default {
  components: {
    CardCarousel
  },
  data () {
    return {
      isLoading: false,
      products: [],
      selterIntro: []
    }
  },
  methods: {
    getShelters () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      const vm = this
      this.$http.get(url).then((res) => {
        this.isLoading = false
        vm.products = res.data.products
        vm.products.forEach((item) => {
          if (item.introFile === 1) {
            vm.selterIntro.push(item)
          }
        })
      })
    }
  },
  mounted () {
    this.getShelters()
    AOS.init({})
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
.contactus {
  margin-top: 80px;
  /* background: rgba(253, 251, 251,.6); */
  color: white;
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

.paw img {
  width: 35px;
}
.sectionb {
  margin-top: 100px;
  margin-bottom: 100px;
  overflow: hidden;
}
.sectionb_left {
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
.spirit_img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}
.spirit_text_area {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f5d7;
  position: relative;
}
.spirit_text {
  position: relative;
}
.spirit_text_img_1 {
  width: 15%;
  margin-left: auto;
}
.spirit_text_img_2 {
  /* position: absolute;
  left: 50px;
  bottom: 0; */
  width: 12%;
  margin-left: auto;
}
.spirit_text_img_3 {
  /* position: absolute;
  right: 35px;
  bottom: 0; */
  width: 20%;
  margin-left: auto;
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

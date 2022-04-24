<template>
  <div>
    <div
      id="productModal"
      ref="productModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <!-- 用BS 表單控制去做主圖連結 -->
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">主圖網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="imageUrl"
                    v-model="item.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                  <img :src="item.imageUrl" alt="中途之家主圖" class="mt-3" />
                </div>
                <!--   label for/input id 會是對應在一起的-->

                <h3 class="mb-3">多圖新增</h3>

                <div v-if="Array.isArray(item.imagesUrl)">
                  <!-- 沒有陣列這個型別但有判斷是否為陣列的方法 -->
                  <!-- 如果陣列完全不存在的話用length也無法判別 -->
                  <div
                    v-for="(img, key) in item.imagesUrl"
                    :key="key + '76578'"
                  >
                    <!-- key必須要是唯一值,後面加上數字才不會重複   -->
                    <div class="form-group">
                      <label for="imageUrl" class="form-label">圖片網址</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="item.imagesUrl[key]"
                      />
                    </div>
                    <img :src="item.imagesUrl[key]" alt="中途之家圖片" class="mt-3" />
                  </div>
                </div>

                <div
                  v-if="
                    !item.imagesUrl?.length ||
                    item.imagesUrl[item.imagesUrl.length - 1]
                  "
                >
                  <!-- 如果陣列的長度不存在（還沒有任何內容）或是 當下input裡面已經有填入內容 （陣列序號是0開始所以是長度-1）就顯示新增-->
                  <button
                    class="my-3 btn btn-outline-primary w-100"
                    type="button"
                    @click="item.imagesUrl.push('')"
                  >
                    新增
                  </button>
                </div>

                <div v-else>
                  <button
                    type="button"
                    class="btn btn-outline-danger w-100"
                    @click="item.imagesUrl.pop()"
                  >
                    刪除最後一個
                  </button>
                  <!-- input在跟圖片用key綁定前無法使用，因為指的都是同一個位置 -->
                </div>

                <!-- 上傳圖片 -->
                <form
                  action="/api/thisismycourse2/admin/upload"
                  enctype="multipart/form-data"
                  method="post"
                >
                  <input
                    class="my-3"
                    type="file"
                    name="file-to-upload"
                    @change="upload"
                  />
                </form>
                <!-- 上傳圖片 -->
              </div>

              <div class="col-sm-8">
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">愛園名稱</label>
                    <input
                      id="category"
                      v-model="item.category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入名稱"
                    />
                  </div>
                  <div class="mb-3 col-md-6 row">
                    <div class="col-md-6">
                      <label for="area" class="form-label">區域</label>
                      <select
                        id="area"
                        class="form-control"
                        v-model="item.area"
                      >
                        <option>北部</option>
                        <option>中部</option>
                        <option>南部</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="introFile"
                          v-model="item.introFile"
                          :true-value="1"
                          :false-value="0"
                        />
                        <label class="form-check-label" for="introFile"
                          >介紹</label
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="title" class="form-label">品項</label>
                    <input
                      id="title"
                      v-model="item.title"
                      type="text"
                      class="form-control"
                      placeholder="請輸入品項"
                    />
                  </div>

                  <div class="mb-3 col-md-6 row">
                    <div class="col-md-6">
                      <label for="unit" class="form-label">單位</label>
                      <input
                        id="unit"
                        v-model="item.unit"
                        type="text"
                        class="form-control"
                        placeholder="請輸入單位"
                      />
                    </div>

                    <div class="col-md-6">
                      <label for="requiredQty" class="form-label"
                        >需求數量</label
                      >
                      <input
                        id="requiredQty"
                        v-model="item.requiredQty"
                        type="text"
                        class="form-control"
                        placeholder="需求數量"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 row">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label">原價</label>
                      <input
                        id="origin_price"
                        v-model.number="item.origin_price"
                        type="number"
                        class="form-control"
                        placeholder="請輸入原價"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">售價</label>
                      <input
                        id="price"
                        v-model.number="item.price"
                        type="number"
                        min="0"
                        class="form-control"
                        placeholder="請輸入售價"
                      />
                    </div>
                  </div>
                  <div class="col-md-6"></div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="location" class="form-label">地區</label>
                    <input
                      id="location"
                      v-model.number="item.location"
                      type="text"
                      class="form-control"
                      placeholder="請輸入地點"
                    />
                  </div>
                    <div class="mb-3 col-md-6">
                    <label for="tel" class="form-label">電話</label>
                    <input
                      id="tel"
                      v-model="item.tel"
                      type="text"
                      class="form-control"
                      placeholder="請輸入電話"
                    />
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">愛園介紹</label>
                  <textarea
                    id="description"
                    v-model="item.description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">管理者介紹</label>
                  <textarea
                    id="description"
                    v-model="item.content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="item.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
export default {
  data () {
    return {
      productModal: '',
      // 要賦予modal實體的變數
      item: {}
      // watch監聽props並進行深拷儲存於此物件
    }
  },
  props: ['product', 'isNew'],
  inject: ['emitter'],
  methods: {
    updateProduct () {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let method = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.item.id}`
        method = 'put'
      }
      // 區別新增/修改

      this.$http[method](url, { data: this.item })
        .then((response) => {
          alert(response.data.message)
          this.$emit('update')
          // 更新畫面資料
          this.hideModal()
          // 驗證成功就讀取資料渲染畫面
        })
        .catch((error) => {
          alert(error.data.message)
        })
    },
    openModal () {
      this.productModal.show()
    },
    hideModal () {
      this.productModal.hide()
    }
  },
  watch: {
    product () {
      this.item = JSON.parse(JSON.stringify(this.product))
    }
  },
  mounted () {
    // 要用js來控制modal前要先初始化bs modal
    // 將宣告好的物件賦予實體
    this.productModal = new Modal(this.$refs.productModal)
  }
}
</script>

<style scoped>
img {
  object-fit: contain;
  max-width: 100%;
}
</style>

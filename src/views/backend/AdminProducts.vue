<template>
  <div>
    <div class="container">
      <div class="py-3">
        <h3>產品列表</h3>
        <div class="col-md-12">
          <div class="text-end my-4">
            <button
              type="button"
              class="btn btn-primary"
              style="color: white"
              @click="openModal('isNew')"
            >
              新增商品
            </button>
          </div>

          <table class="table table-hover">
            <thead>
              <th width="100">區域</th>
              <th>愛園名稱</th>
              <th width="120">位置</th>
              <th width="100">品項</th>
              <th width="100">售價</th>
              <th width="100">需求數量</th>
              <th width="80">圖片</th>
              <th width="80">啟用</th>
              <th width="120">編輯</th>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.id">
                <td>{{ item.area }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.location }}</td>
                <td>{{ item.title }}</td>

                <td>{{ item.price }}</td>
                <td>{{ item.requiredQty }}</td>
                <td class="text-primary" v-if="item.introFile">有</td>
                <td v-else></td>
                <td class="text-primary" v-if="item.is_enabled">啟用</td>
                <td v-else>未啟用</td>
                <!-- v-if/else切換啟用狀態  -->
                <td class="text-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm"
                      @click="openModal('edit', item)"
                    >
                      編輯
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="openModal('delete', item)"
                    >
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>目前有{{ products.length }}項產品</p>

          <!-- 分頁元件 -->
          <!-- <pagination
              :pages="pagination"
              @emit-pages="getProduct"
              > </pagination> -->

          <del-product-modal
            ref="delProductModal"
            v-bind="tempProduct"
            @update="getProducts"
          ></del-product-modal>

          <product-modal
            ref="productModal"
            :is-new="isNew"
            :product="tempProduct"
            @update="getProducts"
          >
          </product-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productModal from '@/components/ProductModal'
import delProductModal from '@/components/DelProductModal'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      isNew: 'true',
      tempProduct: {
        imagesUrl: [],
        requiredQty: '',
        area: '',
        introFile: '0',
        adress: '',
        tel: '',
        location: ''
      }
    }
  },
  components: { productModal, delProductModal },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`
      this.$http
        .get(url)
        .then((res) => {
          const { products } = res.data
          // 解構賦值
          this.products = products
          // this.pagination = pagination
        })
        .catch((res) => {})
    },
    openModal (status, item) {
      const productCom = this.$refs.productModal
      // 宣告一變數並綁定子元件productModal便可使用其方法
      if (status === 'isNew') {
        this.tempProduct = {
          // 小圖們
          imagesUrl: []
        }
        this.isNew = true

        productCom.openModal()
      } else if (status === 'edit') {
        this.tempProduct = JSON.parse(JSON.stringify(item))
        // 因物件傳參考的特性，若沒有進行深拷貝，當在修改的同時就會同步到畫面原本帶入的原始物件（僅是畫面上的）
        this.isNew = false
        this.tempProduct.imagesUrl = this.tempProduct.imagesUrl
          ? this.tempProduct.imagesUrl
          : []
        // 原本傳到API path 裡的資料沒有小圖（imgesUrl）,所以資料取回，imagesUrl這個屬性是undefined,
        // HTML上有用temProduct.imagesUrl.pop()的方法會變成undefined.pop()跳錯
        productCom.openModal()
      } else if (status === 'delete') {
        const delProductCom = this.$refs.delProductModal
        this.tempProduct = JSON.parse(JSON.stringify(item))
        this.isNew = false
        this.tempProduct.imagesUrl = this.tempProduct.imagesUrl
          ? this.tempProduct.imagesUrl
          : []
        delProductCom.openModal()
      }
    }
  },

  mounted () {
    this.getProducts()
  }
}
</script>

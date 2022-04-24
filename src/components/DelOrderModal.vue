<template>
  <div>
    <div
      id="delOrderModal"
      ref="delOrderModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="delOrderModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="ddelOrderModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ delItem.id }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delOrder">
              確認刪除
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
  props: ['delItem'],
  data () {
    return {
      delOrderModal: ''
    }
  },
  methods: {
    delOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.delItem.id}`
      this.$http
        .delete(url)
        .then((response) => {
          this.$emit('update')
          // 更新畫面

          this.hideModal()
        })
        .catch((error) => {
          alert(error.data.message)
        })
    },
    openModal () {
      this.delOrderModal.show()
    },
    hideModal () {
      this.delOrderModal.hide()
    }
  },
  mounted () {
    this.delOrderModal = new Modal(this.$refs.delOrderModal)
  }
}
</script>

<template>
  <main class="main" v-if="show">
    <div class="popup">
      <div class="popup__modal">
<!--        <h3 class="">{{ title }}</h3>-->
<!--        <hr class="hr mt-5 mb-5">-->
        <p class="font-weight-bold" v-html="content"></p>
        <div class="align-btn mt-6">
          <button class="confirm_btn" @click="no" v-show="textNo">{{ textNo }}</button>
          <button class="confirm_btn" @click="ok" v-show="textOk">{{ textOk }}</button>
        </div>
      </div>
      <div class="dimmed" @click="close"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Confirm",
  data() {
    return {
      show: false,
      callback: null,
      cancel: null,
      textOk: '123',
      textNo: '1123',
      content: '123123',
      title: '123123',
    }
  },

  methods: {
    showDialog(title, content, textNo, textOk, callback, cancel) {
      this.title = title
      this.content = content.replace(/\n/g, '<br/>')
      this.textNo = textNo
      this.textOk = textOk
      this.callback = callback
      this.cancel = cancel
      this.show = true
    },

    close() {
      this.show = false
    },

    ok() {
      this.callback()

      this.close()
    },

    no() {
      this.close()
      this.cancel()
    }
  }
}
</script>

<style scoped>
.main {
  padding: 3rem 2rem;
}

.popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  background: rgba(174, 174, 174, 0.50);
}

.popup__modal {
  z-index: 201;
  position: relative;
  width: 100%;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #fff;
  text-align: center
}

.align-btn {
  display: flex;
  flex: 1;
  gap: 1rem
}

.align-btn .confirm_btn {
  justify-content: center;
  flex: 1
}

</style>
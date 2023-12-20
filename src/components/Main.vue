<template>
  <div class="main_container">
    <div class="btn_box">
      <button class="moco_btn" @click="$router.push({ name: 'TestRegister' })">테스트 등록하기</button>
      <button class="moco_btn">테스트 목록</button>
    </div>
    <div class="btn_box">
      <button class="moco_btn btn_blue">관리자 등록</button>
      <button class="moco_btn btn_blue">관리자 통계</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  created() {
    this.$root.$refs.Header.headerInfo = {
      type: 'logo',
      title: '메인'
    }
  }
}
</script>

<style scoped>
.main_container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn_blue {
  background: #90B1CF;
}

.btn_box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
</style>
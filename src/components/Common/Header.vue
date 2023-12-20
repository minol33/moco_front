<template>
  <div class="header justify-space-between mt-2" v-if="headerInfo.type === 'logo'">
    <div class="header_item"></div>
    <div class="header_item">
      <img src="/public/img/header_logo.svg" alt="logo">
    </div>
    <div class="header_item item_right">
      <span class="username">{{ username }}</span>
    </div>
  </div>
  <div class="header align-center" v-else>
    <v-icon icon="mdi-chevron-left" :size="40" @click="$router.back()" />
    <span class="text-h6 font-weight-bold">{{ headerInfo.title }}</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      username: '',
      headerInfo: {
        type: '',
        title: '',
      }
    }
  },
  mounted() {
    const name = sessionStorage.getItem('username')
    if (name) {
      this.username = name
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  padding: 5px;
}

.header img {
  width: 100px;
}

.header_item {
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item_right {
  display: flex;
  justify-content: right;
  align-items: center;
}

.username {
  color: #333;
  font-weight: 600;
  font-size: 14px;
}
</style>
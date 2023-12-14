<template>
  <div class="header">
    <div class="header_item"></div>
    <div class="header_item">
      <img src="/public/img/header_logo.svg" alt="logo">
    </div>
    <div class="header_item item_right">
      <span class="username">{{ username }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      username: ''
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
  justify-content: space-between;
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
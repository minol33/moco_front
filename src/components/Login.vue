<template>
  <div class="container">
    <img src="/public/img/moco_dog_logo.png" alt="login_logo">
    <div>
      <input type="text" v-model="email">

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {

    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container img {
  width: 300px;
}

</style>
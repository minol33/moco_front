<template>
  <div class="container">
    <img src="/public/img/moco_dog_logo.png" alt="login_logo">
    <div class="container">
      <input type="email" class="input_box" v-model="email" placeholder="이메일을 입력하세요.">
      <input type="password" class="input_box" v-model="password" placeholder="비밀번호를 입력하세요.">
    </div>
    <button class="moco_btn" @click="login">로그인</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: 'testtest@naver.com',
      password: 'test1234'
    }
  },
  mounted() {
    sessionStorage.clear()
  },
  methods: {
    login() {
      if(!this.email){
        this.httpAlert('error', '이메일을 입력해 주세요')
        return
      }
      if(!this.password){
        this.httpAlert('error', '비밀번호를 입력해 주세요')
        return
      }
      let data = {
        email: this.email,
        password: this.password
      }
      this.$post(this.$LOGIN, 'login', data, false, (result) => {
        console.log(result.result, 'result')

        sessionStorage.setItem('accessToken', result.result.accessToken)
        sessionStorage.setItem('refreshToken', result.result.refreshToken)
        sessionStorage.setItem('role', result.result.role)
        sessionStorage.setItem('username', result.result.username)
        sessionStorage.setItem('email', result.result.email)

        this.$router.push({ name: 'Main' })
      }, (result) => {
        this.httpAlert('error', result.message)
      })
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container img {
  width: 300px;
}
.input_box {
  width: 85%;
  height: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #C390CF;
  color: #333;
  font-size: 14px;
}
input::placeholder {
  color: #DEDEDE;
  font-size: 14px;
  font-weight: 600;
}
.moco_btn {
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background: #C390CF;
  border: none;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  color: white;
  font-weight: 600;
  font-size: 18px;
}


</style>
<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Header from "./components/Common/Header.vue";

export default defineComponent({
  components: {Header}
})
</script>

<style scoped>
</style>

<template>
  <div class="flex mt-12">
    <div class="bg-grey-lighten-2 container" style="height: 200px; width: 200px;">
    <label>
      <input
          v-show="false"
          type="file"
          accept="image/*"
          @change="setFile($event, 'imageFile')"
      />
      <v-icon v-if="!item.imageFile" icon="mdi-plus" :size="50" color="#545454" />
      <img v-else src="" id="preview" alt="img" style="object-fit: cover; margin-top: 6px; width: 200px; height: 200px;" />
    </label>
    </div>
    <div class="flex mt-12">
      <input type="email" class="input_box" v-model="item.testName" placeholder="심리 테스트의 제목을 입력하세요.">
      <input type="email" class="input_box" v-model="item.testSubName" placeholder="서브 타이틀을 입력하세요.">
      <input type="email" class="input_box" v-model="item.description" placeholder="어떤 심리 테스트 인가요?">
      <button class="moco_btn mt-8" @click="next">다음</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "testRegister",
  data() {
    return {
      item: {
        authorization: '',
        testName: '',
        testSubName: '',
        description: '',
        imageFile: ''
      }
    }
  },
  created() {
    this.$root.$refs.Header.headerInfo = {
      type: 'back',
      title: '테스트 등록'
    }
  },
  methods: {
    setFile: function(e) {
      if(e.target.files[0]){
        this.item.imageFile = []
        this.item.imageFile[0] = e.target.files[0]
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById('preview').src = e.target.result
        };
        reader.readAsDataURL(e.target.files[0]);
      }
      console.log(this.item.imageFile)
    },
    next(){

    }
  }
}
</script>

<style scoped>

</style>
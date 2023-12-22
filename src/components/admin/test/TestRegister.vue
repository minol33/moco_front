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
      <input type="text" class="input_box" v-model="item.testName" placeholder="제목">
      <input type="text" class="input_box" v-model="item.testSubName" placeholder="부제목">
      <textarea class="input_box h-auto" v-model="item.description" placeholder="설명"></textarea>
      <hr>
      <div class="w-100">
        <p class="ml-10 mb-2 font-weight-bold text-grey-lighten-1">※ 유형 최소 2개 이상</p>
      </div>
      <div class="flex" v-for="(t_item, index) in item.types" :key="index">
        <div class="w-100">
          <p class="ml-8 mb-1 font-weight-bold text-grey-darken-1">유형 {{ index + 1 }}</p>
        </div>
        <input type="text" class="input_box" v-model="t_item.type" placeholder="유형 제목">
        <textarea class="input_box h-auto" v-model="t_item.description" placeholder="유형 설명"></textarea>
      </div>
      <button class="moco_btn mb-5" @click="item.types.push({ type: '', description: '' })">유형 추가</button>
      <hr>
      <div class="flex" v-for="(q_item, q_index) in item.questions" :key="q_index">
        <div class="w-100">
          <p class="ml-8 mb-1 font-weight-bold text-grey-darken-1">{{ q_index+1 }}번 문항</p>
        </div>
        <input type="text" class="input_box mb-1" v-model="q_item[0].content" placeholder="A.질문을 입력하세요">
        <div class="w-100 ml-16 mb-5" style="display: flex; flex-wrap: wrap">
          <div class="mr-5" v-for="(sub_1, index_1) in item.types" :key="index_1" style="display: flex; word-break: keep-all">
            <input class="mr-1" type="checkbox" :id="'q_' + q_index + 'sub_1_' + index_1" :disabled="!sub_1.type">
            <label :for="'q_' + q_index + 'sub_1_' + index_1">{{ sub_1.type ? sub_1.type : `유형${index_1+1} 정보 입력` }}</label>
          </div>
        </div>
        <input type="text" class="input_box mb-1" v-model="q_item[1].content" placeholder="B.질문을 입력하세요" @change="console.log(this.item)">
        <div class="w-100 ml-16 mb-5" style="display: flex; flex-wrap: wrap">
          <div class="mr-5" v-for="(sub_2, index_2) in item.types" :key="index_2" style="display: flex; word-break: keep-all">
            <input class="mr-1" type="checkbox" :id="'q_' + q_index + 'sub_2_' + index_2" :disabled="!sub_2.type">
            <label :for="'q_' + q_index + 'sub_2_' + index_2">{{ sub_2.type ? sub_2.type : `유형${index_2+1} 정보 입력` }}</label>
          </div>
        </div>
      </div>
      <button class="moco_btn mb-5" @click="item.questions.push([{ content: '', types: [] },{ content: '', types: [] }])">유형 추가</button>
      <hr>
      <button class="moco_btn btn_blue mb-5" @click="updateTest">다음</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "testRegister",
  data() {
    return {
      item: {
        testName: '',
        testSubName: '',
        description: '',
        imageFile: '',
        types: [
            { type: '', description: '' },
            { type: '', description: '' }
        ],
        questions: [
          [{ content: '', types: [] },{ content: '', types: [] }],
          [{ content: '', types: [] },{ content: '', types: [] }],
        ],
      }
    }
  },
  created() {
    this.$root.$refs.Header.headerInfo = {
      type: 'back',
      title: '테스트 등록'
    }
    console.log(this.item)
    console.log(this.item.types[0])
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
    async updateTest(){
      try {
        if (!this.item.imageFile) {
          this.httpAlert('error', '이미지를 첨부해 주세요')
          return
        }
        if (!this.item.testName) {
          this.httpAlert('error', '제목을 입력해 주세요')
          return
        }
        if (!this.item.testSubName) {
          this.httpAlert('error', '부제목을 입력해 주세요')
          return
        }
        if (!this.item.description) {
          this.httpAlert('error', '설명을 입력해 주세요')
          return
        }
        for (let i = 0; i < this.item.types; i++) {
          if (!this.item.types[i].type || !this.item.types[i].description) {
            this.httpAlert('error', `유형${i+1} 정보를 입력해 주세요`)
            return
          }
        }
        // for (let i = 0; i < this.item.questions; i++) {
        //   if (!this.item.questions[i].type || !this.item.questions[i].description) {
        //     this.httpAlert('error', `${i+1}번 문항 정보를 입력해 주세요`)
        //     return
        //   }
        // }
        const formData = new FormData()
        formData.append('testName', this.item.testName)
        formData.append('testSubName', this.item.testSubName)
        formData.append('testDescription', this.item.description)
        formData.append('imageFile', this.item.imageFile)
        formData.append('types', JSON.stringify(this.item.types))
        formData.append('questions', JSON.stringify(this.item.questions))
        this.$post(this.$TESTS, 'test_register', formData, true, (result) => {
          console.log(result, 'result')


          // this.$router.push({name: 'Main'})
        }, (result) => {
          this.httpAlert('error', result.message)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
hr {
  width: 85%;
  border: 1px solid #eee;
  margin-bottom: 20px;
}
</style>
<template>
  <div>
    <div class="flex">
      <p class="total_text">등록된 테스트 개수 ( {{ items.length ? items.length : 0 }} )</p>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
              color="primary"
              v-bind="props"
          >
            {{ sortTitle }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              v-for="(item, index) in sortItems"
              :key="index"
              :value="item.value"
          >
            <v-list-item-title @click="getSearchData(item)">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="container flex-wrap flex-row">
      <div class="test_list" v-for="item in items" :key="item.id">
        <div class="test_item">
          <img :src="`https://aqnmhrbebgwoziqtyyns.supabase.co/storage/v1/object/public/moco-images/${item.path}`"
               alt="test_img">
          <div class="delete_hover">
            <v-icon class="delete_icon" icon="mdi-close-circle" :size="30" @click="deleteTest(item.id)" />
          </div>
        </div>
        <h3 class="font-weight-bold">{{ item.name }}</h3>
        <p class="text-caption">{{ formatDate(item.created_at) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestList",
  data() {
    return {
      searchData: {
        page: '1',
        limit: '10',
        search: '',
        sort: 'NEWEST'
      },
      items: [],
      sortItems: [
        {title: '최신순', value: 'NEWEST'},
        {title: '오래된순', value: 'OLDEST'},
        {title: '인기순', value: 'MOST_POPULAR'},
        {title: '비인기순', value: 'LEAST_POPULAR'},
      ]
    }
  },
  created() {
    this.$root.$refs.Header.headerInfo = {
      type: 'back',
      title: '테스트 목록'
    }
    this.getData()
  },
  computed: {
    sortTitle: function () {
      let t
      this.sortItems.forEach((item) => {
        if (item.value === this.searchData.sort) {
          t = item.title
        }
      })
      return t
    }
  },
  methods: {
    deleteTest: function (idx) {
      this.$root.$refs.Confirm.showDialog('', '테스트를 삭제 하시겠습니까?', '취소', '삭제', () => {
        console.log('삭제')
        this.$delete(this.$TESTS + '/' + idx, 'delete_test_list', true, (result) => {
          console.log(result)
          this.httpAlert('success', result.message)
          this.getData()
        }, (result) => {
          this.httpError(result)
        })
      }, () => {})
    },
    getSearchData: function (item) {
      console.log(item)
      this.searchData.sort = item.value
      this.getData()
    },
    getData: function () {
      const params = new URLSearchParams(this.searchData);
      params.forEach((value, key) => { // never reaches `c`
        if (value === '')
          params.delete(key);
      });
      console.log(params.toString());
      this.$get(this.$TESTS, 'get_test_list', true, (result) => {
        console.log(result.result)
        this.items = result.result
      }, (result) => {
        this.httpError(result)
      })
    }
  }

}
</script>

<style scoped>
.flex {
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
}

.test_list {
  width: 40%;
  margin: 10px;
}

.test_item {
  height: 200px;
  position: relative;
}

.test_item img:hover ~ .delete_hover {
  display: block;
}
.delete_icon:hover ~ .delete_hover {
  display: block;
}
.delete_hover {
  //display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #eee;
}

.test_item img {
  width: 100%;
  min-width: 150px;
  height: 100%;
  object-fit: cover;
}

.total_text {
  color: #3084B2;
  font-size: 14px;
  font-weight: 500;
}
</style>
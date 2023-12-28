<template>
  <div>
    <div>
      <img :src="`https://aqnmhrbebgwoziqtyyns.supabase.co/storage/v1/object/public/moco-images/${items[0].path}`" alt="test_img">
      <p>title: {{ items[0].name }}</p>
      <p>{{ items[0].created_at }}</p>
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
    }
  },
  created() {
    this.$root.$refs.Header.headerInfo = {
      type: 'back',
      title: '테스트 목록'
    }
    this.getData()
  },
  methods: {
    getData: function (){
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

</style>
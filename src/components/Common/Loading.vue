<template>
  <div
      v-if="is_loading"
      class="loading_wrap"
  >
    <div class="loading_bg"></div>
    <div class="dot_container">
      <div class="lds-ellipsis">
        <div><span class="hide">dot1</span></div>
        <div><span class="hide">dot2</span></div>
        <div><span class="hide">dot3</span></div>
        <div><span class="hide">dot4</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading"
  ,props: []
  ,data: function(){
    return {
      is_loading: false
    }
  }
  , methods: {
    on: function(){
      this.is_loading = true
    }
    , off: function(){
      setTimeout(() => {
        //console.log('off')
        this.is_loading = false
      }, 300)
    }
  }
  ,created() {
    console.log('Loading created !!')

    // this.$bus.$on('on', (type) => {
    //
    //   if(type){
    //     this.on()
    //   }else{
    //     this.off()
    //   }
    // })
  }
}
</script>

<style scoped>

@keyframes spinner {
  to {transform: rotate(-360deg);}
}

.spin {
  animation: spinner 2s linear infinite;
}
</style>
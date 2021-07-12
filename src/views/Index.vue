<template>
    <div>
        <Navigation :browserWidth="this.fixedBrowserWidth"></Navigation>
        <Header></Header>
        <First></First>
    </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'
import First from '@/components/First.vue'

export default {
  name: 'home',
  components: {
    Navigation,
    Header,
    First
  },
  data(){
    return{
      browserWidth:1330,
      fixedBrowserWidth:0,
    }
  },
  computed: {
    setmainwidth() {
      return {
        '--browserWidth': this.browserWidth,
      }
    },
  },
  watch: {
    browserWidth(val) {
      if(!this.timer) {
      // this.browserwidth=val
      this.timer = true
      let _this = this
        setTimeout(function () {
          _this.getbrowserwidth();
          _this.timer = false
        }, 500)
      }
      
    },
  },
  methods:{
    getbrowserwidth(){
      this.fixedBrowserWidth=Number(this.browserWidth);
    }
  },
  created() {
    this.fixedBrowserWidth=document.documentElement.clientWidth;
  },
  mounted() {
    const _this = this;
    window.onresize = () => {
      return (() => {
          _this.browserWidth= `${document.documentElement.clientWidth}`;
      })();
    };
  },
  destroyed(){
    window.onresize = null;
  }
}
</script>

<style lang="less">
*{
    margin: 0;
    padding: 0;
}
a{
  text-decoration: none;
}

</style>
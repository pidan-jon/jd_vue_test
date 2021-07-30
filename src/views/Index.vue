<template>
  <div class="indexroot">
    <Navigation :browserWidth="this.fixedBrowserWidth"></Navigation>
    <Header :browserWidth="this.fixedBrowserWidth"></Header>
    <First :browserWidth="this.fixedBrowserWidth"></First>
    <Seckill></Seckill>
    <Spec></Spec>
    <Footer :browserWidth="this.fixedBrowserWidth"></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'
import First from '@/components/First.vue'
import Footer from '@/components/Footer.vue'
import Seckill from '@/components/Seckill.vue'
import Spec from '@/components/Spec.vue'

export default {
  name: 'home',
  components: {
    Navigation,
    Header,
    First,
    Footer,
    Seckill,
    Spec
  },
  data(){
    return{
      browserWidth:1330,//浏览器宽度
      fixedBrowserWidth:0,//性能优化
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
    },//获取浏览器宽度
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
  font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
  color: #666;
  cursor:pointer; 
}
li{
  list-style: none;
}
button{
  cursor:pointer;
}
.indexroot{
  background-color: #f4f4f4;
}

</style>
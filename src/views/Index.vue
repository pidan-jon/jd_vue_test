<template>
  <div class="indexroot">
    <Navigation :browserWidth="this.fixedBrowserWidth"></Navigation>
    <Header :browserWidth="this.fixedBrowserWidth"></Header>
    <First :browserWidth="this.fixedBrowserWidth"></First>
    <Seckill></Seckill>
    <Spec></Spec>
    <div v-for="(item,i) in loadlNameList" :key="i">
      <!-- {{item}} -->
      <component :is="item"></component>
    </div>
    <div ref="loadingAnimation">
      <!-- <div ref="$ChannelSkeleton"  :style="channelSkeleton"></div> -->
    </div>
    <!-- <Feeds ref="Feeds"
          :style="FeedsStyle"></Feeds> -->
    <Footer :browserWidth="this.fixedBrowserWidth"></Footer>
  </div>
</template>

<script>
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
    Spec,
    Channel: resolve => require(['@/components/Channel.vue'], resolve),
    Feeds: resolve => require(['@/components/Feeds.vue'], resolve),
  },
  data(){
    return{
      browserWidth:1330,//浏览器宽度
      fixedBrowserWidth:0,//性能优化
      loadlNameList:[],
      ReadyloadlNameList:["Channel","Feeds"],
      loadingAnimation:{
        width:'1190px',
        height:'10px'
      },
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
    },
    scrollIndex() {
      if(this.ReadyloadlNameList.length>0){
        const { loadingAnimation} = this.$refs
        // const { $ChannelSkeleton,$Channel,Feeds} = this.$refs
        // const { channelSkeleton,channelStyle,boxStyle } = this
        const offset = loadingAnimation.getBoundingClientRect();
        const offsetTop = offset.top;
        const offsetBottom = offset.bottom;
        // const offsetHeight = offset.height;
        if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
          console.log("splice")
          this.loadlNameList=this.loadlNameList.concat(this.ReadyloadlNameList.splice(0,1))
        } else {

        }
      }
    },
    throttle(func, delay) {            
      var timer = null;            
      return function() {                                         
        if (!timer) {                    
            timer = setTimeout(() =>{                         
                func();                   
                timer = null;                    
            }, delay);                
        }            
      }        
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
    window.addEventListener("scroll", this.throttle(this.scrollIndex,1000), true);
  },
  destroyed(){
    window.onresize = null;
    window.removeEventListener('scroll', this.throttle(this.scrollIndex,1000), true);
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
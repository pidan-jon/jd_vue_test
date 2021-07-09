<template>
  <div class="nav" ref="nav" :style="setNavWidth" >
      <div class="main" ref="main" :style="setMainWidth">
          <div class="left">
              <CityList></CityList>
          </div>
          <div class="right">
              <ul>
                  <li><PhoneJD></PhoneJD></li>
                  <li class="spacer"></li>
                  <li><Navlist :mainWidth="this.mainWidth" :navtagName="this.tagNamelist[1].navtagName"
                  :NavlistData="gatSMBoxdata"></Navlist></li>
                  <li class="spacer"></li>
                  <!-- <li><SiteMap :mainWidth="this.mainWidth"></SiteMap></li> -->
                  <!-- <li class="spacer"></li> -->
                  <li><Navlist :mainWidth="this.mainWidth" :navtagName="this.tagNamelist[0].navtagName"
                  :NavlistData="gatCSBoxdata"
                  ></Navlist></li>
                  

                  <!-- <li>
                      <p>
                          {{$store.state.textname}}
                      </p>
                  </li> -->
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import PhoneJD from '@/components/Fs/Navigetion/PhoneJD.vue'
import SiteMap from '@/components/Fs/Navigetion/SiteMap.vue'
import CityList from '@/components/Fs/Navigetion/CityList.vue'
import Navlist from '@/components/Fs/Navigetion/Navlist.vue'
export default {
    name: 'Navigation',
    components: { 
        PhoneJD,
        SiteMap,
        CityList,
        Navlist
    },
    props: {
        browserWidth:{
            type: Number,
            default: 1300,
        },
    },
    data(){
      return {
        navRight:["登录"],
        clientWidth: '',
        mainwidth:0,
        tagNamelist:[
            {
                navtagName:"客户服务"
            },
            {
                navtagName:"网站导航"
            }
        ]
      }
    },
    computed: {
        navWidth:function(){
            return this.browserWidth
        },
        mainWidth:function(){
            if(this.navWidth<1130){
                return 990
            }else{
                return 1190
            }
        },
        setNavWidth() {
            return {
                '--navwidth': this.navWidth+'px'
            }
        },            
        setMainWidth() {
            return {
                '--mainwidth': this.mainWidth+'px'
            }
        },
        gatCSBoxdata: { 
            get() {
                return this.$store.state.CSboxdata
                },
            set(newValue) {
                 this.$store.state.CSboxdata = newValue
                 }
        },
        gatSMBoxdata: { 
            get() {
                return this.$store.state.SMboxdata
                },
            set(newValue) {
                 this.$store.state.SMboxdata = newValue
                 }
        }
    },
    watch: {
    },
    mounted() {
    },
    created() {
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "http://at.alicdn.com/t/font_2663232_sbvr8ri2rxq.css";
.iconfont{
    font-size:12px !important
}
</style>
<style scoped lang="less">
  :root {
    --navwidth: 1130px;
    --mainwidth: 990px;
  }
.nav{
    width: var(--navwidth,1130px);
    background: #e3e4e5;
    height: 30px;
    font-family:Arial,sans-serif;
    font-size:12px;
    line-height:30px;
    color: #999;
    border-bottom: 1px solid #ddd;
    .main{
        width: var(--mainwidth,1190px);
        height: 30px;
        margin: 0 auto;
        .left{
            float: left;
            height: 30px;
        }
        .right{
            float: right;
            ul{
                li{              
                    float: right;
                    list-style: none;

                }
                .spacer{
                    overflow: hidden;
                    margin: 11px 5px 0;
                    width: 1px;
                    height: 10px;
                    background-color: #ccc;
                }
            }
        }
    }
}
</style>
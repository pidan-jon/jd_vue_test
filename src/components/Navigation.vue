<template>
  <div class="nav" ref="nav" :style="setNavWidth" >
      <div class="main" ref="main" :style="setMainWidth">
          <div class="left">
              <a>
                <i class="icon">
                    <img src="../../public/img/icon/location.png">
                </i>
                <span>广西</span>
              </a>
          </div>
          <div class="right">
              <ul>
                  <li><PhoneJD></PhoneJD></li>
                  <li class="spacer"></li>
                  <li><SiteMap :mainWidth="this.mainWidth"></SiteMap></li>
                  <li class="spacer"></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import PhoneJD from '@/components/Fs/Navigetion/PhoneJD.vue'
import SiteMap from '@/components/Fs/Navigetion/SiteMap.vue'
export default {
    name: 'Navigation',
    components: { 
        PhoneJD,
        SiteMap
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
            a{
                .icon{
                    float: left;
                    img{
                        margin-top: 5px;
                        height: 20px;
                        width: 20px;
                    }
                }
                display: block;
                height: 30px;
                padding: 0 5px;
                span{
                    margin-left: 3px;
                }
            }
            a:hover{
            cursor:pointer;
            background: #fff;
            }
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
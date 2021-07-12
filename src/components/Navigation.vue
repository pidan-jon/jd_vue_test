<template>
  <div class="nav" ref="nav" :style="setNavWidth" >
      <div class="main" ref="main" :style="setMainWidth">
          <div class="left">
              <CityList></CityList>
          </div>
          <div class="right">
                <ul>
                    <li><PhoneJD></PhoneJD></li>
                    <li v-for="(item,i) in gatNavigation" :key="i">
                        <Navlist 
                            class="Navlist"
                            :mainWidth="mainWidth"
                            :navtagName="item.navtagName"
                            :NavlistData="item.boxdata"
                            :TagClass="item.tagClass">
                        </Navlist>
                        <span class="spacer"></span>
                    </li>
                </ul>
                <div class="register">
                    <a class="redalink" href="#">免费注册</a>
                </div>
                <div class="login">
                    <a class="linkhoverred" href="#">您好，请登录</a>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import PhoneJD from '@/components/Fs/Navigetion/PhoneJD.vue'
import CityList from '@/components/Fs/Navigetion/CityList.vue'
import Navlist from '@/components/Fs/Navigetion/Navlist.vue'
export default {
    name: 'Navigation',
    components: { 
        PhoneJD,
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
        gatNavigation: { 
            get() {
                return this.$store.state.Navigation
                },
            set(newValue) {
                 this.$store.state.Navigation = newValue
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

<style lang="less">
@import "http://at.alicdn.com/t/font_2663232_sbvr8ri2rxq.css";
.iconfont{
    font-size:12px !important
}
.Navlist{
    display: inline-block;
}
a{
    color:#999;
}
.redalink{
  color: red;
}
.linkhoverred{
    &:hover{
        color: #e33333;
    }
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
            ul{
                li{              
                    float: right;
                    list-style: none;
                    height: 30px;
                    .spacer{
                        display:inline-block;
                        overflow: hidden;
                        margin: 0px 5px 11px;
                        width: 1px;
                        height: 10px;
                        background-color: #ccc;
                    }
                }
            }
            .login{
                float:right;
                margin:  0 7px 0 0;
            }
            .register{
                float:right;
                margin:  0 7px 0 0;
            }
        }
    }
}
</style>
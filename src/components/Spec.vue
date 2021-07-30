<template>
  <div id="Spec" :class="{sm_spec:this.smMode}">
        <div class="Core1">
            <div class="core1_special_offer core1_box">
                <CoreTitle title="每日低价" :smMode="this.smMode"></CoreTitle>
                <SpecialOffer :smMode="this.smMode"></SpecialOffer>
            </div>
            <div class="core1_lightning_buy core1_box">
                <CoreTitle title="品牌闪购" :smMode="this.smMode"></CoreTitle>
                <LightningBuy></LightningBuy>
            </div>
        </div>
        <div class="nicegoods">
              <div class="nicegoods_logo">
                <a class="logo_container">
                    <div class="logo_title">
                        <p>探索新生活</p>
                    </div>
                </a>
              </div>
              <div class="nicegoods_slider">
                <div class="slide_list">

                </div>
                <div class="scroll">

                </div>
              </div>
          </div>
          <div  class="core2">
                  <div class="ligtning_buy_newArrival">
                      <CoreTitle title="新品首发"></CoreTitle>
                      <LBNewArrival></LBNewArrival>
                  </div>
                  <div class="ligtning_buy_JOY">
                      <CoreTitle title="JOY 寻宝"></CoreTitle>
                      <LBJOY></LBJOY>
                  </div>
                  <div class="ligtning_buy_nice-shop">
                      <CoreTitle title="逛好店"></CoreTitle>
                      <LBNiceshop></LBNiceshop>
                  </div>
                  <div class="ligtning_buy_coupon">
                      <CoreTitle title="领卷中心"></CoreTitle>
                      <LBCoupon></LBCoupon>
                  </div>
          </div>
      

  </div>
</template>

<script>
import SpecialOffer from '@/components/Spec/SpecialOffer.vue'
import LightningBuy from '@/components/Spec/LightningBuy.vue'
import CoreTitle from '@/components/Spec/CoreTitle.vue'
import LBNewArrival from '@/components/Spec/LBNewArrival.vue'
import LBJOY from '@/components/Spec/LBJOY.vue'
import LBNiceshop from '@/components/Spec/LBNiceshop.vue'
import LBCoupon from '@/components/Spec/LBCoupon.vue'
export default {
    name:"Spec",
    components:{
        SpecialOffer,
        LightningBuy,
        CoreTitle,
        LBNewArrival,
        LBJOY,
        LBNiceshop,
        LBCoupon
    },
    props: {
        browserWidth:{
            type: Number,
            default: 1330,
        },
    },
    data(){
        return{
            // smMode:false
        }
    },
    computed:{
        mainWidth(){
            if(this.browserWidth<1330){
                this.smMode=true
                return 990
            }else{
                this.smMode=false
                return 1190
            }
        },
        setMainWidth() {
            return {
                '--mainwidth': this.mainWidth+'px'
            }
        },
        smMode(){
            if(this.browserWidth<1330){
                return true
            }else{
                return false
            }
        },
    }
}
</script>

<style lang="less" scoped>
    #Spec{
        width: 1190px;
        height: 340px;
        margin: 20px auto;
        .Core1{
            height: 340px;
            margin: 20px auto 20px;
            .core1_box{
                width: 590px;
                height: 340px;
                float: left;
                background: #fff;
                position: relative;
            }
            .core1_special_offer{
                margin-right: 10px;
            }
            .core1_lightning_buy{
                margin-right: 0;
            }  
        }
    }
    .sm_spec{
        width: 990px;
        height: 305px;
    }
</style>
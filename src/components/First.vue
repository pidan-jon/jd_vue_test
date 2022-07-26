<template>
  <div id="first">
      <div class="fs_inner" :class="{sm_fs_inner:mainWidth==990}">
            <div class="fs_col1">
                <FsCol1  :mainWidth="mainWidth"></FsCol1>
            </div>
            <div class="fs_col2" >
                <div class="slidermain">
                    <div class="slider_banner">
                        <SliderBanner></SliderBanner>
                    </div>
                    <div class="slider_recommend" v-if="this.browserWidth>=1330">
                        <SliderRecommend></SliderRecommend>
                    </div>
                </div>
            </div>
          <div class="fs_col3">
            <div class="juser">
                <Juser></Juser>
            </div>
            <div class="jnews">
                <Jnews></Jnews>
            </div>
            <div class="jservice">
                <Jservice></Jservice>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import FsCol1 from './First/FsCol1.vue'
import SliderBanner from './First/SliderBanner.vue'
import SliderRecommend from './First/SliderRecommend.vue'
import Juser from './First/Juser.vue'
import Jnews from './First/Jnews.vue'
import Jservice from './First/Jservice.vue'

export default {
    name:'First',
    components: {
        FsCol1,
        SliderBanner,
        SliderRecommend,
        Juser,
        Jnews,
        Jservice,
    },
    props: {
        browserWidth:{
            type: Number,
            default: 1330,
        },
    },
        computed:{
        navWidth:function(){
            return this.browserWidth
        },//浏览器宽度
        mainWidth:function(){
            if(this.navWidth<1330){
                return 990
            }else{
                return 1190
            }
        },//通栏宽度
    },
}
</script>

<style lang='less' scoped>
    #first{
        background-color: #f4f4f4;
        height: 480px;
        position: relative;
        margin-bottom: 30px;
        .fs_inner{
            width: 1190px;
            height: 480px;
            margin: 0 auto;
            position: relative;
            .fs_col1,.fs_col2{
                height: 480px;
                margin-right: 10px;
                float: left;
            }
            .fs_col1{
                width: 190px;        
            }
            .fs_col2{
                width: 790px;
                margin-right: 10px;
                height: 480px;
                position: relative;
                display: inline-block;
                 margin-top: 10px;
                .slidermain{
                    background: pink;
                    .slider_banner{
                        margin-right: 10px;
                        float: left;
                    }
                    .slider_recommend{
                        float: left;
                    }
                }
            }
            .fs_col3{
                position: relative;
                height: 480px;
                width: 190px;
                float:right;
                .juser{
                    margin-top:10px ;
                }
                .jnews{
                    position: relative;
                    &::after {
                        position: absolute;
                        height: 1px;
                        left: 15px;
                        right: 15px;
                        background: -webkit-gradient(linear,right top,left top,from(white),color-stop(#eeeeee),color-stop(#eeeeee),to(white));
                        background: linear-gradient(270deg,white,#eeeeee,#eeeeee,white);
                        content: " ";
                        top: 0;
                        z-index: 3;
                    }
                }
                .jservice{
                    position: relative;
                    &::after{
                        position: absolute;
                        height: 1px;
                        left: 15px;
                        right: 15px;
                        background: -webkit-gradient(linear,right top,left top,from(white),color-stop(#eeeeee),color-stop(#eeeeee),to(white));
                        background: linear-gradient(270deg,white,#eeeeee,#eeeeee,white);
                        content: " ";
                        top: 0;
                        z-index: 3;
                    }
                }
            }
        }
        .sm_fs_inner{
            width: 990px;
            .fs_col2{
                width: 590px;
            }
            
        }
    }
</style>
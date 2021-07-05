<template>
  <div class="first">
      <div class="fs_inner">
          <div class="fs_col1">
              <FsCol1></FsCol1>
          </div>
          <div class="fs_col2">
              <div class="sliderBanner">
                  <SliderBanner></SliderBanner>
              </div>
              <div class="sliderRecommend">
                  
              </div>
          </div>
          <div class="fs_col3"></div>
      </div>
  </div>
</template>

<script>
import FsCol1 from './Fs/FsCol1.vue'
import SliderBanner from './Fs/SliderBanner.vue'
export default {
    name:'First',
    components: {
        FsCol1,
        SliderBanner
    }
}
</script>

<style lang='less' scoped>
    .first{
        background-color: #f4f4f4;
        height: 480px;
        position: relative;
        margin-bottom: 30px;
        // padding-top: 10px;
        .fs_inner{
            width: 1190px;
            height: 480px;
            margin: 0 auto;
            position: relative;
            .fs_col1,.fs_col2{
                height: 470px;
                margin-right: 10px;
                float: left;
                margin-top: 10px;
            }
            .fs_col1{
                width: 190px;        
            }
            .fs_col2{
                width: 790px;
                .sliderBanner{
                    width: 590px;
                    height: 470px;
                    margin-right: 10px;
                    float: left;
                }
                .sliderRecommend{
                    height: 470px;
                    width: 150px;
                    float: left;
                }
            }
            .fs_col3{
                position: relative;
                width: 190px;
                float:right;
                height: 470px;
                margin-top: 10px;
            }
        }
    }
</style>
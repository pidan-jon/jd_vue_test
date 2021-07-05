<template>
  <div class="nav">
      <div class="main">
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
                  <PhoneJD>手机京东</PhoneJD>
                  
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import PhoneJD from '@/components/Fs/Navigetion/PhoneJD.vue'
export default {
  name: 'Navigation',
  components: { PhoneJD },
  props: {
  },
  data(){
      return {
          navRight:["登录"]
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav{
    background: #e3e4e5;
    height: 30px;
    font-family:Arial,sans-serif;
    font-size:12px;
    line-height:30px;
    color: #999;
    .main{
        width: 80%;
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
        }
    }
}
</style>
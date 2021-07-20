<template>
  <div id="serviceroot">
      <div class="service_entry">
          <ul class="service_list">
              <li class="service_item" v-for="(item,index) in serviceList" :key="index">
                  <a @mouseenter="enter(index)" @mouseleave="leave()">
                      <i>
                          <img :src="item.img1" v-show="index!=currentIndex">
                          <img :src="item.img2" v-show="index==currentIndex">
                      </i>
                      <span>{{item.tag}}</span>
                  </a>
              </li>
          </ul>
      </div>
      <div class="service_pop">
          <div class="service_pop_item">

          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Jservice",
    computed:{
        serviceList(){
            return this.$store.state.serviceList;
        }
    },
    data(){
        return{
            currentIndex:99
        }
    },
    methods:{
        enter(index){
            this.currentIndex=index
        },
        leave(){
            this.currentIndex=99
        }
    }
}
</script>

<style lang="less" scoped>
    #serviceroot{
        overflow: hidden;
        position: relative;
        height: 238px;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
        background: #fff;
        .service_entry{
            overflow: hidden;
            padding: 5px .5px;
            background: #fff;
            .service_list{
                padding-top: 5px;
                height: 225px;
                .service_item{
                    position: relative;
                    float: left;
                    width: 63px;
                    height: 55px;
                    background: #fff;
                    text-align: center;
                    overflow: hidden;
                    a{
                        display: block;
                        position: relative;
                        *cursor: pointer;
                        -webkit-transition: all .2s linear;
                        transition: all .2s linear; 
                        i{
                            position: relative;
                            width: 28px;
                            height: 28px;
                            margin: 0 auto;
                            display: block;
                            transition: all .3s linear;
                            img{
                                width: 28px;
                                height: 28px;
                                display: block;
                            }
                        }
                        span{
                            display: block;
                            height: 25px;
                            line-height: 25px;
                            border-bottom: 2px solid #fff;
                            color: #333;
                            -webkit-transition: color .15s ease;
                            transition: color .15s ease;
                        }
                    }
                }
            }
        }
        .service_pop{
            position: absolute;
            width: 100%;
            height: 206px;
            background-color: #fff;
            -webkit-transition: all .2s ease;
            transition: all .2s ease;
            top: 232px;
            .service_pop_item {
                position: relative;
                /* z-index: 1; */
                width: 159px;
                height: 206px;
                padding: 0 15px;
                background-color: #fff;
            }
        }

    }
</style>
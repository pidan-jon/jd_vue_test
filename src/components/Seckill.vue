<template>
<!-- 秒杀组件 -->
    <div id="seckillroot">
        <div class="seckill_countdown">
            <div class="seckill_countdown_tit">
                京东秒杀
            </div>
            <div class="seckill_countdown_desc">
                <span class="countdown_desc_time">3:00</span>
                点场结束
            </div>
            <div class="seckill_countdown_main">
                <span class="countdown_hour countdown_timmer">
                    {{this.countdownHour}}
                </span>
                <span class="countdown_minute countdown_timmer">
                    {{this.countdownMinute}}
                </span>
                <span class="countdown_second countdown_timmer">
                    {{this.countdownSecond}}
                </span>
            </div>
        </div>
            <div class="seckill_slider" @mouseenter="enter()" @mouseleave="leave()">
                <div class="slider_control_prev slider_control" @click="prev_pic()" >
                    <i class="iconfont icon-sanjiaoxing"></i>
                </div>
                <div class="slider_control_next slider_control" @click="next_pic()" >
                    <i class="iconfont icon-sanjiaoxing"></i>
                </div>
                    <div class="slider_wrapper" style="left:-800px;" ref="mywrap">
                        <li class="slider_list" v-for="(item,i) in seckillList" :key="i">
                                <a class="slider_item" v-for="(item,i) in item.itemList" :key="i">
                                    <div class="item_pic">
                                        <img :src="item.img">
                                    </div>
                                    <div class="slider_item_desc">{{item.desc}}</div>
                                    <div class="seckill_price">
                                        <span class="price_discount">￥{{item.priceDiscount}}</span>
                                        <span class="price_origin">￥{{item.priceOrigin}}</span>
                                    </div>
                                </a>
                        </li>
                    </div>
            </div>
        <div class="seckill_brand">
            <a>
                <div class="brand_pic">
                    <img src="img/Seckill/seckillBrand.jpg">
                </div>
                <div class="brand_desc">
                    <p class="brand_tit">厨卫电器抢先购</p>
                    <p class="brand_txt">爆款直降赠好礼</p>
                    <div type="bottom" class="brand_bottom">
                        品类秒杀&gt;
                    </div>
                </div>

            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"Seckill",
    data(){
        return{
            countdownHour:"",
            countdownMinute:"",
            countdownSecond:"",
            imgSize:3,
        }
    },
    computed:{
        seckillList(){
            return this.$store.state.seckillList;
        }
    },
    methods: {
        enter(){
            clearInterval(this.timer);
        },//鼠标进入
        leave(){
            this.auto(); 
        },//鼠标离开
        next_pic () {
            let wrap = this.$refs.mywrap; 
            let newLeft = parseInt(wrap.style.left)
            if(newLeft == (this.imgSize+1)*(-800)){
                wrap.style.transition='none'
                newLeft = -800;
                wrap.style.left = newLeft + "px";
            }else{
                wrap.style.transition='all 200ms ease-in-out 0s'
                newLeft = newLeft-800;
                wrap.style.left = newLeft + "px";
                if(newLeft == (this.imgSize+1)*(-800)){
                    setTimeout(() => {
                    wrap.style.transition='none'
                    newLeft = -800;
                    wrap.style.left = newLeft + "px";
                    }, 300);
                }
            }
        },//上一张
        prev_pic () {
            let wrap = this.$refs.mywrap;
            let newLeft = parseInt(wrap.style.left);
            if(newLeft == 0){
                wrap.style.transition='none'
                newLeft = (this.imgSize)*(-800);
                wrap.style.left = newLeft + "px";
            }else{
                wrap.style.transition='all 200ms ease-in-out 0s'
                newLeft = newLeft+800;
                wrap.style.left = newLeft + "px";
                if(newLeft == 0){
                    setTimeout(() => {
                    wrap.style.transition='none'
                    newLeft = (this.imgSize)*(-800);
                    wrap.style.left = newLeft + "px";
                    }, 300);
                }
            }
        },//下一张
        auto(){
            // this.timer = setInterval(this.next_pic, 2000);
        },//自动轮播
    },
    mounted(){
        this.countdowntimer = setInterval(()=>{
            let count = new Date();
            this.countdownHour = count.getHours();
            this.countdownMinute = count.getMinutes();
            this.countdownSecond = count.getSeconds();
        }, 1000);
        this.auto();
    },
    beforeDestroy() {
        clearInterval(this.timer);
        clearInterval(this.countdowntimer);
    }
}
</script>

<style lang="less" scoped>
        #seckillroot{
            width: 1190px;
            height: 260px;
            margin: 0 auto;
            position: relative;background: #fff;
            .seckill_countdown{
                width: 190px;
                height: 260px;
                float: left;
                color: #fff;
                text-align: center;
                background-image: url(../../public/img/Seckill/Seckill.png);
                .seckill_countdown_tit{
                    font-size: 30px;
                    font-weight: 700;
                    margin-top: 30px;
                }
                .seckill_countdown_desc{
                    font-size: 14px;
                    margin-top: 90px;
                    height: 30px;
                    padding-top: 15px;
                    .countdown_desc_time{
                        font-size: 18px;
                        padding-right: 2px;
                        vertical-align: middle;
                        font-weight: bold;
                    }
                }
                .seckill_countdown_main{
                    width: 130px;
                    height: 30px;
                    margin: 10px auto 0;
                    .countdown_timmer{
                        width: 30px;
                        height: 30px;
                        float: left;
                        display: block;
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 33px;
                    }
                    .countdown_hour{
                        margin-right: 20px;
                        background: #2f3430;
                        &::after{
                            content: ":";
                            position: absolute;
                            left: 65px;
                        }
                    }
                    .countdown_minute{
                        margin-right: 20px;
                        background: #2f3430;
                        &::after{
                            content: ":";
                            position: absolute;
                            left: 115px;
                        }
                    }
                    .countdown_second{
                        background: #2f3430;
                    }
                }
            }
                .seckill_slider{
                    position: relative;
                    overflow: hidden;
                    width: 800px;
                    height: 260px;
                    float: left;
                    .slider_control{
                        transition: all .2s ease;
                        position: absolute;
                        top: 50%;
                        width: 25px;
                        height: 35px;
                        line-height: 35px;
                        background-color: rgba(0,0,0,.15);
                        margin-top: -20px;
                        font-size: 20px;
                        z-index: 2;
                        border: none;
                        transition: background-color .2s ease;
                        cursor: pointer;
                    }
                    .slider_control_next{
                        right: 0;
                        border-top-left-radius: 18px;
                        border-bottom-left-radius: 18px;
                        i{
                            right: 6px;
                            position: absolute;

                        }
                    }
                    .slider_control_prev{
                        left: 0;
                        border-top-right-radius: 18px;
                        border-bottom-right-radius: 18px;
                        i{
                            position: absolute;
                            left: 4px;
                        }
                    }
                    .slider_wrapper{
                    position: absolute;
                    width:4000px;
                    height: 260px;
                    z-index: 1;
                    transition: all 200ms ease-in-out 0s;
                        .slider_list{
                            width: 800px;
                            height: 260px;
                            float: left;
                            .slider_item{
                                width: 200px;
                                height: 260px;
                                float: left;
                                position: relative;
                                .item_pic{
                                    width: 140px;
                                    height: 140px;
                                    margin: 20px auto 0;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                                .slider_item_desc{
                                    font-size: 12px;
                                    font-weight: 400;
                                    color: #333;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    width: 160px;
                                    margin: 13px auto 0;
                                }
                                .seckill_price{
                                    width: 160px;
                                    height: 24px;
                                    margin: 7px auto 0;
                                    border: 1px solid #e1251b;
                                    position: relative;
                                    -webkit-box-sizing: border-box;
                                    box-sizing: border-box;
                                    line-height: 24px;
                                    overflow: hidden;
                                    background-color: #e1251b;
                                    .price_discount{
                                        width: 92px;
                                        height: 100%;
                                        text-align: center;
                                        color: #fff;
                                        font-size: 16px;
                                        font-weight: 700;
                                        line-height: 22px;
                                        float: left;
                                    }
                                    .price_origin{
                                        height: 100%;
                                        width: 66px;
                                        float: right;
                                        background: #fff;
                                        text-align: center;
                                        color: #999;
                                        font-size: 12px;
                                        line-height: 22px;
                                        -webkit-box-sizing: border-box;
                                        box-sizing: border-box;
                                        text-decoration: line-through;
                                        vertical-align: top;
                                    }
                                }
                                &::after{
                                    content: "";
                                    display: block;
                                    position: absolute;
                                    top: 50%;
                                    right: 0;
                                    width: 1px;
                                    height: 200px;
                                    transform: translateY(-50%);
                                    background: linear-gradient(180deg,white,#eeeeee,white);
                                }
                            }
                        }
                    }
                }
            .seckill_brand{
                width: 180px;
                height: 240px;
                margin: 10px;
                float: left;
                .brand_pic{
                    width: 120px;
                    height: 120px;
                    margin: 10px auto 0;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .brand_desc{
                    font-size: 14px;
                    text-align: center;
                    height: 100px;
                    background: linear-gradient(180deg,rgba(255,255,255,.5),rgba(220,224,236,.5));
                    .brand_tit{
                        margin-top: 10px;
                    }
                    .brand_txt{
                        font-weight: 700;
                        color: #000;
                    }
                    .brand_bottom{
                        color: #e1251b;
                        border-radius: 14px;
                        width: 82px;
                        height: 24px;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        text-align: center;
                        display: inline-block;
                        line-height: 22px;
                        font-weight: 700;
                        padding-left: 4px;
                        font-size: 12px;
                        border: 1px solid #e1251b;
                        margin-top: 4px;
                        -webkit-transition: background-color .2s ease;
                        transition: background-color .2s ease;
                        &:hover{
                            background-color: crimson;
                            color: #fff;
                        }
                    }
                }
            }
        }
</style>
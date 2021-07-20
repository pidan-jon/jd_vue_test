<template>
    <div id="SliderRecommendRoot" @mouseenter="listMouseover" @mouseleave="listMouseout">
        <div class="slider_control_prev slider_control" @click="sliderPrev" :class="{focusmain:IsMoserover}">
            <i class="iconfont icon-sanjiaoxing"></i>
        </div>
        <div class="slider_control_next slider_control" @click="sliderNext" :class="{focusmain:IsMoserover}">
            <i class="iconfont icon-sanjiaoxing"></i>
        </div>
        <div class="slider_list">
            <div class="slider_wrapper">
                <li class="slider_item" v-for="(item,i) in sliderRecommendList" :key="i"
                    :class="[{slider_active:i==IsActive},{slider_next:i==IsNext},{slider_prev:i==IsPrev}]">
                    <div class="slider_recommend">
                        <a class="recommend_item" v-for="(item,i) in item" :key="i">
                            <img :src="item">
                        </a>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SliderRecommend',
    data(){
        return{
            imgindex:'0',
            timer:'',
            IsMoserover:false,
            IsActive:0,
            IsNext:1,
            IsPrev:2,
        }
    },
        computed:{
            sliderRecommendList(){
                return this.$store.state.sliderRecommendList;
            }
        },
        methods:{
            sliderMove(){
                // this.IsActive++;
                if(this.IsActive==3){
                    this.IsActive=0;
                }        
            },
            sliderPrev:function(){
                this.IsActive++;
                if(this.IsActive==3){
                    this.IsActive=0;
                }    
            },
            sliderNext:function(){
                this.IsActive--;
                if(this.IsActive==-1){
                    this.IsActive=2;
                }    
            },
            listMouseover:function(){
                this.IsMoserover=true;
                clearInterval(this.timer);
                
            },
            listMouseout:function(){
                this.IsMoserover=false;
                this.timer = setInterval(this.sliderMove, 4000);
            },
        },
        mounted() {
            this.timer = setInterval(this.sliderMove, 4000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        }
}
</script>
<style lang="less">
    @import "http://at.alicdn.com/t/font_2663232_sbvr8ri2rxq.css";
</style>
<style lang="less" scoped>
    #SliderRecommendRoot{
        width: 190px;
        overflow: hidden;
        position: relative;
        .slider_list{
            overflow: hidden;
            .slider_wrapper{
                opacity: 1;
                width: 950px;
                transform: translate3d(0px, 0px, 0px);
                display: block;
                height: 470px;
                .slider_item{
                    float: left;
                    position: relative;
                    width: 190px;
                    left: 0px;
                    z-index: 1;
                    opacity: 0;
                    transition: opacity 200ms ease-in-out 0s;
                    .slider_recommend{
                        width: 190px;
                        vertical-align: top;
                        display: inline-block;
                        height: 100%;
                        .recommend_item{
                            height: 150px;
                            display: block;
                            margin-bottom: 10px;
                            img{
                                position: relative;
                                width: 100%;
                                height: 100%;
                                display: block;
                            }
                        }
                    }
                }
                .slider_active{
                    opacity: 1;
                }
                .slider_next{
                    left: -190px;
                }
                .slider_prev{
                    left: -380px;
                }
            }
        }
        .slider_control{
            opacity: 0;
            visibility: hidden;
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
            i{
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
                color: #fff;
                color: rgba(255,255,255,.8);
                -webkit-transition: color .2s ease;
                transition: color .2s ease;
            }
        }
        .slider_control_prev{
            left: 0;
            border-top-right-radius: 18px;
            border-bottom-right-radius: 18px;
            i{
                left: 4px;
            }
        }
        .slider_control_next{
            right: 0;
            border-top-left-radius: 18px;
            border-bottom-left-radius: 18px;
            i{
                right: -6px;
            }
        }
        .focusmain{
            opacity: 1;
            visibility:visible;
        }

    }
</style>
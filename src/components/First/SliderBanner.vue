<template>
    <div class="SliderBanner" @mouseenter="enter()" @mouseleave="leave()">
        <div class="wrap" style="left:-590px;" ref="mywrap" >
            <a v-for="(item,index) in bannerdatas" :key="index" :href="item.piclink">
                <img :src="item.picSrc" :alt="item.piccIndex">
            </a>
        </div>
        <div class="buttons">
            <span v-for="(item, index) in bannerDots" :key="index" class="banner_dots" 
                :class="{banner_dots_active:index==isShow}"
                @click="clickdot(index)" 
            ></span>
        </div>
        <a href="javascript:;" class="arrow arrow_left" @click="prev_pic()" >&lt;</a>
        <a href="javascript:;" class="arrow arrow_right" @click="next_pic()">&gt;</a>
    </div>
</template>

<script>
export default {
    name:'SliderBanner',
    data(){
        return{
            index:'',
            dotData:[],//图片索引数据
            dotSize:0,//图片索引个数
            isShow:0,//当前图片圆点
            bannerdatas:[
                {
                    picIndex:0,
                    picLink:'#',
                    picSrc:'img/banner/b5.jpg'
                },
                {
                    picIndex:1,
                    picLink:'#',
                    picSrc:'img/banner/b1.jpg'
                },
                {
                    picIndex:2,
                    picLink:'#',
                    picSrc:'img/banner/b2.jpg'
                },
                {
                    picIndex:3,
                    picLink:'#',
                    picSrc:'img/banner/b3.jpg'
                },
                {
                    picIndex:4,
                    picLink:'#',
                    picSrc:'img/banner/b4.jpg'
                },
                {
                    picIndex:5,
                    picLink:'#',
                    picSrc:'img/banner/b5.jpg'
                },
                {
                    picIndex:6,
                    picLink:'#',
                    picSrc:'img/banner/b1.jpg'
                },
            ]//图片数据
	    }
    },
    computed:{
        bannerDots:function(){
            var _this=this
            return this.dotData.filter(function(dot){
                return dot.dotIndex>0&&_this.dotSize-1>dot.dotIndex
            })
        },//图片圆点数组
        imgSize:function(){
            return this.dotSize-2
        }//当前图片个数
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
            if(newLeft == (this.imgSize+1)*(-590)){
                wrap.style.transition='none'
                newLeft = -1180;
                wrap.style.left = newLeft + "px";
            }else{
                wrap.style.transition='all 200ms ease-in-out 0s'
                newLeft = newLeft-590;
                wrap.style.left = newLeft + "px";
                if(newLeft == (this.imgSize+1)*(-590)){
                    setTimeout(() => {
                    wrap.style.transition='none'
                    newLeft = -590;
                    wrap.style.left = newLeft + "px";
                    }, 300);
                }
            }
            this.isShow++;
            if(this.isShow > this.imgSize-1){
                this.isShow = 0;
            }
        },//上一张
        prev_pic () {
            let wrap = this.$refs.mywrap;
            let newLeft = parseInt(wrap.style.left);
            if(newLeft == 0){
                wrap.style.transition='none'
                newLeft = (this.imgSize)*(-590);
                wrap.style.left = newLeft + "px";
            }else{
                wrap.style.transition='all 200ms ease-in-out 0s'
                newLeft = newLeft+590;
                wrap.style.left = newLeft + "px";
                if(newLeft == 0){
                    setTimeout(() => {
                    wrap.style.transition='none'
                    newLeft = (this.imgSize)*(-590);
                    wrap.style.left = newLeft + "px";
                    }, 300);
                }
            }
            this.isShow--;
            if(this.isShow < 0){
                this.isShow =  this.imgSize-1;
            }
        },//下一张
        auto(){
            // this.timer = setInterval(this.next_pic, 2000);
        },//自动轮播
        clickdot(i){
            let wrap = this.$refs.mywrap;
            var newLeft = (i+1)*(-590)
            wrap.style.left = newLeft + "px";
            this.isShow=i
        },//点击图片圆点
    },
    mounted() {
        this.dotSize=this.bannerdatas.length
        this.auto();
        this.dotData = this.bannerdatas.map((item) => {
            return Object.assign({},{'dotIndex':item.picIndex})
        })//提取索引数据
    },
    beforeUpdate() { 
    },
    updated() { 
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
}

</script>

<style lang='less' scoped>
.SliderBanner{
    height: 470px;
    width: 590px;
    position: relative;
    overflow: hidden;
    .wrap {
        position: absolute;
        width: 4130px;
        height: 470px;
        z-index: 1;
        transition: all 200ms ease-in-out 0s;
        img {
            float: left;
            width: 590px;
            height: 470px;
        }
    }
    .buttons {
        position: absolute;
        left: 50px;
        bottom:20px;
        width: 150px;
        height: 10px;
        z-index: 2;
        .banner_dots{
            width: 8px;
            height: 8px;
            margin-right: 4px;
            border: 1px solid rgba(0,0,0,.05);
            background: rgba(255,255,255,.4);
            position: relative;
            display: inline-block;
            border-radius: 50%;
            -webkit-transition: background .2s ease;
            transition: background .2s ease;
        }
        .banner_dots_active {
            width: 9px;
            height: 9px;
            top: 2px;
            left: 0;
            border: 3px solid rgba(0,0,0,.1);
            &::before{
                content: " ";
                width: 9px;
                height: 9px;
                position: absolute;
                border-radius: 50%;
                left: 0;
                background-color: white;
            }
        }
    }
    .arrow {
        position: absolute;
        top: 35%;
        color: rgba(204, 203, 203, 0.959);
        padding:0px 14px;
        border-radius: 50%;
        font-size: 50px;
        z-index: 2;
        display: block;
    }
    .arrow_left {
        left: 10px;
    }
    .arrow_right {
        right: 10px;
    }
    .arrow:hover {
        background-color: rgba(0,0,0,0.2);
    }
}

</style>
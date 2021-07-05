<template>
    <div class="SliderBanner" @mouseenter="enter(index)" @mouseleave="leave()">
        <div class="wrap" style="left:-590px;" ref="mywrap" >
            <a v-for="(val,name,index) in bannerhrefs" v-bind:key="index" :href="val">
                <img :src="name" :alt="val">
            </a>
        </div>
        <div class="buttons">
            <span v-for="(item, index) in datas" v-bind:key="index" class="bannerspan" :class="{active:index==isShow}"
            @click="clickdot(index)" 
            >{{item}}
            </span>
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
            ios:"ios",
            index:'',
            dots:[],
            isShow:0,
            datas: ['1','2','3','4','5'],
            bannerhrefs:{
                '/img/banner/b5.jpg':'1#',
                '/img/banner/b1.jpg':'2#',
                '/img/banner/b2.jpg':'3#',
                '/img/banner/b3.jpg':'#',
                '/img/banner/b4.jpg':'#',
                '/img/banner/b5.jpg':'#',
                '/img/banner/b1.jpg':'#',
            },
            bannerdatas:{
                0:'/img/banner/b5.jpg',
                1:'/img/banner/b1.jpg',
                2:'/img/banner/b2.jpg',
                3:'/img/banner/b3.jpg',
                4:'/img/banner/b4.jpg',
                5:'/img/banner/b5.jpg',
                6:'/img/banner/b1.jpg',
            }
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
            var wrap = this.$refs.mywrap;   // 获取自定义属性值
            var newLeft = parseInt(wrap.style.left)
            if(newLeft == "-3540"){
                newLeft = -1180;
            }else{
                newLeft = newLeft-590;
            }
            wrap.style.left = newLeft + "px";
            this.isShow++;
            if(this.isShow > 4){
                this.isShow = 0;
            }
        },//上一张
        prev_pic () {
            let wrap = this.$refs.mywrap;
            var newLeft = parseInt(wrap.style.left);
            if(newLeft == "0"){
                newLeft = -2360;
            }else{
                newLeft = newLeft+590;
            }
            wrap.style.left = newLeft + "px";
            this.isShow--;
            if(this.isShow < 0){
                this.isShow = 4;
            }
        },//下一张
        auto(){
            this.timer = setInterval(this.next_pic, 1000);
        },//自动轮播
        clickdot(index){
            let wrap = this.$refs.mywrap;
            var newLeft = (index+1)*(-590)
            wrap.style.left = newLeft + "px";
            this.isShow=index
        }//点击点
    },
    mounted() {
        this.timer = setInterval(()=>{
            this.$nextTick(() => {
                this.next_pic;
            })},
            1000);
        this.dots =document.getElementsByClassName("bannerspan");
    },//页面挂载
    beforeUpdate() { 
    },
    updated() { 
    },
}

</script>

<style lang='less' scoped>
a{
    text-decoration: none;
}
.SliderBanner{
    height: 470px;
    width: 590px;
    position: relative;
    box-shadow: 0 0 5px green;
    overflow: hidden;
    .wrap {
        position: absolute;
        width: 4130px;
        height: 470px;
        z-index: 1;
        img {
            float: left;
            width: 590px;
            height: 470px;
        }
    }
    .buttons {
        position: absolute;
        right: 50px;
        bottom:20px;
        width: 150px;
        height: 10px;
        z-index: 2;
        span {
            margin-left: 5px;
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: green;
            text-align: center;
            color:white;
            cursor: pointer;
        }
        span.on{
            background-color: red;
        }
        .active {
            background-color: #5e13b4;
            color: #fff;
        }
    }
    .arrow {
        position: absolute;
        top: 35%;
        color: green;
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
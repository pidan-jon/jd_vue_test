<template>
  <div id="header" :style="setNavWidth">
      <div class="main" :style="setMainWidth">
          <div class="logo">
              <a></a>
          </div>
          <div class="adlogo" v-if="this.browserWidth>=1330">
              <a></a>
          </div>
            <div class="c-ssticky" ref="$box" :style="boxStyle">
                <div ref="content" class="content" :style="contentStyle">
                    <div class="serach">
                            <div class="logo_fix">
                            </div>
                            <div class="serachbox" :class="{sm_serachbox:mainWidth==990}">
                                <div class="searchreminder"></div>
                                <input placeholder="输入" class="input">
                                <span>
                                    <a class="camera"></a>
                                </span>
                                <button type="button" @click="choise()" >
                                    <img class="search" src="../../public/img/icon/search.png">
                                </button>
                            </div>
                            <div class="cart" :class="{sm_cart:mainWidth==990}">
                                <i ></i>
                                <a href="#">我的购物车</a>
                            </div>
                            <div class="hotwords" ref="hotwords">
                                <ul>
                                    <a v-for="item in hotword" :key="item">
                                        {{ item }}
                                    </a>
                                </ul>
                            </div>  
                    </div>
                </div>
            </div>
            <div class="headeritems">
                <ul>
                    <a v-for="item in hotword" :key="item">
                        {{ item }}
                    </a>
                </ul>
            </div>  
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
    components: {
    },
    props: {
        browserWidth:{
            type: Number,
            default: 1330,
        },
        top: {
            type: [String],
            default: "60px",
        },
        left: {
            type: [String],
            default: 'unset',
        },
    },
    data(){
        return{
            boxStyle: {
                position: 'static',
                top: 0,
                left: 0,
                width: 'auto', // 占位，为了形成数据绑定
                height: 'auto',
            },
            contentStyle: {
                position: 'static',
                top: 0,
                left: 0,
                width: 'auto',
                height: 'auto',
            },
            isFixedX: false, // 是否已经设置为fixed布局，用于优化性能，防止多次设置
            isFixedY: false, // 是否已经设置为fixed布局，用于优化性能，防止多次设置
            isSupport: this.cssSupport('position', 'sticky'),
            // isSupport: false,
        }
    },
    computed:{
        navWidth:function(){
            return this.browserWidth
        },
        mainWidth:function(){
            if(this.navWidth<1330){
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
        hotword(){
            return this.$store.state.hotword;
        },
    },
    methods:{
        choise:function(){
            console.log("a")
        },
        // 判断是否支持某样式的函数
        cssSupport(attr, value) {
        let element = document.createElement('div')
        if (attr in element.style) {
            element.style[attr] = value
            return element.style[attr] === value
        } else {
            return false
        }
        },

        // 获取dom数据
        getContentSize() {
        // 获取内容容器宽高信息
        const style = window.getComputedStyle(this.$refs.$content)

        // 设置盒子容器的宽高，为了后续占位
        this.boxStyle.width = style.width
        this.boxStyle.height = style.height
        },
        
        scrollHandler() {
            const { $content, $box } = this.$refs
            const { contentStyle } = this
            const boxTop = $box.getBoundingClientRect().top
            const boxLeft = $box.getBoundingClientRect().left
            const contentTop = $content.getBoundingClientRect().top
            const contentLeft = $content.getBoundingClientRect().left

            if (this.top !== 'unset') {
                if (boxTop > parseInt(this.top) && this.isFixedY) {
                this.isFixedY = false
                contentStyle.position = 'static'
                } else if (boxTop < parseInt(this.top) && !this.isFixedY) {
                this.isFixedY = true
                contentStyle.position = 'fixed'
                this.onResize()
                }

                // 当位置距左位置不对时，重新设置fixed对象left的值，防止左右滚动位置不对问题
                if (contentLeft !== boxLeft && this.left === 'unset') {
                this.onResize()
                }
            }

            if (this.left !== 'unset') {
                if (boxLeft > parseInt(this.left) && this.isFixedX) {
                this.isFixedX = false
                contentStyle.position = 'static'
                } else if (boxLeft < parseInt(this.left) && !this.isFixedX) {
                this.isFixedX = true
                contentStyle.position = 'fixed'
                this.onResize()
                }

                // 当位置距左位置不对时，重新设置fixed对象left的值，防止左右滚动位置不对问题
                if (contentTop !== boxTop && this.top === 'unset') {
                this.onResize()
                }
            }
        },
    },
    mounted(){
        if (!this.isSupport) { // 不支持sticky
            this.getContentSize() // 获取内容宽高
            this.scrollHandler() // 主动触发一次位置设置操作
            window.addEventListener('resize', this.onResize)
            window.addEventListener('scroll', this.scrollHandler, true)
        } else {
            this.boxStyle = {
                position: 'sticky',
                top: this.top,
                left: this.left,
            }
        }
    },
    beforeDestroy() {
        if (!this.isSupport) {
            window.removeEventListener('resize', this.onResize)
            window.removeEventListener('scroll', this.scrollHandler, true)
        }
    },
}
</script>

<style scoped lang="less">
:root {
    --navwidth: 1330px;
    --mainwidth: 1190px;
}
#header{
    width: var(--navwidth,1330px);
    height: 140px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    margin: 0 auto;
    .main{
        height: 140px;
        width: var(--mainwidth,1190px);
        margin: 0 auto;
        position: relative;
        .logo{
            position: absolute;
            left: 0;
            margin: auto 10px;
            top: 10px;
            a{
                background-image: url(/img/header/left.gif);
                background-size:contain;
                background-repeat:no-repeat;
                display: block;
                width: 190px;
                height: 120px;
            }
        }
        .adlogo{
            top: 10px;
            position: absolute;
            right: 0;
            a{
                display: block;
                background-image: url(/img/header/right.gif);
                background-size:contain;
                background-repeat:no-repeat;
                width: 190px;
                height: 120px;
            }
        }
        .serach{
            position: relative;
            height: 60px;
            .serachbox{
                position: absolute;
                top: 25px;
                left: 260px;
                width: 546px;
                height: 32px;
                border: solid 2px #e1251b;
                .input{     
                    height: 26px;
                    width: 425px;
                    border: 1px solid transparent;
                    position: absolute;
                    left: 0;
                    padding: 2px 44px 2px 17px;
                    line-height: 26px;
                    outline:medium
                }
                .searchreminder{
                    position: absolute;
                    top: 0;
                    left: 0;
                    padding: 2px 44px 2px 17px;
                    border: 1px solid transparent;
                    outline: none;
                    font-size: 12px;
                    width: 425px;
                    height: 26px;
                }
                .camera{
                    position: absolute;
                    display: block;
                    right: 75px;
                    top: 10px;
                    width: 19px;
                    height: 15px;
                    background-image: url(/img/icon/camera.png);
                    background-size:contain;
                    background-repeat:no-repeat;
                }
                button{
                    position: absolute;
                    right: -2px;
                    top: -1px;
                    width: 58px;
                    height: 35px;
                    background-color: #e1251b;
                    border: none;
                    transition-property: background;
                    transition-duration: 0.2s;
                    transition-timing-function: ease;
                    transition-delay: 0s;
                    border-radius: 0;
                    &:hover{
                        background-color: #c81623;
                    }
                    .search{
                        width: 20px;
                    }
                }
            }
            .sm_serachbox{
                width: 486px;
                left: 220px;
            }  
            .cart{
                position: absolute;
                right: 230px;
                top: 25px;
                width: 130px;
                height: 34px;
                background-color: #fff;
                border: solid 1px #eee;   
                line-height: 34px;
                i{
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    margin: 0 3px 0 20px;
                    background-image: url(/img/icon/cat.png);
                    background-size:contain;
                    background-repeat:no-repeat;
                    vertical-align: middle;
                }
                a{
                    text-align: center;
                    color: #e1251b;
                    vertical-align: middle;
                }
                &:hover{
                    border:1px solid #c81623;
                    a{
                        color: #c81623;
                    }
                }             
            }
            .sm_cart{
                right: 130px;
            }
        }
        .hotwords{
            overflow: hidden;
            position: absolute;
            left: 260px;
            top: 65px;
            width: 550px;
            height: 20px;
            line-height: 20px;
            a{
                float: left;
                font-size: 12px;
                margin-right: 10px;
                white-space: nowrap;
                &:first-child{
                    color: #e1251b;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        .headeritems{
            overflow: hidden;
            position: absolute;
            left: 203px;
            bottom: 0;
            height: 40px;
            padding-top: 20px;
            a{
                position: relative;
                display: block;
                float: left;
                height: 40px;
                line-height: 40px;
                font-size: 15px;
                color: #333;
                margin: 0 11px;
                -webkit-transition: color .2s ease;
                transition: color .2s ease;
                &:nth-child(-n+2){
                    font-weight: 700;
                    color: #e1251b;
                }
            }
        }
    }
}
</style>
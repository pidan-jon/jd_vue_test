<template>
  <div id="header" :style="setNavWidth">
      <div class="main" :style="setMainWidth">
          <div class="logo">
              <a></a>
          </div>
          <div class="adlogo">
              <a></a>
          </div>
          <div class="serach">
                <div class="serachbox">
                    <div class="searchreminder"></div>
                    <input placeholder="输入" class="input">
                    <span>
                        <a class="camera"></a>
                    </span>
                    <button type="button" @click="choise()" >
                        <img class="search" src="../../public/img/icon/search.png">
                    </button>
                </div>
                <div class="cart">
                    <i ></i>
                    <a href="#">我的购物车</a>
                </div>
                <div class="hotwords">
                    <ul>
                        <a v-for="item in hotword" :key="item">
                            {{ item }}
                        </a>
                    </ul>
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
            default: 1300,
        },
    },
    computed:{
        navWidth:function(){
            return this.browserWidth
        },
        mainWidth:function(){
            if(this.navWidth<1130){
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
        }
    }
}
</script>

<style scoped lang="less">
:root {
    --navwidth: 1130px;
    --mainwidth: 990px;
}
#header{
    width: var(--navwidth,1130px);
    height: 140px;
    border-bottom: 1px solid #ddd;
    background: #fff;
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
                    right: 0;
                    top: 0;
                    width: 58px;
                    height: 32px;
                    background-color: #e1251b;
                    border: none;
                    transition-property: background;
                    transition-duration: 0.2s;
                    transition-timing-function: ease;
                    transition-delay: 0s;
                    &:hover{
                        background-color: #c81623;
                    }
                    .search{
                        width: 20px;
                    }
                }
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
                    margin-right: 10px;
                    background-image: url(/img/icon/cat.png);
                    background-size:contain;
                    background-repeat:no-repeat;
                }
                a{
                    text-align: center;
                    color: #e1251b;
                }             
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
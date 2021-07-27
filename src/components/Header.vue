<template>
  <div id="header" :style="setNavWidth">
      <div class="main" :style="setMainWidth">
          <div class="logo">
              <a></a>
          </div>
          <div class="adlogo" v-if="this.browserWidth>=1330">
              <a></a>
            </div>
                <Stickybox @func="getIsFixed">
                <div class="serach" :class="{slot:isFixed}">
                    <div class="logo_fix" v-show="isFixed" :class="[{logo_fix:isFixed},{sm_logo_fix:mainWidth==990}]">
                        <a class="logo_fix_lk"></a>
                    </div>
                    <div class="serachbox" :class="[{sm_serachbox:mainWidth==990},{fix_serachbox:isFixed}]">
                        <div class="searchreminder"></div>
                        <input placeholder="输入" class="input">
                        <span>
                            <a class="camera"></a>
                        </span>
                        <button type="button" @click="choise()" >
                            <img class="search" src="img/icon/search.png">
                        </button>
                    </div>
                    <div class="cart" :class="[{sm_cart:mainWidth==990},{fix_cart:isFixed}]">
                        <i ></i>
                        <a href="#">我的购物车</a>
                    </div>
                    <div class="hotwords" ref="hotwords" v-show="!isFixed">
                        <ul>
                            <a v-for="item in hotword" :key="item">
                                {{ item }}
                            </a>
                        </ul>
                    </div>  
                </div>
                </Stickybox>

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
import Stickybox from "@/components/sticky-box.vue";
export default {
    name: "Header",
    components: {
        Stickybox
    },

    props: {
        browserWidth:{
            type: Number,
            default: 1330,
        },
    },
    data(){
        return{
            isFixed:false
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
        getIsFixed(data){
            this.isFixed=data
        }
    },
    mounted(){
    }
}
</script>

<style scoped lang="less">
:root {
    --navwidth: 1330px;
    --mainwidth: 1190px;
}
#header{
    // width: var(--navwidth,1330px);
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
                background-image: url(../../public/img/header/left.gif);
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
                background-image: url(../../public/img/header/right.gif);
                background-size:contain;
                background-repeat:no-repeat;
                width: 190px;
                height: 120px;
            }
        }
        .serach{
            position: relative;
            height: 60px;
            width: var(--mainwidth,1190px);
            .logo_fix{
                display: block;
                position: absolute;
                left: 180px;
                top: 4px;
                width: 125px;
                height: 40px;
                .logo_fix_lk{
                    background-image: url(../../public/img/header/jdlogo.png);
                    background-position: 0 -120px;
                    background-repeat: no-repeat;
                    overflow: hidden;
                    display: block;
                    width: 125px;
                    height: 40px;
                    text-indent: -999px;
                }
            }
            .sm_logo_fix{
                left: 0;
            }
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
                    background-image: url(../../public/img/icon/camera.png);
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
            .fix_serachbox{
                left: 450px;
                top: 6px;
                
            }
            .sm_serachbox.fix_serachbox{
                left: 300px;
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
                    background-image: url(../../public/img/icon/cat.png);
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
            .fix_cart{
                right: 30px;
                top: 6px;
            }


        }
        .slot{
            height: 50px;

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
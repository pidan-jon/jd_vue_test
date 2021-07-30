<template>
    <div id="specialofferroot" :class="{sm_specialoffer:smMode}">
        <div class="specialoffer_head">
            <div class="specialoffer_tag">
                <a class="specialoffer_tag_item" :href="item.link" @mouseenter="enter(i)" @mouseleave="leave(i)"
                    :class="{tag_item_active:currentItem==i}"
                    v-for="(item,i) in SpecialOffer" :key="i">
                    {{item.tag}}
                </a>
            </div>
        </div>
        <div class="specialoffer_inner" v-for="(items,k) in SpecialOffer" :key="k"
                :class="{specialoffer_inner_active:currentItem==k}">
                <a class="specialoffer_col"  v-for="(item,i) in items.list" :key="i"
                    :class="{specialoffer_col1:i==0}">
                    <div class="col_pic">
                        <img :src="item.pic">
                        <div class="col_slogan">
                            <span>{{item.slogan}}</span>
                            天最低价
                        </div>
                    </div>
                    <div class="col_message">
                        <div class="col_desc">
                            {{item.desc}}
                        </div>
                        <div class="col_price">
                            <span class="col_discount">￥{{item.discount}}</span>
                            <span class="col_origin">￥{{item.origin}}</span>
                        </div>
                        <div class="col_soldmsg">
                            已抢
                            <span class="col_soldnum">{{item.soldnum}}</span>
                            件
                        </div>
                    </div>
                </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"SpecialOffer",
    props:{
        smMode:{
            type:Boolean,
            define:false
        }
    },
    data(){
        return{
            currentItem:0,
        }
    },
    computed:{
        SpecialOffer(){
            return this.$store.state.SpecialOffer;
        },
    },
    methods:{
        enter(i){
            this.currentItem=i
        },
        leave(i){

        }
    }
    
}
</script>

<style lang="less" scoped>
    #specialofferroot{
        width: 560px;
        height: 340px;
        position: relative;
        padding: 0 15px;
        background: #fff;
        .specialoffer_head{
            width: 550px;
            height: 60px;
            padding: 0 5px;
            .specialoffer_tag{
                position: absolute;
                right: 15px;
                top: 15px;
                .specialoffer_tag_item{
                    position: relative;
                    display: inline-block;
                    margin: 0 13.5px;
                    display: inline-block;
                    font-size: 14px;
                    line-height: 19px;
                    padding-bottom: 2px;
                }
                .tag_item_active{
                    color: #e1251b;
                    &::after{
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #e1251b;
                    }
                }
            }
        }
        .specialoffer_inner{
            width: 560px;
            height: 270px;
            display: none;
            .specialoffer_col{
                
                    position: relative;
                    float: left;
                    width: 170px;
                    height: 89px;
                    margin-left: 19px;
                    margin-bottom: 48px;
                    &:nth-child(-n+3):nth-child(n+2){
                        margin-top: 18px;
                    }
                        .col_pic{
                            float: left;
                            width: 84px;
                            height: 84px;
                            img{
                                width: 100%;
                                height: 100%;
                            };
                            .col_slogan{
                                overflow: hidden;
                                width: 84px;
                                height: 16px;
                                font-size: 11px;
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                background: rgba(0,0,0,.6);
                                white-space: nowrap;
                                color: #fff;
                                text-align: center;
                                line-height: 16px;
                            }
                        }
                        .col_message{
                            width: 75px;
                            float: left;
                            .col_desc{
                                width: 75px;
                                line-height: 16px;
                                font-size: 12px;
                                display: inline-block;
                                text-overflow:ellipsis;
                                word-break:break-all;
                                text-overflow:hidden;
                            }
                            .col_price{
                                .col_discount{
                                    font-size: 14px;
                                    line-height: 16px;
                                    color: #e1251b;
                                    letter-spacing: 0;
                                    margin-top: 5px;
                                    font-weight: 700;
                                    display: inline-block;
                                }
                                .col_origin{
                                    display: inline-block;
                                    text-decoration: line-through;
                                    font-family: sans-serif,serif;
                                    color: #999;
                                    font-size: 12px;
                                    line-height: 14px;
                                    -webkit-transform: scale(.8);
                                    -ms-transform: scale(.8);
                                    transform: scale(.8);
                                    margin-top: 2px;
                                    -webkit-transform-origin: top left;
                                    -ms-transform-origin: top left;
                                    transform-origin: top left;
                                }
                            }
                            .col_soldmsg{
                                line-height: 16px;
                                color: #999;
                                .col_soldnum{
                                    display: inline-block;
                                    line-height: 18px;
                                    color: #e1251b;
                                }
                            }
                        }
            }
            .specialoffer_col1{
                background-color: rgba(109,126,146,.05);
                width: 170px;
                height: 265px;
                margin: 0 6px 0 0;
                .col_pic{
                    width: 120px;
                    height: 120px;
                    margin: 45px auto 0;
                    float:none;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .col_slogan{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 90px;
                        height: 24px;
                        background: rgb(241, 233, 108);
                        line-height: 24px;
                        text-align: center;
                    }
                }
                .col_message{
                    width: 170px;
                    height: 80px;
                    .col_desc{
                        width: 170px;
                        height: 19px;
                        margin: 9px auto 0;
                        font-size: 14px;  
                        text-align: center;              
                        }
                    .col_price{
                        margin-top: 4px;
                        width: 170px;
                        text-align: center; 
                        .col_discount{
                            font-size: 18px;
                            line-height: 16px;
                        }
                        .col_origin{

                            line-height: 16px;
                        }
                    }
                    .col_soldmsg{
                        margin-top: 8px;
                        text-align: center;
                    }

                }
            }
        }
        .specialoffer_inner_active{
            display: block;
        }
        
    }
    .sm_specialoffer{
        height: 305px;
        width: 490px;
    }
</style>
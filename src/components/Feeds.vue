<template>
    <div id="feedsroot">
        <div class="feeds_title">
            <p class="feeds_tit">
                <i class="feeds_tit_before feeds_tit_i"></i>
                为你推荐
                <i class="feeds_tit_after feeds_tit_i"></i>
            </p>
        </div>
        <div class="feeds_tag">
            <div class="feeds_tag_list">
                <div class="feeds_tag_item" v-for="(item,i) in feeds.tag" :key="i"  @click="clickTag(i)">
                    <div class="feeds_tag_name" :class="{feeds_tag_name_active:currentTag==i}">{{item.name}}</div>
                    <div class="feeds_tag_desc" :class="{feeds_tag_desc_active:currentTag==i}">{{item.desc}}</div>
                    <div class="feeds_tag_split"></div>
                </div>
            </div>
        </div>
        <div class="feeds_inner" v-for="(items,i) in feeds.inner" :key="i"
            :class="{feeds_inner_active:currentTag==i}">
            <div class="feeds_inner_item" v-for="(item,i) in items.list" :key="i" >
                <a class="feeds_inner_lk" v-on:mouseover="overinner($event)" v-on:mouseout="outinner($event)">
                    <div  class="feeds_inner_pic">
                        <img :src="item.pic">
                    </div>
                    <div class="feeds_inner_desc">
                        {{item.desc}}
                    </div>
                    <div class="feeds_inner_price">
                        <span class="feeds_inner_price_txt-decimal">￥</span>
                        <span class="feeds_inner_price_txt">{{item.priceTxt}}</span>.
                        <span class="feeds_inner_price_txt-decimal">{{item.priceTxtDecimal}}</span>
                    </div>
                </a>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name:"Feeds",
    data(){
        return{
            currentTag:0,
        }
    },
    methods:{
      overinner($event){
             $event.currentTarget.className="feeds_inner_lk";
      },
      outinner($event){
             $event.currentTarget.className="feeds_inner_lk";
            //  console.log($event.currentTarget)
      },
      clickTag(i){
          this.currentTag=i
      }
    },
    computed:{
        feeds(){
            return this.$store.state.feeds;
        },
    },
}
</script>

<style lang="less" scoped>
    #feedsroot{
        width: 1190px;
        margin: 0 auto;
        .feeds_title{
        width: 1190px;
        height: 45px;
        margin-bottom: 20px;
            .feeds_tit{
                position: relative;
                width: 150px;
                height: 45px;
                font-size: 28px;
                font-weight: 700;
                text-align: center;
                line-height: 45px;
                padding: 0 30px;
                overflow: hidden;
                color: #333;
                margin: 0 auto;
                .feeds_tit_i{
                    background-image: url(../../public/img/icon/channel_icon_01.png);
                    width: 25px;
                    height: 20px;
                    position: absolute;
                    top: 25%;
                }
                .feeds_tit_before{
                    background-position: 0 0;
                    left: 0;
                }
                .feeds_tit_after{
                    background-position: -25px 0;
                    right: 0;
                }
            }
        }
        .feeds_tag{
            width: 1990;
            height: 60px;
            margin-bottom: 10px;
            background: #fff;
            .feeds_tag_list{
                width: 1080px;
                height: 60px;
                margin: 0 55px 0;
                .feeds_tag_item{
                    width: 180px;
                    height: 60px;
                    display: inline-block;
                    position: relative;
                    text-align: center;
                    cursor: pointer;
                    &:hover{
                        .feeds_tag_name{
                            color: #e42b2b;
                        }
                        .feeds_tag_desc{
                            color: #e42b2b;
                        }
                        
                    }
                    .feeds_tag_name{
                        margin-top: 7px;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 27px;
                        height: 27px;
                        color: #333;

                    }
                    .feeds_tag_name_active{
                        background: #e1251b;
                        color: #fff;
                        width: 70px;
                        height: 27px;
                        display: inline-block;
                        border-radius: 50px;
                        padding: 0 5px;
                    }
                    .feeds_tag_desc{
                        color: #999;
                        font-size: 14px;
                    }
                    .feeds_tag_desc_active{
                        color: #e1251b;
                    }
                    .feeds_tag_split{
                        position: absolute;
                        right: 0;
                        top: 0;
                        height: 40px;
                        margin: 10px 0;
                        width: 1px;
                        background: #dfdfdf;
                        background: linear-gradient(180deg,white,#dfdfdf 51%,white);
                    }
                    &:last-child{
                        .feeds_tag_split{
                            display: none;
                        }
                    }
                }
            }
        }
        .feeds_inner{
            display: none;
            width: 1200px;
            margin-left: -5px;
            .feeds_inner_item{
                width: 230px;
                height: 322px;
                margin: 0 5px 10px;
                display: inline-block;
                background: #fff;
               .feeds_inner_lk{
                   .feeds_inner_pic{
                       width: 150px;
                       height: 150px;
                       margin: 30px 40px 40px;
                       img{
                           width: 100%;
                           height: 100%;
                       }
                   }
                   .feeds_inner_desc{
                        width: 190px;
                        height: 48px;
                        margin: 0 auto;
                        font-size: 14px;
                        line-height: 24px;
                        text-align: left;
                        color: #666;
                        transition: color .2s ease;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2; 
                        -webkit-box-orient: vertical; 
                        word-break: break-all;
                   }
                   .feeds_inner_price{
                        overflow: hidden;
                        width: 190px;
                        margin: 0 auto;
                        font-size: 16px;
                        line-height: 18px;
                        height: 18px;
                        color: #e1251b;
                        font-size: 20px;
                        font-weight: 700;
                        text-align: left;
                       .feeds_inner_price_txt{
                        //    float: left;
                       }
                       .feeds_inner_price_txt-decimal{
                        //    float: left;
                           font-size: 12px;
                       }
                   }
               } 
            }
        }
        .feeds_inner_active{
            display: block;
        }
    }
</style>
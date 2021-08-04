<template>
    <div id="channelroot">
        <div class="channel_title">
            <p class="channel_tit">
                <i class="channel_tit_before channel_tit_i"></i>
                频道广场
                <i class="channel_tit_after channel_tit_i"></i>
            </p>
        </div>
        <div class="channel_inner">
            <!-- <div class="inner_col1" v-for="(items,k) in Channel" :key="k+1"> -->
                <div class="inner_col1_item" v-for="(item,i) in Channel.col1" :key="'col1'+i">
                    <a class="inner_col1_lk">
                        <img :src="item.img">
                    </a>
                </div>
            <!-- </div> -->
            <!-- <div class="inner_col2" v-for="(items,k) in Channel" :key="k+2"> -->
                <div class="inner_col2_item" v-for="(item,i) in Channel.col2" :key="'col2'+i">
                    <a class="col2_item_lk">
                        <div class="col2_item_title">
                            <span class="col2_item_name">{{item.name}}</span>
                            <span class="col2_item_desc">{{item.desc}}</span>
                        </div>
                        <div class="col2_item_imgs">
                            <a class="col2_item_img" v-for="(item,i) in item.pics" :key="i">
                                <img :src="item.img">
                            </a>
                        </div>
                    </a>
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name:"Channel",
        props: {
            browserWidth:{
                type: Number,
                default: 1330,
            },
        },
        computed:{
            Channel(){
                return this.$store.state.Channel;
            },
        },
    
}
</script>

<style lang="less" scoped>
    #channelroot{
        width: 1190px;
        margin: 0 auto;
        .channel_title{
            width: 1190px;
            height: 45px;
            margin-bottom: 20px;
            .channel_tit{
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
                .channel_tit_i{
                    background-image: url(../../public/img/icon/channel_icon_01.png);
                    width: 25px;
                    height: 20px;
                    position: absolute;
                    top: 25%;
                }
                .channel_tit_before{
                    background-position: 0 0;
                    left: 0;
                }
                .channel_tit_after{
                    background-position: -25px 0;
                    right: 0;
                }
            }
        }
            .channel_inner{
                overflow: hidden;
                width: 1200px;
                    .inner_col1_item{
                        width: 290px;
                        height: 370px;
                        margin: 0 10px 10px 0;
                        float: left;
                        .inner_col1_lk{
                            float: left;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .inner_col2_item{
                        display:inline-block;
                        width: 290px;
                        height: 180px;
                        margin: 0 10px 10px 0;
                        background: #fff;
                        .col2_item_lk{
                            float: left;
                            .col2_item_title{
                                width: 250px;
                                height: 30px;
                                padding: 17px 0 13px;
                                margin: 0 10px 0 30px;
                                .col2_item_name{
                                    font-size: 22px;
                                    font-weight: 700;
                                    color: #333;
                                    line-height: 30px;

                                }
                                .col2_item_desc{
                                    font-size: 14px;
                                    color: #999;
                                    margin-left: 5px;
                                    line-height: 30px;
                                }
                            }
                            .col2_item_imgs{
                                width: 260px;
                                height: 100px;
                                padding-left: 30px;
                                .col2_item_img{
                                    width: 100px;
                                    height: 100px;
                                    margin-right: 30px;
                                    float: left;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                        }
                    }
                
            }
    }
</style>
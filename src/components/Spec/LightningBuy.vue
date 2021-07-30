<template>
    <div id="LightningBuyRoot">
        <div class="LightningBuy_head"></div>
        <div class="LightningBuy_inner">
            <a class="inner_col1">
                <div class="inner_col1_logo">
                    <img :src="LightningBuy.col1Logo">
                </div>
                <div class="inner_col1_name">
                    {{LightningBuy.col1Name}}
                </div>
                <div class="inner_col1_desc">
                    爆款直降，多买多送 | 仅剩
                    <span class="inner_col1_number">
                        {{LightningBuy.col1Number}}
                        </span>
                    天
                </div>
                <div class="inner_col1_pic">
                    <img :src="LightningBuy.col1Pic">
                </div>
            </a>
            <div class="inner_col2">
                <a class="inner_col2_item" 
                    v-for="(item,i) in LightningBuy.col2List" :key="i">
                    <div class="inner_col2_logo">
                        <img :src="item.col2Logo">
                    </div>
                    <div class="inner_col2_name">
                        {{item.col2Name}}
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"LightningBuy",
    computed:{
        LightningBuy(){
            return this.$store.state.LightningBuy;
        },
    },
}
</script>

<style lang="less" scoped>
    #LightningBuyRoot{
        width: 560px;
        height: 340px;
        padding: 0 15px;
        position: relative;
        .LightningBuy_head{
            width: 550px;
            height: 60px;
            padding: 0 5px;
        }
        .LightningBuy_inner{
            width: 560px;
            height: 270px;
            .inner_col1{
                width: 270px;
                height: 265px;
                margin-right: 15px;
                display: inline-block;
                background: linear-gradient(180deg,rgba(119,255,233,.05),rgba(0,93,70,.05));
                .inner_col1_logo{
                    position: relative;
                    width: 70px;
                    height: 35px;
                    display: block;
                    margin: 15px auto 0;
                    z-index: 1;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .inner_col1_name{
                    position: relative;
                    color: #333;
                    font-weight: 700;
                    font-size: 16px;
                    text-align: center;
                    z-index: 1;
                    margin-top: 6px;
                }
                .inner_col1_desc{
                    position: relative;
                    text-align: center;
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 13px;
                    margin-top: 1px;
                    z-index: 1;
                    .inner_col1_number{
                        font-weight: 700;
                    }
                }
                .inner_col1_pic{
                    width: 130px;
                    height: 130px;
                    display: block;
                    margin: 0 auto;
                    -webkit-transition: opacity .2s ease;
                    transition: opacity .2s ease;
                    position: relative;
                    &:hover{
                        opacity: 0.8;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

            }
            .inner_col2{
                width: 270px;
                height: 312px;
                margin-top: -40px;
                display: inline-block;
                vertical-align: top;
                .inner_col2_item{
                    display: inline-block;
                    width: 135px;
                    height: 100px;
                    padding: 14px 0;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    text-align: center;
                    .inner_col2_logo{
                        width: 100px;
                        height: 50px;
                        margin: 0 auto;
                        position: relative;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .inner_col2_name{
                        color: #666;
                        margin-top: 6px;
                        font-size: 12px;
                        text-align: center;
                        font-weight: 400;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    &::after{
                        position: absolute;
                        width: 1px;
                        height: 60px;
                        right: 0;
                        top: 50%;
                        margin-top: -30px;
                        background: -webkit-gradient(linear,left top,left bottom,from(white),color-stop(#eeeeee),color-stop(#eeeeee),to(white));
                        background: linear-gradient(180deg,white,#eeeeee,#eeeeee,white);
                        content: "";
                    }
                }
            }
        }
    }
</style>
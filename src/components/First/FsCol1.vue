<template>
    <div class="FsColRoot">
        <ul class="FsColList">
            <li v-for="(item,i) in list" :key="i" @mouseover="getCurrentIndex(i)" @mouseout="resCurrentIndex()">
                <span v-for="(val,name,i) in item.keyword" :key="i">
                    <a>{{ name }}</a>
                    <span v-if="i!=Object.keys(item.keyword).length-1">/</span>
                </span>
            </li>
        </ul>
        <div class="popbox" ref="popbox" :class="[{showbox1:IsPop},{sm_popbox:mainWidth==990}]"
            @mouseover="getCurrentIndex(fixedCurrentIndex)" @mouseout="resCurrentIndex()">
            <div class="catebox" v-for="(item,i) in list" :key="i" :class="{showbox:fixedCurrentIndex == i }">
                <div class="catebox_col1">
                    <div class="cate_channel">
                        <a v-for="(val,name,k) in item.boxdata.channel" :key="k">
                            {{name}}
                            <i></i>
                        </a>
                    </div>
                    <div class="cate_detail">
                        <dl v-for="(item,k) in item.boxdata.detail" :key="k">
                            <dt>
                                <a>{{item.detailtit}}</a>
                                <i></i>
                            </dt>
                            <dd>
                                <a v-for="(val,name,k) in item.detailcontent" :key="k">{{name}}</a>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="catebox_col2">
                    <div class="cate_brand">
                        <a v-for="(val,name,k) in item.boxdata.brand" :key="k">
                            <img :src="val">
                        </a>
                    </div>
                    <div class="cate_promotion">
                        <a v-for="(val,name,k) in item.boxdata.promotion" :key="k">
                            <img :src="val">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'FaCol1',
    props: {
        mainWidth: {
            type: Number,
            default: 1190,
        }
    },//通栏宽度
    computed:{
        list(){
            return this.$store.state.FsCol1list;
        },
        IsPop(){
            if(this.fixedCurrentIndex==99){
                return false
            }else{
                return true
            }
        }
    },
    data(){
        return{
            CurrentIndex:99,
            fixedCurrentIndex:99,
        }
    },
    methods:{
        getCurrentIndex(index){
            this.CurrentIndex=index
        },
        resCurrentIndex(){
            this.CurrentIndex=99
        },
        getbrowserwidth(){
            this.fixedCurrentIndex=Number(this.CurrentIndex);
        }
    },
    watch:{
        CurrentIndex(val) {
            if(!this.timer) {
            this.timer = true
            let _this = this
                setTimeout(function () {
                    _this.getbrowserwidth();
                    _this.timer = false
                }, 300)
            }
        },
    }
}
</script>

<style lang="less" scoped>
.FsColRoot{
    position: relative;
    .FsColList{
        padding: 10px 0;
        height: 450px;
        background: #fefefe;
        color: #636363;
        margin-top: 10px;
        li{
            height: 25px;
            line-height: 25px;
            padding-left: 18px;
            transition: background-color .2s ease;
            &:hover{
                background-color: #d9d9d9;
            }
            a{
                font-size: 14px;
                color: #333;
                transition: color .2s ease;
                &:hover{
                    color: #c81623;
                }
            }
        }
    }
    .popbox{
        position: absolute;
        top: 0;
        left: 190px;
        width: 998px;
        min-height: 468px;
        border: 1px solid #f7f7f7;
        background-color: #fff;
        box-shadow: 2px 0 5px rgba(0,0,0,.3);
        z-index: 5;
        display: none;
        .catebox{
            padding: 20px 0 10px;
            display: none;
            .catebox_col1{
                float: left;
                width: 800px;
                .cate_channel{
                    height: 24px;
                    padding-left: 20px;
                    a{
                        *cursor: pointer;
                        float: left;
                        margin-right: 10px;
                        padding: 0 10px;
                        height: 24px;
                        background-color: #333;
                        line-height: 24px;
                        color: #fff;
                    }
                }
                .cate_detail{
                    padding: 10px 0 0 20px;
                    dl{
                        position: relative;
                        padding-left: 80px;
                        height: 32px;
                        dt{
                            overflow: hidden;
                            position: absolute;
                            left: 0;
                            top: 6px;
                            width: 70px;
                            text-align: right;
                            font-weight: 700;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            a{
                                color: #333;
                                font-weight: 700;
                            }
                        }
                        dd{
                            padding: 5px 0;
                            a{
                                float: left;
                                margin: 3px 0;
                                padding: 0 7px;
                                height: 16px;
                                line-height: 16px;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
            .catebox_col2{
                float: left;
                width: 198px;
                .cate_brand{
                    width: 168px;
                    margin: 0 auto;
                    a{
                        display: inline-block;
                        margin: 0 0 1px 1px;
                        img{
                            width: 83px;
                            height: 35px;
                            border: 0;
                            vertical-align: middle;
                        }
                    }
                }
                .cate_promotion{
                    width: 168px;
                    margin: 10px auto 0;
                    a{
                        display: block;
                        margin-bottom: 1px;
                        height: 134px;
                        background-color: #e7e7e7; 
                        img{
                            border: 0;
                            vertical-align: middle;
                            height: 134px;
                            width: 168px;
                        }
                    }
                }
            }
        }
        .showbox{
            display: block;
        }
    }
    .sm_popbox{
        width: 798px;
        .catebox{
            .catebox_col1{
                width: 600px;
            }
        }
    }
    .showbox1{
        display: block;
    }
}
</style>
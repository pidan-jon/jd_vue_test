<template>
  <div class="NavlistRoot">
    <!-- 标签 -->
    <p ref="Navlisttag" class="Navlisttag" :navtagName="this.navtagName" 
        @mouseover="boxShow" @mouseleave="boxnotShow"
        :class="[{taghover:this.IsPullList&&this.IsMouseOver},
        {redalink:this.IsRedTag},{smallpaggin:!this.IsPullList},
        ]">
            {{this.navtagName}}
        </p>
    <i :class="{iconfont:this.IsPullList,
        'icon-sanjiaoxing':this.IsPullList}">
    </i>
   <!-- 内容盒子 -->
    <div class="Navlistbox" ref="Navlistbox" @mouseover="boxShow" @mouseleave="boxnotShow"
        :class="{
            bigscreen:this.mainWidth==1190&&this.IsSMbox==true,smallscreen:this.mainWidth==990&&this.IsSMbox==true,
            customer:this.IsCSbox==true,
            enterprise:this.IsEPbox==true,
            myjingdong:this.IsMJbox==true,
            }">
        <!-- 子盒子 -->
        <div class="itembox" ref="itembox" >
            <div v-for="(item,i) in NavlistData" :key="i" class="itemchlid">
                <p class="item-tit">{{item.title}}</p>
                    <a v-for="(val,name,k) in NavlistData[i].menuitem" :key="k" :href="val">
                    {{name}}
                    </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Navlist",
        props: {
            mainWidth: {
                type: Number,
                default: 1190,
            },//通栏宽度
            navtagName: {
                type: String,
                default: "",
            },//标签名字
            NavlistData:{
                type: Array,
                default: "",
            },//组件获取数据
            TagClass:{
                type: String,
                default: "",
            }//组件标签
        },
        computed: {
        },
        methods:{
            boxShow(){
                var actBox=this.$refs.Navlistbox;
                actBox.style.display = "block";
                this.IsMouseOver=true;
            },//鼠标移入显示
            boxnotShow(){
                var actbox=this.$refs.Navlistbox;
                actbox.style.display = "none";
                this.IsMouseOver=false;     
            },//鼠标移出隐藏
        },
        watch: {
        },
        data(){
            return{
                IsCSbox:false,//客户服务盒子
                IsSMbox:false,//网站导航
                IsEPbox:false,//企业采购
                IsMJbox:false,//我的京东
                IsMouseOver:false,//鼠标移入标志
                IsPullList:false, //下拉菜单标记
                IsRedTag:false, //红色标签标记
            }
        },
        created(){
        },
        mounted(){
            //判断内容盒子样式
            switch(this.navtagName){
                case "客户服务" :
                    this.IsCSbox=true;
                    break;
                case "网站导航" :
                    this.IsSMbox=true;
                break;
                case "企业采购" :
                    this.IsEPbox=true;
                break;
                case "我的京东" :
                    this.IsMJbox=true;
                break;
            }
            this.IsPullList = this.TagClass.search(/PullList/i) != -1;
            this.IsRedTag =this.TagClass.search(/Red/i) != -1;
        }
}
</script>

<style lang="less" scoped>
    //根样式
    .NavlistRoot{
        position: relative;
        //标签样式
        .Navlisttag{
            overflow: hidden;
            position: relative;
            line-height: 28px;
            border: 1px solid #e3e4e5;
            z-index: 10;
            padding: 0 20px 0 7px;
        }
        //无下拉符号样式
        .smallpaggin{
            padding: 0 7px 0 7px
        }
        //标签被选中
        .taghover{
        padding-bottom: 2px ;
        border-color: #ccc ;
        background: #fff ;
        border-bottom: none ;
        }
        //下拉符号
        i{
            position: absolute;
            top: 0;
            right: 6px;
            z-index: 10;
        }
        //内容盒子样式
        .Navlistbox{
            display: none;
            position: absolute;
            background: #fff;
            border: 1px solid #ccc;
            top: 30px;
            z-index: 5;
            box-shadow: 1px 2px 1px rgba(0,0,0,.1);
            .itembox{
                .itemchlid{
                    .item-tit{
                        text-align: left;
                        font-weight: bold;
                        color: #666;
                    }
                    a{
                        float: left;
                        text-align: left;
                        text-decoration: none;
                        color: #999;
                        &:hover{
                            color: red;
                        }
                    }
                }

            }
        }
        //网站导航宽屏样式
        .bigscreen{
            right: -75px;
            padding: 10px 0;
            .itembox{
                display: flex;
                justify-content:center;
                .itemchlid{
                    border-left: 1px solid #ccc;
                    padding-left: 20px;
                    width: 255px;
                    &:first-child{
                        width: 340px;
                        border-left: none;
                    }
                    a{
                        width: 85px;
                        height: 24px;
                    }
                } 
            }   
        }
        //网站导航小屏样式
        .smallscreen{
            right: -75px;
            .itembox{
                display: flex;
                justify-content:center;
                .itemchlid{
                    border-left: 1px solid #ccc;
                    padding-left: 20px;
                    width: 200px;
                    &:first-child{
                        width: 300px;
                        border-left: none;
                    }
                    a{
                        width: 100px;
                        height: 24px;
                    }
                }  
            }
        }
        //客户服务样式
        .customer{
            width: 170px;
            padding:5px 0;
            right: 0;
            .itembox{
                .itemchlid{
                    border-bottom: 1px solid #eee;
                    line-height: 24px;
                    overflow: hidden;
                    &:last-child{
                        border-bottom: none;
                    }
                    p{
                        padding: 5px 0 0 15px;
                        line-height: 24px;
                        width: 155px;
                    }
                    a{
                        padding: 5px 0 5px 15px;
                        width: 70px;
                    }
                    
                }
            }
        }
        //企业采购样式
        .enterprise{
            width: 140px;
            padding:10px 0 10px 15px;
            left: 0;
            .itembox{
                .itemchlid{
                    border-bottom: 1px solid #eee;
                    overflow: hidden;
                    &:last-child{
                        border-bottom: none;
                    }
                    a{
                        width: 56px;
                        line-height: 30px;
                        white-space: nowrap
                    }
                    
                }
            }
        }
        //我的京东样式
        .myjingdong{
            width: 265px;
            padding: 0 0 0 15px;
            left: 0;
            .itembox{
                .itemchlid{
                    padding:10px 0;
                    border-bottom: 1px solid #eee;
                    overflow: hidden;
                    &:last-child{
                        border-bottom: none;
                    }
                    a{
                        width: 126px;
                        line-height: 30px;
                        white-space: nowrap
                    }
                    
                }
            }
        }
    }   
</style>
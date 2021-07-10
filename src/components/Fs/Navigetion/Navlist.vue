<template>
  <div class="NavlistRoot">
    <p ref="Navlisttag" class="Navlisttag" :navtagName="this.navtagName" 
        @mouseover="boxShow" @mouseleave="boxnotShow"
        :class="{taghover:this.IsMouseOver}"
        >{{this.navtagName}}
        </p>
    <i class="iconfont icon-sanjiaoxing"></i>
    <div class="Navlistbox" ref="Navlistbox" 
        @mouseover="boxShow" @mouseleave="boxnotShow"
        :class="{
            bigscreen:this.mainWidth==1190&&this.IsSMbox==true,smallscreen:this.mainWidth==990&&this.IsSMbox==true,
            customer:this.IsCSbox==true,
            enterprise:this.IsEPbox==true
            }">
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
            },
            navtagName: {
                type: String,
                default: "",
            },
            NavlistData:{
                type: Array,
                default: "",
            }
        },
        computed: {
        },
        methods:{
            boxShow(){
                var actBox=this.$refs.Navlistbox;
                actBox.style.display = "block";
                this.IsMouseOver=true;
            },
            boxnotShow(){
                var actbox=this.$refs.Navlistbox;
                actbox.style.display = "none";
                this.IsMouseOver=false;     
            },
        },
        watch: {
        },
        data(){
            return{
                IsCSbox:false,
                IsSMbox:false,
                IsEPbox:false,
                IsMouseOver:false, 
            }
        },
        created(){
        },
        mounted(){
            if(this.navtagName=="客户服务"){
                this.IsCSbox=true;
            }
            if(this.navtagName=="网站导航"){
                this.IsSMbox=true;    
            }
            if(this.navtagName=="企业采购"){
                this.IsEPbox=true;    
            }
        }

        
}
</script>

<style lang="less" scoped>

    .NavlistRoot{
        position: relative;
        .Navlisttag{
            overflow: hidden;
            position: relative;
            line-height: 28px;
            border: 1px solid #e3e4e5;
            z-index: 2;
            padding: 0 20px 0 7px;
        }
        .taghover{
        padding-bottom: 2px ;
        border-color: #ccc ;
        background: #fff ;
        border-bottom: none ;
        }
        i{
            position: absolute;
            top: 0;
            right: 6px;
            z-index: 3;
        }
        .Navlistbox{
            display: none;
            position: absolute;
            background: #fff;
            border: 1px solid #ccc;
            // padding: 10px 0;
            top: 30px;
            z-index: 1;
            .itembox{
                .itemchlid{
                    .item-tit{
                        text-align: left;
                        font-weight: bold;
                        color: #666;
                    }
                    a{
                        // height: 24px;
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
                    }
                }  
            }
        }
        .customer{
            width: 170px;
            padding:10px 0;
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
                        padding: 0 0 0 15px;
                        line-height: 24px;
                        width: 155px;
                    }
                    a{
                        padding: 0 0 0 15px;
                        width: 70px;
                    }
                    
                }
            }
        }
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
    }   
</style>
<template>
  <div class="SiteMapRoot">
    <p ref="SiteMapJDboxtag" class="SiteMapJDboxtag" @mouseover="boxShow" @mouseleave="boxnotShow">网站导航</p>
    <div class="SiteMapJDbox" ref="SiteMapJDbox" :style="styleVar" @mouseover="boxShow" @mouseleave="boxnotShow">
        <div class="itembox" :class="{bigscreen:this.mainWidth==1190,smallscreen:this.mainWidth==990}">
            <div v-for="(item,i) in siteMapdata" :key="i" class="itemchlid">
                <p class="item-tit">{{item.title}}</p>
                    <a v-for="(val,name,k) in siteMapdata[i].menuitem" :key="k"
                    :href="val">
                    {{name}}
                    </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"SiteMap",
        props: {
            mainWidth: {
                type: Number,
                default: 1190,
            },
        },
        computed: {
            styleVar() {
                return {
                    '--siteWidth': this.mainWidth+'px'
                }
            }
        },
        methods:{
            boxShow(){
                var actbox=this.$refs.SiteMapJDbox;
                actbox.style.display = "block";
            },
            boxnotShow(){
                var actbox=this.$refs.SiteMapJDbox;
                actbox.style.display = "none";     
            },
        },
        watch: {
        },
        data(){
            return{
                siteMapdata:[
                    {
                        title:"京东生活1",
                        menuitem:{
                            "新品首发1":"#",
                            "新品首发2":"#",
                            "新品首发4":"#",
                            "新品首发5":"#",
                            "新品首发6":"#",
                            "新品首发7":"#",
                            "新品首发8":"#",
                            "新品首发9":"#",
                            "新品首发11":"#",
                            "新品首发12":"#",
                            "新品首发13":"#",
                            "新品首发14":"#"
                        }                    
                    },
                                        {
                        title:"京东生活2",
                        menuitem:{
                            "新品首发1":"#",
                            "新品首发2":"#",
                            "新品首发4":"#",
                            "新品首发5":"#",
                            "新品首发6":"#",
                            "新品首发7":"#",
                            "新品首发8":"#",
                            "新品首发9":"#",
                            "新品首发11":"#",
                            "新品首发12":"#",
                            "新品首发13":"#",
                            "新品首发14":"#"
                        }                    
                    },
                                        {
                        title:"京东生活3",
                        menuitem:{
                            "新品首发1":"#",
                            "新品首发2":"#",
                            "新品首发4":"#",
                            "新品首发5":"#",
                            "新品首发6":"#",
                            "新品首发7":"#",
                            "新品首发8":"#",
                            "新品首发9":"#",
                            "新品首发11":"#",
                            "新品首发12":"#",
                            "新品首发13":"#",
                            "新品首发14":"#"
                        }                    
                    },
                                        {
                        title:"京东生活4",
                        menuitem:{
                            "新品首发1":"#",
                            "新品首发2":"#",
                            "新品首发4":"#",
                            "新品首发5":"#",
                            "新品首发6":"#",
                            "新品首发7":"#",
                            "新品首发8":"#",
                            "新品首发9":"#",
                            "新品首发11":"#",
                            "新品首发12":"#",
                            "新品首发13":"#",
                            "新品首发14":"#"
                        }                    
                    }
                ]  
            }
        }
}
</script>

<style lang="less" scoped>
  :root {
    --siteWidth: 1190px;
  }
    .SiteMapRoot{
        position: relative;
        .SiteMapJDboxtag{
            overflow: hidden;
            position: relative;
            line-height: 28px;
            border: 1px solid #e3e4e5;
            z-index: 1;
            padding: 0 20px 0 7px;
            &:hover{
                padding-bottom: 2px;
                border-color: #ccc;
                background: #fff;
                border-bottom: none;
            }
        }
        .SiteMapJDbox{
            display: none;
            position: absolute;
            width: var(--siteWidth,1190px);
            min-width: 990px;
            right: -75px;
            background: #fff;
            border: 1px solid #ccc;
            padding: 10px 0;
            top: 30px;
            .itembox{
                display: flex;
                justify-content:center;
                .itemchlid{
                    border-left: 1px solid #ccc;
                    padding-left: 20px;
                    .item-tit{
                        text-align: left;
                        font-weight: bold;
                        color: #666;
                    }
                    &:first-child{
                        border-left: none;
                    }
                    a{
                        height: 24px;
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
            .bigscreen{   
                .itemchlid{
                    width: 255px;
                    &:first-child{
                        width: 340px;
                    }
                    a{
                        width: 85px;
                    }
                }           
            }
            .smallscreen{
                .itemchlid{
                    width: 200px;
                    &:first-child{
                        width: 300px;
                    }
                    a{
                        width: 100px;
                    }
                }   
            }
        }
    }

</style>
<template>
  <div class="CityListRoot">
            <a ref="CityListTag" class="CityListtag" @mouseover="boxShow" @mouseleave="boxnotShow">
                <i class="icon">
                    <img src="img/icon/location.png">
                </i>
                <span>广西</span>
            </a>
            <div ref="CityListBox" class="CityListBox" @mouseover="boxShow" @mouseleave="boxnotShow">
                <div class="CityListItem" v-for="(item,i) in sitelist" :key="i">
                    <p>{{item.tit}}</p>
                    <a v-for="(val,name,k) in item.list" :key="k">
                        {{name}}
                    </a>
                </div> 
            </div>
  </div>
</template>

<script>
export default {
    name:"CityList",
    data(){
        return{
            k:"b",
            sitelist:[{
                tit:"",
                list:{
                    广东:"#",
                    廣1:"#",
                    廣2:"#",
                    廣3:"#",
                    廣4:"#",
                    廣5:"#",
                    廣6:"#"
                }
            },{
                tit:"地区专享",
                list:{
                    中国香港:"#",
                    中国台湾:"#"
                }
            },{
                tit:"Avail Sites",
                list:{
                    Global:""
                }
            }]
        }
    },
    methods:{
        boxShow(){
            var actbox=this.$refs.CityListBox;
            actbox.style.display = "block";
        },
        boxnotShow(){
            var actbox=this.$refs.CityListBox;
            actbox.style.display = "none";     
        },
    }
}
</script>

<style lang="less" scoped>
.CityListRoot{
    position: relative;
    .CityListtag{
        position: relative;
        height: 28px;
        padding: 0 7px 1px;
        border: 1px solid #e3e4e5;
        line-height: 28px;
        z-index: 2;
        float: left;
            &:hover{
            padding-bottom: 2px;
            cursor:pointer;
            background: #fff;
            border-color: #ccc;
            border-bottom: none;
        }
        .icon{
            float: left;
            img{
                margin-top: 5px;
                height: 20px;
                width: 20px;
            }
        }
        span{
            margin-left: 3px;
        }
    }
    .CityListBox{
        display: none;
        width: 300px;
        padding: 10px;
        border: 1px solid #ccc;
        position:absolute;
        top: 30px;
        background: #fff;
        z-index: 1;
        .CityListItem{
            float: left;
            padding: 2px 0;
            &:first-child{
                a{
                    width: 60px;
                    float: left;
                    padding: 2px 0;
                }
            }
            &:nth-child(2){
                text-align: left;
                margin: 10px 0 10px 10px;
                p{
                    margin: 9px 0;
                    color: #8f8f8f;
                }
                a{
                    width: 145px;
                    float: left;
                    height: 26px;
                    line-height: 26px;
                }
            }
            &:last-child{
                text-align: left;
                margin: 10px 0 10px 10px;
                p{
                    margin: 9px 0;
                    color: #8f8f8f;
                    
                }
                a{
                    width: 145px;
                    float: left;
                    height: 26px;
                    line-height: 26px;
                }
            }
            
        }
    }
}
</style>
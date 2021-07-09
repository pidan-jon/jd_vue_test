<template>
  <div class="CityListRoot">
            <a ref="CityListTag" class="CityListtag" @mouseover="boxShow" @mouseleave="boxnotShow"
                :class="{taghover:this.IsMouseOver}">
                <i class="icon">
                    <img src="img/icon/location.png">
                </i>
                <span>广西</span>
            </a>
            <div ref="CityListBox" class="CityListBox" @mouseover="boxShow" @mouseleave="boxnotShow">
                <div class="CityListItem" v-for="(item,i) in gatsitelist" :key="i">
                    <p>{{item.tit}}</p>
                    <a v-for="(val,name,k) in item.list" :key="k" :href="val"
                        :data-site='name' @click="getCurrentSite($event)">
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
            IsMouseOver:false,
            CurrentSite:"",
        }
    },
    computed:{
        gatsitelist: { 
            get() {
                return this.$store.state.sitelist
            },
            set(newValue) {
                 this.$store.state.sitelist = newValue
            }
        },
    },
    methods:{
        boxShow(){
            var actbox=this.$refs.CityListBox;
            actbox.style.display = "block";
            this.IsMouseOver=true;
        },
        boxnotShow(){
            var actbox=this.$refs.CityListBox;
            actbox.style.display = "none";   
            this.IsMouseOver=false;   
        },
        getCurrentSite(e){
            // this.CurrentSite = event;
            console.log(e.path[0].dataset.site);
        }
    }
}
</script>

<style lang="less" scoped>
.CityListRoot{
    a{
        text-decoration: none;
        color: #999;
    }
    position: relative;
    .CityListtag{
        position: relative;
        height: 28px;
        padding: 0 7px 1px;
        border: 1px solid #e3e4e5;
        line-height: 28px;
        z-index: 5;
        float: left;
        &:hover{
            color: red;
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
    .taghover{
        padding-bottom: 2px ;
        border-color: #ccc ;
        background: #fff ;
        border-bottom: none ;
        cursor:pointer;
    }
    .CityListBox{
        display: none;
        width: 300px;
        padding: 5px 0;
        border: 1px solid #ccc;
        position:absolute;
        top: 30px;
        background: #fff;
        z-index: 3;
        .CityListItem{
            float: left;
            padding: 2px 0;
            border-bottom: 1px solid #ccc;
            a:hover{
                color: red;
            }
            &:first-child{
                margin:0 5px;
                a{
                    width: 40px;
                    float: left;
                    margin: 2px 8px;
                    line-height: 24px;
                    &:hover{
                        background: #f4f4f4;
                    }
                }
            }
            &:nth-child(2){
                text-align: left;
                padding: 0 40px 0 10px;
                margin: 0 5px 0 5px;
                p{
                    margin: 5px 0;
                    color: #8f8f8f;
                }
                a{
                    width: 120px;
                    float: left;
                    height: 26px;
                    line-height: 26px;
                    padding: 0 0 10px 0;
                }
            }
            &:last-child{
                text-align: left;
                margin: 0px 0 0px 15px;
                border-bottom: none;
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
<template>
  <div class="PhoneJDChildRoot">
    <p @mouseover="boxShow" @mouseleave="boxnotShow">手机京东</p>
    <div class="box" @mouseover="boxShow" @mouseleave="boxnotShow" ref="PhoneJDbox">  
        <div v-for="item in DataItem" :key="item.name" class="chlidBox" >
            <div class="chlidboxitem">
                <img :src="item.QRcode" class="QRcode">
                <div class="chlidboxintro">
                    <p>{{item.name}}</p>
                    <p class="fontred">{{item.recommend}}</p>
                    <div :class="[item.smallIconLength==1?ios:android]"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'PhoneJDChild',
    methods:{
        boxShow(){
            var actbox=this.$refs.PhoneJDbox;
            actbox.style.display = "block";
        },
        boxnotShow(){
            var actbox=this.$refs.PhoneJDbox;
            actbox.style.display = "none";     
        },
    },
    data(){
        return{
            ios:"ios",
            android:"android",
            DataItem:[{
                name:"手机京东",
                recommend:"新人推荐",
                QRcode:"/img/QRcode/cat.png",
                smallIcon:["ios","android"],
                smallIconLength:2,
            },
            {
                name:"关注京东",
                recommend:"抢5元红包",
                QRcode:"/img/QRcode/cat.png",
                smallIcon:["ios"],
                smallIconLength:1,
            },
            {
                name:"京东金融客户端",
                recommend:"新人专享大礼包",
                QRcode:"/img/QRcode/cat.png",
            }],
            
        }
    }
}
</script>

<style lang="less" scoped>
    .PhoneJDChildRoot{
        position: relative;
        .box{
            display: none;
            background: white;
            border: 1px solid #e7e7e7;
            z-index: 1;
            position: absolute;
            right: 0;
            .chlidBox{
                width: 200px;
                height: 60px;
                border-bottom: 1px solid #e7e7e7;
                padding: 5px;
                position: relative;
                &:last-child{
                    border-bottom: none;
                }
                .chlidboxitem{ 
                    .QRcode{
                    position: absolute;
                    left: 5px;
                    width: 50px;
                    height: 50px;
                    border: 1px solid #e7e7e7;
                    }
                    .chlidboxintro{
                        margin: 0 10px 0 70px;
                        .smallIcon{
                        left: 0;
                        width: 10px;
                        height: 10px;
                        }
                        p{
                            font-size: 12px;
                            line-height: 20px;
                            text-align: left;
                        }
                        div{
                            height: 24px;
                            width: 20px;
                        }
                        .ios{
                            background-image: url(/img/icon/JD_device.png);
                            background-position: 0 0;
                        }
                        .android{
                            background-image: url(/img/icon/JD_device.png);
                            background-position: 0 -26px;
                        }
                        .fontred{
                            color:red;
                        }
                    }
                }
            }
        }
    }

</style>
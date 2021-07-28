<template>
<!-- 手机京东组件 -->
  <div class="PhoneJDRoot">
    <p class="PhoneJDRootTag" @mouseover="boxShow" @mouseleave="boxnotShow">手机京东</p>
    <!-- 弹出盒 -->
    <div class="box" @mouseover="boxShow" @mouseleave="boxnotShow" ref="PhoneJDbox">  
        <div v-for="(item,i) in DataItem" :key="item.name" class="chlidBox" >
            <div class="chlidboxitem">
                <img :src="item.QRcode" class="QRcode">
                <div class="chlidboxintro">
                    <p>{{item.name}}</p>
                    <p>{{item.secondName}}</p>
                    <p class="fontred">{{item.recommend}}</p>
                    <div class="iconbox">
                        <a v-for="(iconitem,k) in DataItem[i].smallIcon" :key="k" 
                        :class="{ios:iconitem=='ios',
                        android:iconitem=='android',
                        ipad:iconitem=='ipad'
                        }"
                        ></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'PhoneJD',
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
            DataItem:[{
                name:"手机京东",
                recommend:"新人推荐",
                QRcode:"img/QRcode/cat.png",
                smallIcon:["ios","android","ipad"],
            },
            {
                name:"关注京东",
                secondName:"JD.COM",
                recommend:"抢5元红包",
                QRcode:"img/QRcode/cat.png",
            },
            {
                name:"京东金融客户端",
                recommend:"新人专享大礼包",
                QRcode:"img/QRcode/cat.png",
                smallIcon:["ios","android","ipad"],
            },
            {
                name:"京东健康客户端",
                QRcode:"img/QRcode/cat.png",
                smallIcon:["ios","android"],
            },
            {
                name:"关注京东小程序",
                recommend:"新人0.1元购",
                QRcode:"img/QRcode/cat.png",
            }
            ],
            
        }
    }
}
</script>

<style lang="less" scoped>
    .PhoneJDRoot{
        position: relative;
        .PhoneJDRootTag{
            padding: 0 20px 0 7px;
        }
        .box{
            display: none;
            background: white;
            border: 1px solid #e7e7e7;
            z-index: 1;
            position: absolute;
            right: 0;
            .chlidBox{
                width: 170px;
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
                            color: #666;
                            font-weight: bold;
                        }
                        .fontred{
                            color:red;
                            font-weight: normal;
                        }
                        .iconbox{
                            height: 24px;
                            overflow: hidden;
                        a{
                            float: left;
                            height: 24px;
                            width: 24px;
                        }
                        .ios{
                            background-image: url(../../../public/img/icon/JD_device.png);
                            background-position: 0 0;
                        }
                        .android{
                            background-image: url(../../../public/img/icon/JD_device.png);
                            background-position: 0 -26px;
                        }
                        .ipad{
                            background-image: url(../../../public/img/icon/JD_device.png);
                            background-position: 0 -52px;
                        }
                        }
                    }
                }
            }
            &:before{
                border:5px solid transparent;
                position: absolute;
                width: 0;
                height: 0;
                border-color: transparent transparent #fff;
                top: -9px;
                content: " ";
                left: 135px;
            }
        }
    }
</style>
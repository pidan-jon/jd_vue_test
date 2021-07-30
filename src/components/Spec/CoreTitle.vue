<template>
    <div class="coretitleroot">
        <a class="coretitle_lk">
            <p class="coretitle_tit">{{this.title}}</p>
            <i class="coretitle_arrow"></i>
        </a>
    </div>
</template>

<script>
export default {
    name:"CoreTitle",
    props:{
        title:{
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="less" scoped>
    .coretitleroot{
        position: absolute;
        top: 0;
        left: 15px;
        z-index: 1;
        .coretitle_lk{
            display: inline-block;
            position: relative;
            height: 32px;
            margin: 12px 0 0;
            .coretitle_tit{
                float: left;
                font-weight: 700;
                font-size: 24px;
                color: #333;
                line-height: 32px;
            }
            .coretitle_arrow{
                background: url(../../../public/img/sprite/coreTitle.png);
                background-position: -16px 0;
                width: 16px;
                height: 16px;
                position: relative;
                float: left;
                top: 9px;
                left: 10px;
                &::after{
                    background: url(../../../public/img/sprite/coreTitle.png);
                    background-position: 0 0;
                    width: 16px;
                    height: 16px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    visibility: hidden;
                    opacity: 0;
                    -webkit-transition: all .2s ease;
                    transition: all .2s ease;
                    content: "";
                }
                &:hover:after{
                    opacity: 1;
                    visibility:visible;
                }
            }
        }

    }
</style>
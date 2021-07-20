<template>
  <div id="JuserRoot">
      <div class="user_inner">
          <div class="user_avatar">
              <a>

              </a>
          </div>
          <div class="user_show">
              <a class="user_tip">Hi~欢迎光临京东</a>
              <p>
                  <a class="user_login">登录</a>
                  |
                  <a class="user_reg">注册</a>
              </p>
          </div>
      </div>
      <div class="user_profit">
          <a>新人福利</a>
          <a class="user_profit_plus">PLUS会员</a>
      </div>
  </div>
</template>

<script>
export default {
    name:"Juser",



}
</script>

<style lang="less" scoped>
    #JuserRoot{
        height: 102px;
        background: #fff;
        overflow: hidden;
        .user_inner{
            position: relative;
            padding-top: 42px;
            height: 20px;
            .user_avatar{
                position: absolute;
                left: 20px;
                top: 13px;
                width: 44px;
                height: 44px;
                a{
                    display: block;
                    width: 40px;
                    height: 40px;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    overflow: hidden;
                    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.05);
                    box-shadow: 0 2px 8px rgba(0,0,0,.05);
                    background-image: url(/img/First/Juser.png);
                    background-size:contain;
                    background-repeat:no-repeat;
                }
            }
            .user_show{
                position: absolute;
                top: 16px;
                left: 74px;
                p{
                    height: 20px;
                    line-height: 20px;
                    width: 100%;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
        .user_profit{
            height: 25px;
            font-size: 0;
            text-align: center;
            a{
                display: inline-block;
                margin: 0 5px;
                width: 70px;
                height: 25px;
                line-height: 25px;
                font-size: 12px;
                text-align: center;
                color: #fff;
                border-radius: 13px;
                background: #e1251b;
                -webkit-transition: background .3s ease,color .3s ease;
                transition: background .3s ease,color .3s ease;
            }
            .user_profit_plus{
                background: #363634;
                color: #e5d790;
            }
        }
    }
</style>
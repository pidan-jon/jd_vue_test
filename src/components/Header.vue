<template>
  <div class="header">
      <div class="main">
          <a class="l"><img img src="../../public/img/header/left.gif"></a>
          <a class="r"><img img src="../../public/img/header/right.gif"></a>
          <div class="mid">
              <div class="serachbox">

                    <div class="serach">
                        <input placeholder="输入" class="input">
                        <img class="camera" src="../../public/img/icon/camera.png">
                        <button>
                            <img class="search" src="../../public/img/icon/search.png">
                        </button>
                    </div>

                    <div class="cart">
                        <img class="cat" src="../../public/img/icon/cat.png">
                        <a href="#">我的购物车</a>
                        <i></i>
                        
                    </div>

                </div>

                <div class="hot">
                    <TopSearch message='hotword'></TopSearch>
                </div>  
          </div>
      </div>
  </div>
</template>

<script>
import TopSearch from '@/components/TopSearch.vue'
export default {
  name: 'Header',
  props: {

  },
  components: {
    TopSearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
    height: 140px;
    .main{
        height: 100%;
        width: 80%;
        margin: 0 auto;
        .l{
            float: left;
            margin: auto 10px;
            img{
                width: 190px;
                height: 120px;
            }
        }
        .r{
            margin: 10px auto ;
            float: right;
        }
        .mid{
            height: 100%;
            width: 760px;
            margin: 0 auto;
            padding-top:25px;
            .serachbox{
                overflow: hidden;
                .serach{
                    width: 546px;
                    height: 32px;
                    border: solid 2px #e1251b;
                    float: left;
                    .input{     
                        display: block;
                        height: 28px;
                        width: 425px;
                        border: none;
                        float: left;
                        padding: 2px 22px  2px 6px;
                        outline:medium
                    }
                    .camera{
                        width: 32px;
                        height: 32px;
                        float: left;
                    }
                    button{
                        float: right;
                        width: 60px;
                        height: 32px;
                        background-color: #e1251b;
                        border: solid #e1251b;
                        .search{
                            width: 20px;
                        }
                    }
                }
                .cart{
                width: 130px;
                height: 34px;
                border: solid 1px #e1251b;   
                float: right;
                .cat{
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                }
                a{
                    line-height: 34px;
                    text-align: center;
                    text-decoration: none;
                    color: #e1251b;
                }             
                }
            }
            .hot{
                margin-top: 6px;
            }

        }
    }
}
</style>
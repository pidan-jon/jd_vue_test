<template>
<!-- 新闻组件 -->
  <div id="newsroot">
      <div class="news_hd">
          <span class="news_tit">京东快报</span>
          <a class="news_more">
              更多
              <i></i>
          </a>
      </div>
      <ul class="news_list">
          <li class="news_item" v-for="(item,i) in newsList" :key="i">
              <a class="news_link">
                  <span class="news_tag">{{item.newsTag}}</span>
                  {{item.newsContent}}
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Jnews",
    computed:{
        newsList(){
            return this.$store.state.newsList;
        }//获取数据
    }
}
</script>

<style lang="less" scoped>
    #newsroot{
        height: 130px;
        background: #fff;
        .news_hd{
            height: 20px;
            padding: 10px 0 0;
            position: relative;
            line-height: 20px;
            margin-bottom: 8px;
            .news_tit{
                display: inline-block;
                font-size: 14px;
                margin-left: 15px;
                color: #333;
            }
            .news_more{
                position: absolute;
                right: 15px;
                top: 10px;
                font-size: 12px;
                color: #999;
            }
        }//组件标题
        .news_list{
            position: relative;
            margin: 0 15px;
            height: 88px;
            .news_item{
                max-width: 160px;
                width: 160px;
                height: 16px;
                line-height: 16px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: #999;
                margin-bottom: 6px;
                .news_link{
                    &:hover{
                        color: #c81623;
                    }
                    .news_tag{
                    display: inline-block;
                    position: relative;
                    font-size: 12px;
                    height: 16px;
                    width: 35px;
                    line-height: 16px;
                    text-align: center;
                    vertical-align: 0;
                    color: #e1251b;
                    background-color: rgba(225,37,27,.08);
                    margin-right: 6px;
                    }

                }
            }
        }//组件列表

    }
</style>
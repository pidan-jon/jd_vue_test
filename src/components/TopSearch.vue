<template>
  <ul>
    <li v-for="item in hotword" :key="item">
    {{ item }}
    </li>
    <!-- {{message}} -->
  </ul>
</template>

<script>
export default {
    name:'TopSearch',
    props:['message'],
    data(){
        return {

        }
    },
    computed:{
        hotword(){
            return this.$store.state.hotword;
        },
    }
}
</script>

<style lang='less' scoped>
ul{
    li{
        float: left;
        list-style-type: none;
        margin-right: 4px;
    }
}
</style>
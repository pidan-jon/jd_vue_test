<template>
    <ul>
    <li v-for="item in list" :key="item">
    {{ item }}
    </li>
    <!-- {{message}} -->
  </ul>
</template>

<script>
export default {
    name:'FaCol1',
    computed:{
        list(){
            return this.$store.state.list;
        },
    }
}
</script>

<style lang="less" scoped>

</style>
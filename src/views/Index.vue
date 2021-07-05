<template>
    <div>
        <Navigation></Navigation>
        <Header></Header>
        <First></First>
    </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'
import First from '@/components/First.vue'

export default {
  name: 'home',
  components: {
    Navigation,
    Header,
    First
  }
}
</script>

<style lang="less">
*{
    margin: 0;
    padding: 0;
}
</style>
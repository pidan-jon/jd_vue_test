<!--sticky组件-->
<template>
  <!--盒子容器-->
  <section ref="$box" :style="boxStyle">
    <!--内容容器-->
    <div ref="$content" :style="contentStyle" :class="{content:isFixed}">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
name:"Stickybox",
  props: {
    top: {
      type: [String],
      default: '-150',
    },
  },
  data() {
    return {
      boxStyle: {
        position: 'static',
        top: 0,
        left: 0,
        width: 'auto', // 占位
        height: 'auto',
      },
      contentStyle: {
        position: 'static',
        top: 0,
        left: 0,
        width:'auto',
        height: 'auto',
        'z-index':99,
        'border-bottom':'',
      },
      isFixedY: false, //用于优化性能
      isFixed: false,
    }
  },
  mounted() {
      // this.getContentSize() // 获取内容宽高
      this.scrollHandler() // 主动触发一次位置设置操作
      window.addEventListener('resize', this.onResize)
      window.addEventListener('scroll', this.scrollHandler, true)
  },
  beforeDestroy() {
      window.removeEventListener('resize', this.onResize)
      window.removeEventListener('scroll', this.scrollHandler, true)
  },
  methods: {
    // 获取dom数据
    // getContentSize() {
    //     console.log("getconntentsize")
    //   // 获取内容容器宽高信息
    //   const style = window.getComputedStyle(this.$refs.$content)
    //   // 设置盒子容器的宽高，为了后续占位
    //   this.boxStyle.width = style.width
    //   this.boxStyle.height = style.height
    // },
    // 页面缩放重置大小时，重新计算其位置
    sendIsFixed(){
      this.$emit('func',this.isFixed)
    },
    onResize() {
      const { $box } = this.$refs
      const { contentStyle } = this
      const boxTop = $box.getBoundingClientRect().top
      if (contentStyle.position === 'fixed') {
        contentStyle.top = this.top === 'unset' ? `${boxTop}px` : this.top
      }
    },
    scrollHandler() {
      const { $box, } = this.$refs
      const { contentStyle,boxStyle } = this
      const boxTop = $box.getBoundingClientRect().top
      if (this.top !== 'unset') {
        if (boxTop > parseInt(this.top) && this.isFixedY) {
          this.isFixedY = false
          contentStyle.position = 'static'
          contentStyle.width='var(--mainwidth,1190px)'
          boxStyle.width='var(--mainwidth,1190px)'
          contentStyle.background='none'
          contentStyle.borderBottom='none'
          this.isFixed=false
          this.sendIsFixed()
        } else if (boxTop < parseInt(this.top) && !this.isFixedY) {
          this.isFixedY = true
          contentStyle.position = 'fixed'
          contentStyle.width='var(--navwidth,1190px)'
          boxStyle.width='var(--mainwidth,1190px)'
          contentStyle.borderBottom='2px solid #f10214'
          contentStyle.background='#fff'
          this.isFixed=true
          this.sendIsFixed()
          this.onResize()
        }
      }
    },
  },
}
</script>
<style lang="less">
  @keyframes searchTop
  {
    from {top:-60px;}
    to {top:0;}
  }
  .content{
    animation:searchTop 1s ease;
  }
</style>
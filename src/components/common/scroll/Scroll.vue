<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 1
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: {}
            };
        },
        created() {},
        mounted() {
            //   document.querySelector(".wrapper")
            // this.$refs.wrapper
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeTypes,
                click: true,
                pullUpLoad: this.pullUpLoad
            })
            this.scroll.on('scroll', (position) => {
                console.log(position)
                this.$emit("showTab", position);
            })
            this.scroll.on('pullingUp', () => {
                console.log('上拉加载');
                // 下面的必须有，没有下面的内容，请求只能进行一次
                // this.scroll.finishPullUp()
                this.$emit('pullingUp')
            })
        },
        methods: {
            // 下面的多加几个&就是为了防止在远程调用这个页面，也就是该组件，图片加载的很快
            //导致scroll对象还没创建出来，home组件调用该对象就是空的，这样就会出现问题
            scrollTo(x, y, time = 300) {
                this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(0, 0, 300)
            },
            finishPullUp() {
                this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
            },
            refreashScroll() {
                this.scroll && this.scroll.refresh && this.scroll.refresh();
                console.log("我刷新了")
            }
        },
    };
</script>

<style scoped>
    .content {
        position: absolute;
        /* z-index: 8; */
    }
</style>
<template>
  <!-- better-scroll 网址http://ustbhuangyi.github.io/better-scroll/ -->

      <scroll class="wrapper">    
    分类
    <ul>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
    </ul>
</scroll>


</template>

<script>
    // import BScroll from "better-scroll";
    import Scroll from "common/scroll/Scroll";
    export default {
        name: "Category",
        data() {
            return {
                // scroll: null,
            };
        },
        components: {
            Scroll
        },

        created() {},
        mounted() {
            // //默认情况下，BScroll是不监测的
            // //属性probe表示监测
            // //0和1都不监测，1设置就是不监测，
            // //2,只要手在拖到就监测，但是手不拖动，惯性导致的移动是不监测的，离开就不监测
            // //3只要一直滚动，就一直监测
            // this.scroll = new BScroll(document.querySelector(".wrapper"), {
            //     probeType: 3,
            //     // 这个表示当单击事件在包裹的范围内，单击事件是否有效
            //     click: true,
            //     // 实现上拉加载更多
            //     pullUpLoad: true
            // });
            // // 下面的scroll和pullingUp表示的是事件。前面是滚动事件，后面的是下拉事件，这个必须有
            // this.scroll.on('scroll', (position) => {
            //     // console.log(position)
            // })

            // this.scroll.on('pullingUp', () => {
            //     console.log('上拉加载');
            //     // 下面的必须有，没有下面的内容，请求只能进行一次
            //     this.scroll.finishPullUp()
            // })
        },


        methods: {},
    };
</script>

<style scoped>
    .wrapper {
        height: 150px;
        background-color: red;
        overflow: hidden;
    }
</style>
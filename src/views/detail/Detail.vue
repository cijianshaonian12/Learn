<template>
  <div class="detail">
    <detail-item @ImageLoad="ImageLoad"  @ImageClick="ImageClick" ref="navbar"></detail-item>
    <scroll class="scrollstyle" ref="scroll" :probe-types="3" @showTab="showTab">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="goodLaod"
      ></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <good-list :goods="recommendList" ref="recomend"></good-list>
      <!-- <detail-recommend-info :recommendList="recommendList"></detail-recommend-info> -->
    </scroll>
    <back-top @click.native="goTop"  v-show="isShow" ></back-top>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
    import DetailItem from "views/detail/childComps/DetailItem";
    import DetailSwiper from "views/detail/childComps/DetailSwiper";
    import {
        getDetail,
        getRecommend,
        Goods,
        Shop,
        GoodsParam,
    } from "network/detail";
    import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
    import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
    import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
    import DetailParamInfo from "views/detail/childComps/DetailParamInfo";
    import Scroll from "common/scroll/Scroll";
    import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo";
    import DetailBottomBar from "views/detail/childComps/DetailBottomBar";
    import GoodList from "content/goods/GoodList";
    import backTop from 'content/backTop/backTop';
    import {
        backTopMixin
    } from "@/commons/mixin";
    // import { debounce } from "@/commons/utils";
    // import DetailRecommendInfo from 'views/detail/childComps/DetailRecommendInfo'
    export default {
        name: "Detail",
        mixins: [backTopMixin],
        data() {
            return {
                deid: null,
                topImages: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                recommendList: [],
                TopNavY: [],
                courentIndex: 0,
                isShow: false
            };
        },
        components: {
            DetailItem,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            GoodList,
            DetailBottomBar,
            backTop
            // DetailRecommendInfo
        },

        created() {
            this.deid = this.$route.params.deid;
            console.log(this.deid);

            getDetail(this.deid).then((res) => {
                console.log(res);
                const data = res.result;
                this.topImages = data.itemInfo.topImages;
                // 2.获取商品信息
                this.goods = new Goods(
                    data.itemInfo,
                    data.columns,
                    data.shopInfo.services
                );

                // 3.创建店铺信息的对象
                this.shop = new Shop(data.shopInfo);

                // 4.保存商品的详情数据
                this.detailInfo = data.detailInfo;
                // 5.获取参数的信息
                this.paramInfo = new GoodsParam(
                    data.itemParams.info,
                    data.itemParams.rule
                );

                // 2.7.保存评论信息
                if (data.rate.list) {
                    this.commentInfo = data.rate.list[0];
                }
            });

            getRecommend().then((res, error) => {
                console.log("我是", res);
                if (error) return;
                this.recommendList = res.data.list;
            });


            // this.$nextTick(() => {
            //     console.log("nextTick")
            //     this.TopNavY = []
            //     this.TopNavY.push(0)
            //     this.TopNavY.push(this.$refs.params.$el.offsetTop)
            //     this.TopNavY.push(this.$refs.comment.$el.offsetTop)
            //     this.TopNavY.push(this.$refs.recomend.$el.offsetTop)


            // })

        },
        mounted() {
            // 下面加入了防抖函数
            // const refreshs = debounce(this.$refs.scroll.refreashScroll, 5);
            // // 下面的方法修改，下面的简单写法
            // // this.$bus.$on("itemImageload", () => {
            // //     console.log("$bus测试");
            // //     refreshs();
            // //     console.log("montend加载", this.$refs.tabcontroll2.$el.offsetTop)
            // // })
            // this.ImageLesean = () => {
            //   console.log("$bus测试");
            //   refreshs();
            //   console.log("montend加载", this.$refs.tabcontroll2.$el.offsetTop);
            // };

            // this.$bus.$on("itemImageload", this.ImageLesean);



        },

        methods: {
            goodLaod() {
                this.$refs.scroll.refreashScroll();
            },
            ImageLoad() {
                this.refreshsImage();

                //     console.log("nextTick")


            },
            ImageClick(index) {
                console.log(index);
                console.log("我在搞什么", this.TopNavY[index])
                    // this.$refs.scroll.scrollTo(0, -this.TopNavY[index], 300)
                    // this.$refs.scroll.scroll.scrollTo(0, -this.TopNavY[index], 300)
                console.log("wq", this.$refs.params.$el.offsetTop)
                console.log(this.$refs.comment.$el.offsetTop)
                console.log(this.$refs.recomend.$el.offsetTop)
                console.log(index)
                switch (index) {
                    case 0:
                        this.$refs.scroll.scroll.scrollTo(0, 0, 300)
                        break;
                    case 1:
                        this.$refs.scroll.scroll.scrollTo(0, -this.$refs.params.$el.offsetTop, 300)
                        break;
                    case 2:
                        this.$refs.scroll.scroll.scrollTo(0, -this.$refs.comment.$el.offsetTop, 300)
                        break;
                    case 3:
                        this.$refs.scroll.scroll.scrollTo(0, -this.$refs.recomend.$el.offsetTop, 300)
                        break;
                }



            },
            showTab(position) {
                this.TopNavY = []
                this.TopNavY.push(0)
                this.TopNavY.push(this.$refs.params.$el.offsetTop)
                this.TopNavY.push(this.$refs.comment.$el.offsetTop)
                this.TopNavY.push(this.$refs.recomend.$el.offsetTop)
                    // console.log("测试", position)
                let PostionY = -position.y;
                let length = this.TopNavY.length;
                // console.log("测试2", PostionY)
                for (let i = 0; i < this.TopNavY.length; i++) {
                    // console.log("测试3", this.TopNavY)
                    if ((this.courentIndex !== i) && ((length - 1 > i && PostionY > this.TopNavY[parseInt(i)] && PostionY < this.TopNavY[i + 1]) || length - 1 === i && PostionY > this.TopNavY[parseInt(i)])) {

                        this.courentIndex = i;
                        console.log("编号", this.courentIndex)
                        this.$refs.navbar.currentIndex = this.courentIndex;
                    }

                }

            },
            goTop() {
                this.$refs.scroll.scrollTo(0, 0, 300)
                console.log("点击")
            },
            showTab(position) {
                console.log(position)
                this.isShow = -(position.y) > 1000
            },
            addCart() {
                console.log("添加购物车")
                    // 1.创建对象
                const obj = {}
                    // 2.对象信息
                obj.iid = this.deid;
                obj.imgURL = this.topImages[0]
                obj.title = this.goods.title
                obj.desc = this.goods.desc;
                obj.newPrice = this.goods.nowPrice;
                // 3.添加到Store中,这个是在mutation种设置方法
                // this.$store.commit('addCart', obj)

                // 这是在action中设置方法
                this.$store.dispatch('addCart', obj)
                this.$router.push("/cart")
            }
        },
    };
</script>

<style scoped>
    .detail {
        height: 100vh;
        background-color: #fff;
        position: relative;
        z-index: 9;
    }
    
    .scrollstyle {
        height: calc(100%-44px);
        overflow: hidden;
        background-color: #fff;
    }
</style>
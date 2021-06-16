<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="left"></div>
      <div slot="center">购物车</div>
      <div slot="right"></div>
    </nav-bar>
    <tab-controll  @tabClick="tabClick"  ref="tabcontroll1" class="tabcontrol"  v-show="IsFiexd" :tabtitle="['流行', '新款', '精选']"></tab-controll>
<scroll class="wrapper" 
ref="scroll"
 @showTab="showTab"
 :pull-up-load="true"
 @pullingUp="loadMore"
 :probe-types="3">
   <!-- <swiper>
      <swiper-item v-for="item in banners" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" alt="图片">
        </a>
      </swiper-item>
    </swiper> -->
    <div class="pac">
      <home-swiper class="homeswiper" :banners="banners"  @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommand :recommends="recommends"></home-recommand>
      <feature-view></feature-view>
      <tab-controll  @tabClick="tabClick"  ref="tabcontroll2"  class="tabcontrol" :tabtitle="['流行', '新款', '精选']"></tab-controll>
      <good-list :goods="ShowGoods"></good-list>
    </div>
  </scroll>  
 <back-top @click.native="goTop"  v-show="isShow" ></back-top>
    
  </div>
</template>
<script>
    import NavBar from "common/navbar/NavBar";
    import {
        getHomeMultidata,
        getHomeData,
        RECOMMEND,
        BANNER
    } from "network/home";
    import HomeSwiper from "views/home/childComps/HomeSwiper";
    import HomeRecommand from "views/home/childComps/HomeRecommand";
    import FeatureView from "views/home/childComps/FeatureView";
    import TabControll from "content/tabControl/TabControll";
    import GoodList from "content/goods/GoodList";
    import Scroll from "common/scroll/Scroll";
    import backTop from 'content/backTop/backTop';
    import {
        debounce
    } from '@/commons/utils';

    export default {
        name: "Home",
        data() {
            return {
                banners: [],
                recommends: [],
                goodsList: {
                    pop: {
                        page: 1,
                        list: []
                    },
                    new: {
                        page: 1,
                        list: []
                    },
                    sell: {
                        page: 1,
                        list: []
                    },
                },
                courentCount: "pop",
                isShow: false,
                tabOfSetTop: 0,
                IsFiexd: false,
                ScrollY: 0,
                ImageLesean: null
            };
        },
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommand,
            FeatureView,
            TabControll,
            GoodList,
            Scroll,
            backTop
        },

        created() {
            this.getMultiData();
            // 2.请求商品数据
            this.getHomeProducts("pop")
            this.getHomeProducts("new")
            this.getHomeProducts("sell")

        },
        computed: {
            ShowGoods() {
                return this.goodsList[this.courentCount].list;
            }
        },
        destroyed() {
            console.log('home组件销毁')
        },
        activated() {
            console.log('activated')
            this.$refs.scroll.scrollTo(0, this.ScrollY, 0);
            this.$refs.scroll.refreashScroll();
        },
        deactivated() {
            console.log('deactivated', this.$refs.scroll.scroll.y)
            this.ScrollY = this.$refs.scroll.scroll.y;
            this.$bus.$off("itemImageload", this.ImageLesean)
        },
        mounted() {

            // 下面加入了防抖函数
            const refreshs = debounce(this.$refs.scroll.refreashScroll, 5)
                // 下面的方法修改，下面的简单写法
                // this.$bus.$on("itemImageload", () => {
                //     console.log("$bus测试");
                //     refreshs();
                //     console.log("montend加载", this.$refs.tabcontroll2.$el.offsetTop)
                // })
            this.ImageLesean = () => {
                console.log("$bus测试");
                refreshs();
                console.log("montend加载", this.$refs.tabcontroll2.$el.offsetTop)
            }

            this.$bus.$on("itemImageload", this.ImageLesean)
        },
        methods: {
            /**
             * 网络请求相关方法
             */
            getMultiData() {
                getHomeMultidata().then((res) => {
                    this.banners = res.data[BANNER].list;
                    this.recommends = res.data[RECOMMEND].list;
                    // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
                    // this.$nextTick(() => {
                    //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
                    // })
                    console.log(res);
                });
            },
            getHomeProducts(type) {
                getHomeData(type, this.goodsList[type].page).then((res) => {
                    const goodsList = res.data.list;
                    // 解析，向其中追加数据到 this.goodsList[type].list，而不是替换
                    this.goodsList[type].list.push(...goodsList);
                    this.goodsList[type].page += 1;
                    console.log("res", res);
                    // 加载跟多，加上下面的这个才能让其加载跟多调用多次，默认只会调用一次
                    this.$refs.scroll.finishPullUp()
                });
            },
            tabClick(index) {
                console.log(index)
                switch (index) {
                    case 0:
                        this.courentCount = "pop";
                        break;
                    case 1:
                        this.courentCount = "new";
                        break;
                    case 2:
                        this.courentCount = "sell";
                        break;
                }
                console.log("tabclick----", this.$refs.tabcontroll2.courentCount)
                this.$refs.tabcontroll1.courentCount = this.$refs.tabcontroll2.courentCount = index
            },
            goTop() {
                this.$refs.scroll.scrollTo(0, 0, 300)
                console.log("点击")
            },
            // 展示小图标
            showTab(position) {
                console.log(position)
                this.isShow = -(position.y) > 1000
                this.IsFiexd = -(position.y) > this.tabOfSetTop
            },
            // 解决加载数据，courentCount表示类型pop不是数字
            loadMore() {
                console.log("我的加载的大大的多")
                this.getHomeProducts(this.courentCount)
            },
            // 解决吸顶的效果
            swiperImageLoad() {
                console.log("home加载了swiperImageLoad里面的", this.$refs.tabcontroll2.$el.offsetTop)
                this.tabOfSetTop = this.$refs.tabcontroll2.$el.offsetTop;
            }

        },
    };
</script>

<style scoped>
    #home {
        /*position: relative;*/
        height: 100vh;
    }
    
    .home-navbar {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    
    .homeswiper {
        padding-top: 44px;
    }
    
    .tabcontrol {
        position: sticky;
        top: 40px;
        background-color: white;
        z-index: 9;
    }
    
    .wrapper {
        height: calc(100%-93px);
        overflow: hidden;
    }
</style>
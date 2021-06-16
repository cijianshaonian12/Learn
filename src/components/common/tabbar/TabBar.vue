<template>
  <div class="tabbar">
    <tab-bar-item path='/home' activeColor="red">
        <span slot="icon">
        <img  src="~assets/img/tabbar/home.svg" alt="首页" />
        </span>
         <span slot="active-icon">
        <img  src="~assets/img/tabbar/home_active.svg" alt="首页" />
        </span>
        <div slot="text">
           首页
        </div>
    </tab-bar-item>
    <tab-bar-item path='/category' activeColor="red">
        <span slot="icon">
        <img  src="~assets/img/tabbar/category.svg" alt="分类" />
        </span>
            <span slot="active-icon">
        <img  src="~assets/img/tabbar/category_active.svg" alt="首页" />
        </span>
       <div slot="text">
           分类
        </div>
    </tab-bar-item>
    <tab-bar-item path='/cart' activeColor="red"> 
       <span slot="icon">
        <img src="~assets/img/tabbar/cart.svg" alt="购物车" />
       </span>
           <span slot="active-icon">
        <img  src="~assets/img/tabbar/cart_active.svg" alt="首页" />
        </span>
      <div slot="text">
           购物车
        </div>
    </tab-bar-item>
    <tab-bar-item path='/profile' activeColor="red">
       <span slot="icon">
        <img src="~assets/img/tabbar/profile.svg" alt="个人" />
       </span>
           <span slot="active-icon">
        <img  src="~assets/img/tabbar/profile_active.svg" alt="首页" />
        </span>
      <div slot="text">
           个人
        </div>
    </tab-bar-item>
  </div>
</template>

<script>
    import TabBarItem from "common/tabbar/TabBarItem.vue";
    export default {
        components: {
            TabBarItem
        },
        name: "TabBar",
        data() {
            return {};
        },

        created() {},
        mounted() {},

        methods: {},
    };
</script>

<style scoped>
    .tabbar {
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0px -1px 1px rgba(100, 100, 100, .2);
        z-index: 2;
    }
</style>
<template>
  <div id="app">

    <tab-bar> </tab-bar>
    <keep-alive exclude="Detail">
    <router-view />
    </keep-alive>
  </div>
</template>
<script>
    // import MainTabBar from 'common/'
    // import Icon from 'content/Icon/Icon.vue'
    // import SvgIcon from 'content/Icon/svg.vue'
    import TabBarItem from "common/tabbar/TabBarItem.vue";
    import TabBar from "common/tabbar/TabBar.vue";
    export default {
        name: "app",
        components: {
            TabBarItem,
            TabBar,
        },
    };
</script>


<style>
    @import "assets/css/base.css";
</style>
<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <!-- <grid-view> -->
      <good-list :goods="ShowGoods">
      <goods-list-item v-for="(item, index) in recommendList" :key="index" :goods="item"></goods-list-item>
    <!-- </grid-view> -->
      </good-list>
  </div>
</template>

<script>
    // import GridView from 'common/gridView/GridView'
    import GoodsListItem from 'content/goods/GoodListItem';
    import GoodList from "content/goods/GoodList";
    export default {
        name: "DetailRecommendInfo",
        components: {
            // GridView,
            GoodsListItem,
            GoodList
        },
        props: {
            recommendList: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    .recommend-info {
        padding: 5px;
    }
    
    .info-header {
        line-height: 40px;
        padding-left: 8px;
        font-size: 15px;
        color: #333;
    }
</style>
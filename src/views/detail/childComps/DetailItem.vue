<template>
  <div class="detailitem">
    <nav-bar>
      <div class="left" slot="left">
        <div class="imges" @click="goBack">
          <img src="~assets/img/common/back.svg" alt="返回"   @load="ImageLoad" />
        </div>
      </div>
      <div class="center" slot="center">
        <div
          class="item"
          v-for="(item, index) in titles"
          :key="index"
          @click="ItemClick(index)"
          :class="{ active: index == currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from "common/navbar/NavBar";
    export default {
        name: "DetailItem",
        data() {
            return {
                titles: ["商品", "参数", "评论", "推荐"],
                currentIndex: 0,
            };
        },
        components: {
            NavBar,
        },
        created() {},
        mounted() {},

        methods: {
            ItemClick(index) {
                this.currentIndex = index;
                this.$emit("ImageClick", index);
            },
            goBack() {
                this.$router.back();
            },
            ImageLoad() {
                this.$emit("ImageLoad");
            }
        },
    };
</script>

<style scoped>
    .detailitem {
        position: relative;
        z-index: 20;
        background-color: #fff;
    }
    
    .center {
        display: flex;
        font-size: 13px;
    }
    
    .item {
        flex: 1;
    }
    
    .imges {
        text-align: center;
        margin-top: 4px;
    }
    
    .active {
        color: var(--color-high-text);
    }
</style>
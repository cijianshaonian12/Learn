<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="顶部图片" />
  </div>
</template>

<script>
    export default {
        name: "backTop",
        data() {
            return {};
        },

        created() {},
        mounted() {},

        methods: {

        },
    };
</script>

<style scoped>
    .backTop {
        position: fixed;
        right: 10px;
        bottom: 60px;
        z-index: 9;
    }
    
    .backTop img {
        width: 46px;
        height: 46px;
    }
</style>
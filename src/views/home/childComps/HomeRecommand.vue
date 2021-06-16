<template>
  <div class="recomend">
    <div class="itemrecomd" v-for="item in recommends" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "HomeRecommand",
        props: {
            recommends: {
                type: Array,
                default () {
                    return [];
                },
            },
        },
        data() {
            return {};
        },
        created() {},
        mounted() {},
        methods: {},
    };
</script>
<style scoped>
    .recomend {
        display: flex;
        flex: 1;
    }
    
    .itemrecomd {
        flex: 1;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 40px;
    }
    
    .recomend img {
        width: 60px;
        height: 60px;
    }
</style>
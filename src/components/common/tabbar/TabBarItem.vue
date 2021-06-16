<template>
  <div class="tabbaritem" @click="ItemClick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="active-icon"></slot></div>
    <!-- <div :class="{active:isActive}"><slot name="text"></slot></div> -->
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            activeColor: {
                String,
                default: "red",
            },
        },
        data() {
            return {
                //  isActive: true
            };
        },
        created() {},
        mounted() {},
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1;
            },
            activeStyle() {
                return this.isActive ? {
                    color: this.activeColor
                } : {};
            },
        },

        methods: {
            ItemClick() {
                this.$router.push(this.path);
            },
        },
    };
</script>

<style scoped>
    .tabbaritem img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        margin-bottom: 2px;
    }
    
    .tabbaritem {
        flex: 1;
        font-size: 12px;
        text-align: center;
        height: 49px;
    }
    
    .active {
        color: #ff33ff;
    }
</style>
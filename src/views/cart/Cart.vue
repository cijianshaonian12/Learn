<template>
  <div>
    <nav-bar class="home-navbar">
      <div slot="center">购物车({{carTLength}})</div>
    </nav-bar>
购物车
  </div>
</template>

<script>
    import NavBar from "common/navbar/NavBar";
    export default {
        name: 'Cart',
        data() {
            return {};
        },
        components: {
            NavBar
        },
        computed: {

            carTLength() {
                return this.$store.getters.cartCount;
            }
        },
        created() {},
        mounted() {},

        methods: {},
    };
</script>

<style scoped>
    .home-navbar {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
</style>
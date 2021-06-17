<template>
  <div>
    <nav-bar class="home-navbar">
      <!-- <div slot="center">购物车({{cartCount}})</div> -->
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
购物车
  </div>
</template>

<script>
    import NavBar from "common/navbar/NavBar";
    import {
        mapGetters
    } from 'vuex';
    export default {
        name: 'Cart',
        data() {
            return {};
        },
        components: {
            NavBar
        },
        computed: {

            // carTLength() {
            //     return this.$store.getters.cartCount;
            // }

            // 下面的是方法一
            // ...mapGetters(['cartList', 'cartCount'])
            // 下面的是方法二
            ...mapGetters({
                cartList: "cartList",
                length: 'cartCount'
            })
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
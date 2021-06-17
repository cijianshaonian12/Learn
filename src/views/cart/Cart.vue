<template>
  <div class="cart">
    <nav-bar class="home-navbar">
      <!-- <div slot="center">购物车({{cartCount}})</div> -->
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <car-list></car-list>
购物车
  </div>
</template>

<script>
    import NavBar from "common/navbar/NavBar";
    import carList from "views/cart/childComps/CartList";
    import {
        mapGetters
    } from 'vuex';
    export default {
        name: 'Cart',
        data() {
            return {};
        },
        components: {
            NavBar,
            carList
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
    .cart {
        height: 100vh;
    }
    
    .home-navbar {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>
<template>
  <div class="cart-list">
    <scroll class="wrapper">
      <!-- <div v-for="(item,index) in cartList" :key="index">
    {{item}}
</div> -->
      <ul>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import { mapGetters } from "vuex";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    Scroll,
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
      length: "cartCount",
    }),
  },

  created() {},
  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.cart-list{
height: calc(100% - 44px - 49px);
}
.wrapper {
  height: 100%;
}
</style>

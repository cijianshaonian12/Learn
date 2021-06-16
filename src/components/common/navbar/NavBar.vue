<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },

  created() {},
  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0px 2px 3px rgba(100, 100, 100, .1);

}
.left{
width: 60px;
}
.center{
flex: 1;
text-align: center;
}
.right{
width: 60px;
}
</style>

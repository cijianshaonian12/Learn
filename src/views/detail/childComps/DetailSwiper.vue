<template>
  <div class="swipper">
    <swiper class="swipic">
      <swiper-item v-for="(item,index) in topImages" :key="index">
          <img :src="item" alt="图片" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  created() {},
  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.swipper{
    display: flex;
    margin: 0 auto;
    /* width: 400px; */
    height: 300px;
    overflow: hidden;
}
</style>

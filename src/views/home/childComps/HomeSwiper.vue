<template>
  <div>
  <swiper>
      <swiper-item v-for="item in banners" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" alt="图片" @load="swiperImageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper'
    export default {
        name: 'HomeSwiper',
        props: {
            banners: {
                type: Array,
                default () {
                    return []
                }
            }

        },
        data() {
            return {

                isLoad: false
            };
        },
        components: {
            Swiper,
            SwiperItem
        },

        created() {},
        mounted() {},

        methods: {
            swiperImageLoad() {

                if (!this.isLoad) {
                    this.$emit("swiperImageLoad");
                    this.isLoad = true
                }

            }

        },
    };
</script>

<style scoped>

</style>
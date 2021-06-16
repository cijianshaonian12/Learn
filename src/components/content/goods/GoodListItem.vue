<template>
  <div  class="goods" @click="ItemClick">
         <img :src="showImage" alt="图片"  @load="imageLoad"/>
      <div class="goods-info">
        <p>{{ item.title }}</p>
        <span class="price">¥{{item.price}}</span>
        <span class="collect">{{ item.cfav }}</span>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'GoodListItem',
        props: {
            item: {
                type: Object
            }
        },
        data() {
            return {};
        },

        created() {},
        mounted() {},
        computed: {

            showImage() {
                return this.item.image || this.item.show.img;
            }


        },
        methods: {
            imageLoad() {

                this.$bus.$emit("itemImageload");

                // 下面的方法是可以行的
                // 这个就是当都使用GoodList的时候，这样在detail.vue中也是将刷新的消息提交到
                // home.vue这样是存在问题的，通过路由判断将其消息提交对应的vue组件中
                // if (this.$router.path.indexOf('/home')) {
                //     this.$bus.$emit("itemImageload");

                // } else if (this.$router.path.indexOf('/detail')) {
                //     this.$bus.$emit("detailItemLoad");
                // }

            },
            ItemClick() {
                console.log("详情页点击");
                this.$router.push('/detail/' + this.item.iid);
            }

        },
    };
</script>

<style scoped>
    .goods {
        padding-bottom: 40px;
        position: relative;
        display: inline-block;
        width: 48%;
    }
    
    .goods img {
        width: 100%;
    }
    
    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
        width: 100%;
    }
    
    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    
    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    
    .goods-info .collect {
        position: relative;
    }
    
    .goods-info .collect::before {
        content: "";
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>
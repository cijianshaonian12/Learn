<template>
  <div class="tabcontrole">
    <div
      class="tabitem"
      v-for="(item, index) in tabtitle"
      :key="index"
      @click="checktab(index)"
      :class="{ active: index == courentCount }"
    >
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabControll",
        props: {
            tabtitle: {
                type: Array,
                default () {
                    return [];
                },
            },
        },
        data() {
            return {
                courentCount: "0",
            };
        },

        created() {},
        mounted() {},

        methods: {
            checktab(index) {
                this.courentCount = index;
                this.$emit("tabClick", index);
            },
        },
    };
</script>

<style scoped>
    .tabcontrole {
        display: flex;
        font-size: 15px;
        margin-top: 10px;
    }
    
    .tabitem {
        flex: 1;
        text-align: center;
        height: 40px;
        line-height: 40px;
    }
    
    .active {
        color: var(--color-high-text);
    }
    
    .active span {
        border-bottom: 3px solid var(--color-tint);
        padding: 5px;
    }
</style>
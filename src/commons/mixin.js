import { debounce } from "@/commons/utils";

import backTop from 'content/backTop/backTop';

export const backTopMixin = {
    data() {
        return {
            refreshsImage: null,
            isShow: false
        }
    },
    components: {
        backTop
    },
    mounted() {

        // 下面加入了防抖函数
        this.refreshsImage = debounce(this.$refs.scroll.refreashScroll, 5)
            // 下面的方法修改，下面的简单写法
            // this.$bus.$on("itemImageload", () => {
            //     console.log("$bus测试");
            //     refreshs();
            //     console.log("montend加载", this.$refs.tabcontroll2.$el.offsetTop)
            // })
        console.log('我那个擦擦')
        this.ImageLesean = () => {
            console.log("$bus测试");
            this.refreshsImage();
            // console.log("montend加载", this.$refs.tabcontroll2.$el.offsetTop)
        }

        this.$bus.$on("itemImageload", this.ImageLesean)
    },
    methods: {
        goTop() {
            this.$refs.scroll.scrollTo(0, 0, 300)
            console.log("点击")
        },
        // 展示小图标
        showTab(position) {
            console.log(position)
            this.isShow = -(position.y) > 1000
        }
    }

}
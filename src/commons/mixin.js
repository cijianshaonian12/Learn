import { debounce } from "@/commons/utils";

export const backTopMixin = {
    data() {
        return {
            refreshsImage: null
        }
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
    }

}
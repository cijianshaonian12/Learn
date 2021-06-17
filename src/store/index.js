import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            // 下面的是旧版本可行
            //payload新添加的商品
            // let oldproduct = null;
            // for (let item of state.cartList) {
            //     if (item.iid === payload.iid) {
            //         oldproduct = item
            //     }
            // }

            // 下面的版本也可行
            let oldproduct = state.cartList.find(item => item.iid === payload.iid)



            // 判断oldproduct
            if (oldproduct) {
                oldproduct.count += 1
            } else {
                payload.count = 1;
                state.cartList.push(payload)
            }

        }


    },
    actions: {},
    modules: {}
})
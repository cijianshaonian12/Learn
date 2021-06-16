import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            //payload新添加的商品
            let oldproduct = null;
            for (let item of state.cartList) {
                if (item.iid === payload.iid) {
                    oldproduct = item
                }
            }
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
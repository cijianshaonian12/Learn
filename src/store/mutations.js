import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
    // // 一般mutations不做逻辑处理，一般放在action中处理，通过调用action修改state状态
    // addCart(state, payload) {
    //     // 下面的是旧版本可行
    //     //payload新添加的商品
    //     // let oldproduct = null;
    //     // for (let item of state.cartList) {
    //     //     if (item.iid === payload.iid) {
    //     //         oldproduct = item
    //     //     }
    //     // }

    //     // 下面的版本也可行
    //     let oldproduct = state.cartList.find(item => item.iid === payload.iid)



    //     // 判断oldproduct
    //     if (oldproduct) {
    //         oldproduct.count += 1
    //     } else {
    //         payload.count = 1;
    //         state.cartList.push(payload)
    //     }

    // }


    [ADD_COUNTER](state, payload) {
        payload.count++;
    },
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload)
    }
}
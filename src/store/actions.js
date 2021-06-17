export default {

    addCart(context, payload) {



        // 下面的是旧版本可行
        //payload新添加的商品
        // let oldproduct = null;
        // for (let item of state.cartList) {
        //     if (item.iid === payload.iid) {
        //         oldproduct = item
        //     }
        // }

        // 下面的版本也可行

        let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)

        // let oldproduct = state.cartList.find(item => item.iid === payload.iid)




        // 判断oldproduct
        if (oldproduct) {
            context.commit("addCount", oldproduct)
                // oldproduct.count += 1
        } else {
            payload.count = 1;
            context.commit('addToCart', payload)
                // context.state.cartList.push(payload)
        }

    }
}
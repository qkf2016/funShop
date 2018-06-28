import { handleActions } from 'redux-actions'
import {
  ADD_PRODUCT,
  ADD_PRODUCT_COUNT,
  REDUCE_PRODUCT_COUNT
} from '../types/shopping'

export default handleActions({

  // 商品加入购物车
  [ADD_PRODUCT] (state, action) {
    let productObj = action.payload
    let idArr = state.shopCar.map(p => p.id)
    const isInclude = idArr.includes(productObj.id)
    if (!isInclude) {
      state.shopCar.push(productObj)
    }else {
      const index = state.shopCar.findIndex( p => p.id === productObj.id )
      state.shopCar[index].num = productObj.num
    }

    return {...state}
  },

  // 增加已加入购物车的商品数量
  [ADD_PRODUCT_COUNT] (state, action) {
    const index = state.shopCar.findIndex( p => p.id === action.payload.id )
    state.shopCar[index].num += 1

    return {...state}
  },

  // 减少已加入购物车的商品数量
  [REDUCE_PRODUCT_COUNT] (state, action) {
    const index = state.shopCar.findIndex( p => p.id === action.payload.id )
    // state.shopCar[index].num = (state.shopCar[index].num > 0) ? state.shopCar[index].num -- : state.shopCar.splice(index, 1)
    if (state.shopCar[index].num > 1) {
      state.shopCar[index].num -= 1
    } else {
      state.shopCar.splice(index, 1)
    }

    return {...state}
  }
  
}, {
  shopCar: []
})
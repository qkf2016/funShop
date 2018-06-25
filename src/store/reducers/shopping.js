import { handleActions } from 'redux-actions'
import { ADD_PRODUCT, REDUCE_PRODUCT } from '../types/shopping'

export default handleActions({

  // 商品加入购物车
  [ADD_PRODUCT] (state, action) {
    console.log(action.payload)
    state.shopCar.push(action.payload)
    return {
      ...state,
      shopCar: state.shopCar
    }
  },

  // 商品移除购物车
  [REDUCE_PRODUCT] (state) {
    return {
      ...state,
      shopCar: state.shopCar
    }
  }
  
}, {
  shopCar: []
})
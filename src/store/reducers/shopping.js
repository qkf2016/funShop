import { handleActions } from 'redux-actions'
import { ADD_PRODUCT, REDUCE_PRODUCT } from '../types/shopping'

export default handleActions({

  // 商品加入购物车
  [ADD_PRODUCT] (state, action) {
    console.log(action.payload)
    let productObj = action.payload
    let idArr = state.shopCar.map(p => { return p.id })
    const isInclude = idArr.includes(productObj.id)
    if (!isInclude) {
      if (productObj.num > 0) state.shopCar.push(productObj)
    }else {
      for (let i of idArr) {
        if (i === productObj.id) {
          const index = idArr.indexOf(i)
          if (productObj.num > 0) state.shopCar[index].num = productObj.num
          if (productObj.num === 0) state.shopCar.splice(index, 1)
          break;
        }
      }
    }
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
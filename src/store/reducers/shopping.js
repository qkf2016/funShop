import { handleActions } from 'redux-actions'
import {
  ADD_PRODUCT,
  ADD_PRODUCT_COUNT,
  REDUCE_PRODUCT_COUNT,
  MANAGE_PAY_PRODUCT,
  COMPUTE_PAY_MONEY
} from '../types/shopping'

export default handleActions({

  // 商品加入购物车
  [ADD_PRODUCT] (state, action) {
    let productObj = action.payload
    let idArr = state.shopCar.map(p => p.id)
    const isInclude = idArr.includes(productObj.id)
    if (!isInclude) {
      state.shopCar.push(productObj)
      // 深拷贝一份数组对象
      state.wxPayObj.payShopCar = state.shopCar.concat()
      state.wxPayObj.totalMoney = 0
      for (let i of state.wxPayObj.payShopCar) {
        state.wxPayObj.totalMoney += i.price * i.num
      }
    }else {
      const index = state.shopCar.findIndex( p => p.id === productObj.id )
      state.shopCar[index].num = productObj.num
      // 深拷贝一份数组对象
      state.wxPayObj.payShopCar = state.shopCar.concat()
      state.wxPayObj.totalMoney = 0
      for (let i of state.wxPayObj.payShopCar) {
        state.wxPayObj.totalMoney += i.price * i.num
      }
    }

    return {...state}
  },

  // 增加已加入购物车的商品数量
  [ADD_PRODUCT_COUNT] (state, action) {
    let productObj = action.payload
    const index = state.shopCar.findIndex( p => p.id === productObj.id )
    state.shopCar[index].num += 1
    // 深拷贝一份数组对象
    state.wxPayObj.payShopCar = state.shopCar.concat()
    state.wxPayObj.totalMoney = 0
    for (let i of state.wxPayObj.payShopCar) {
      state.wxPayObj.totalMoney += i.price * i.num
    }

    return {...state}
  },

  // 减少已加入购物车的商品数量
  [REDUCE_PRODUCT_COUNT] (state, action) {
    let productObj = action.payload
    const index = state.shopCar.findIndex( p => p.id === productObj.id )
    if (state.shopCar[index].num > 1) {
      state.shopCar[index].num -= 1
    } else {
      state.shopCar.splice(index, 1)
    }
    // 深拷贝一份数组对象
    state.wxPayObj.payShopCar = state.shopCar.concat()
    state.wxPayObj.totalMoney = 0
    for (let i of state.wxPayObj.payShopCar) {
      state.wxPayObj.totalMoney += i.price * i.num
    }

    return {...state}
  },

  // 管理购物车结算商品
  [MANAGE_PAY_PRODUCT] (state, action) {
    let productId = action.payload
    let idArr = state.wxPayObj.payShopCar.map(p => p.id)
    const isInclude = idArr.includes(productId)
    if (!isInclude) {
      state.wxPayObj.payShopCar = state.shopCar.filter(p => p.id === productId)
    }else {
      const index = state.wxPayObj.payShopCar.findIndex( p => p.id === productId )
      state.wxPayObj.payShopCar.splice(index, 1)
    }
    state.wxPayObj.totalMoney = 0
    for (let i of state.wxPayObj.payShopCar) {
      state.wxPayObj.totalMoney += i.price * i.num
    }

    return {...state}
  },

  // 计算结算商品总价
  [COMPUTE_PAY_MONEY] (state) {
    state.wxPayObj.totalMoney = 0
    for (let i of state.wxPayObj.payShopCar) {
      state.wxPayObj.totalMoney += i.price * i.num
    }

    return {...state}
  }
  
}, {
  shopCar: [],
  wxPayObj: {
    totalMoney: 0,
    payShopCar: [] // 需要结算的商品
  }
})
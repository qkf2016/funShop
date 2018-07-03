import { createAction } from 'redux-actions'
// import wepy from 'wepy'
import 'wepy-async-function'
import { 
  ADD_PRODUCT,
  ADD_PRODUCT_COUNT,
  REDUCE_PRODUCT_COUNT,
  MANAGE_PAY_PRODUCT,
  COMPUTE_PAY_MONEY
} from '../types/shopping'

// 购物车添加商品
export const addProduct = createAction(ADD_PRODUCT, productObj => {
  return productObj
})

// 增加购物车商品数量
export const addProductCount = createAction(ADD_PRODUCT_COUNT, id => {
  return {
    id,
    num: 1
  }
})

// 减少购物车商品数量
export const reduceProductCount = createAction(REDUCE_PRODUCT_COUNT, id => {
  return {
    id,
    num: 1
  }
})

// 管理购物车商品结算
export const managePayProduct = createAction(MANAGE_PAY_PRODUCT, id => {
  return id
})

// 计算结算商品的总价
export const computePayMoney = createAction(COMPUTE_PAY_MONEY, () => {
  return true
})

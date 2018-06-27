import { handleActions } from 'redux-actions'
import { GET_MALLINFO, GET_CLASSONE, GET_NEWPRODUCT, GET_PRODUCTACTIVITY, GET_HOTSALEPRODUCT } from '../types/mall'

export default handleActions({

  // 获取店铺信息
  [GET_MALLINFO] (state, action) {
    state.mallInfo = action.payload
    return {
      ...state,
      mallInfo: state.mallInfo
    }
  },

  // 获取店铺一级分类
  [GET_CLASSONE] (state, action) {
    state.classOne = action.payload
    return {
      ...state,
      classOne: state.classOne
    }
  },

  // 获取店铺新品
  [GET_NEWPRODUCT] (state, action) {
    state.newProduct = action.payload
    return {
      ...state,
      newProduct: state.newProduct
    }
  },

  // 获取店铺活动
  [GET_PRODUCTACTIVITY] (state, action) {
    state.productActivity = action.payload
    return {
      ...state,
      productActivity: state.productActivity
    }
  },

  // 获取店铺热卖商品
  [GET_HOTSALEPRODUCT] (state, action) {
    state.hotSaleProduct = action.payload
    return {
      ...state,
      hotSaleProduct: state.hotSaleProduct
    }
  },

}, {
  mallInfo: null,
  classOne: [],
  newProduct: [],
  productActivity: [],
  hotSaleProduct: []
})
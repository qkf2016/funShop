import { handleActions } from 'redux-actions'
import { 
  GET_MALLINFO, 
  GET_CLASSONE, 
  GET_CLASSTWO, 
  GET_NEWPRODUCT, 
  GET_PRODUCTACTIVITY, 
  GET_HOTSALEPRODUCT,
  GET_PRODUCTDETAIL
} from '../types/mall'

export default handleActions({

  // 获取店铺信息
  [GET_MALLINFO] (state, action) {
    state.mallInfo = action.payload

    return {...state}
  },

  // 获取店铺一级分类
  [GET_CLASSONE] (state, action) {
    state.classOne = action.payload

    return {...state}
  },

  // 获取店铺二级分类
  [GET_CLASSTWO] (state, action) {
    state.classTwo = action.payload

    return {...state}
  },

  // 获取店铺新品
  [GET_NEWPRODUCT] (state, action) {
    state.newProduct = action.payload

    return {...state}
  },

  // 获取店铺活动
  [GET_PRODUCTACTIVITY] (state, action) {
    state.productActivity = action.payload

    return {...state}
  },

  // 获取店铺热卖商品
  [GET_HOTSALEPRODUCT] (state, action) {
    state.hotSaleProduct = action.payload

    return {...state}
  },

  // 获取商品详细
  [GET_PRODUCTDETAIL] (state, action) {
    state.productDetail = action.payload
    
    return {...state}
  },

}, {
  mallInfo: null,
  classOne: [],
  classTwo: [],
  newProduct: [],
  productActivity: [],
  hotSaleProduct: [],
  productDetail: null
})
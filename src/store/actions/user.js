import { createAction } from 'redux-actions'
import wepy from 'wepy'
import 'wepy-async-function'

import { 
  GET_USERINFO, 
  EDIT_USERINFO, 
  ADD_ADDRESS,
  DELETE_ADDRESS,
  GET_MYORDERS,
  GET_ORDERDETAIL
} from '../types/user'

// 获取用户信息
export const getUserInfo = createAction(GET_USERINFO, async function () {
  const { userInfo } = await wepy.getUserInfo()
  return userInfo
})

// 修改用户信息
export const editUserInfo = createAction(EDIT_USERINFO, (params) => {
  return params
})

// 新增收货地址
export const addAddress = createAction(ADD_ADDRESS, (params) => {
  return params
})

// 删除收货地址
export const deleteAddress = createAction(DELETE_ADDRESS, (params) => {
  return params
})

// 获取我的订单列表
export const getMyOrders = createAction(GET_MYORDERS, () => {
  let myOrders = [{
    id: 1,
    productArr: [{
      id: 1,
      name: '测试商品',
      img: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods2.jpeg',
      num: 2,
      spec: '一段商品描述'
    }]
  }, {
    id: 2,
    productArr: [{
      id: 1,
      name: '测试商品',
      img: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods3.jpeg',
      num: 2,
      spec: '一段商品描述'
    }, {
      id: 2,
      name: '测试商品',
      img: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods4.jpeg',
      num: 2,
      spec: '一段商品描述'
    }, {
      id: 3,
      name: '测试商品',
      img: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods2.jpeg',
      num: 3,
      spec: '一段商品描述'
    }, {
      id: 4,
      name: '测试商品',
      img: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods5.jpeg',
      num: 3,
      spec: '一段商品描述'
    }]
  }]
  return myOrders
})

// 获取订单详细
export const getOrderDetail = createAction(GET_ORDERDETAIL, () => {
  let orderDetail = {
    id: '20170520001',
    status: '已完成',
    orderTime: '2017-05-21  18:30:43',
    totalMoney: 200,
    belonger: {
      name: '屈凯飞',
      phone: '18708965705',
      address: '海南海口琼山区龙昆南路99号海南师范大学'
    },
    goods: {
      id: 1,
      image: 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg',
      name: '测试商品',
      num: 5,
      price: 40
    }
  }
  return orderDetail
})
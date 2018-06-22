import { createAction } from 'redux-actions'
// import wepy from 'wepy'
import 'wepy-async-function'
import { GET_MALLINFO } from '../types/mall'

// 获取店铺信息
export const getMallInfo = createAction(GET_MALLINFO, () => {
  const mallInfo = {
    avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/M1VPicpknMqwojc5OyNG0fJdeLWvpgP2ic0U6BHfA1Go7zZ3C5asp4MP3APbY3sukQdCic53bIBYKEvI9pO7XvXHQ/132',
    nickName: '屈凯飞的趣玩儿店',
    workTime: '09:00 ---- 18:00',
    address: '海口市琼山区龙昆南路99号海南师范大学',
    wxNumber: 'qukaifeia'
  }
  return mallInfo
})

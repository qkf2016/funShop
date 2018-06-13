import { createAction } from 'redux-actions'
import wepy from 'wepy'
import 'wepy-async-function'

import { GET_USERINFO } from '../types/user'

// // 例子
// export const getUserInfo = createAction(GET_USERINFO, () => {
//   console.log('我执行了', GET_USERINFO)
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(1)
//     }, 1000)
//   })
// })

export const getUserInfo = createAction(GET_USERINFO, async function () {
  const { userInfo } = await wepy.getUserInfo()
  return userInfo
})
import { handleActions } from 'redux-actions'
import { GET_MALLINFO } from '../types/mall'

export default handleActions({
  // 获取店铺信息
  [GET_MALLINFO] (state, action) {
    console.log(action)
    state.mallInfo = action.payload
    return {
      ...state,
      mallInfo: state.mallInfo
    }
  }  
}, {
  mallInfo: null
})
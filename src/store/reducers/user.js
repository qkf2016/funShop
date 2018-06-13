import { handleActions } from 'redux-actions'
import { GET_USERINFO, EDIT_USERINFO } from '../types/user'

export default handleActions({
  // 获取用户信息
  [GET_USERINFO] (state, action) {
    state.wxInfo = action.payload
    return {
      ...state,
      wxInfo: state.wxInfo
    }
  },
  // 修改用户信息
  [EDIT_USERINFO] (state) {
    state.wxInfo = '123'
    return {
      ...state,
      wxInfo: state.wxInfo
    }
  },  
}, {
  wxInfo: null
})
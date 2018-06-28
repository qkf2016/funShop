import { handleActions } from 'redux-actions'
import { 
  GET_USERINFO, 
  EDIT_USERINFO, 
  ADD_ADDRESS,
  DELETE_ADDRESS
} from '../types/user'

export default handleActions({

  // 获取用户信息
  [GET_USERINFO] (state, action) {
    console.log(state)
    state.wxInfo = action.payload
    return {
      ...state,
      wxInfo: state.wxInfo
    }
  },

  // 修改用户信息
  [EDIT_USERINFO] (state, action) {
    state.wxInfo[action.payload.key] = action.payload.value
    return {
      ...state,
      wxInfo: state.wxInfo
    }
  },  

  // 新增收货地址
  [ADD_ADDRESS] (state, action) {
    console.log(state)
    state.addressArr.push(action.payload)
    return {
      ...state,
      addressArr: state.addressArr
    }
  },

  // 删除收货地址
  [DELETE_ADDRESS] (state, action) {
    const index = state.addressArr.findIndex( p => p.id === action.payload )
    state.addressArr.splice(index, 1)
    return {
      ...state,
      addressArr: state.addressArr
    }
  }

}, {
  wxInfo: null,
  addressArr: []
})
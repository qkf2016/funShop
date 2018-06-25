import { combineReducers } from 'redux'
import user from './user'
import mall from './mall'
import shopping from './shopping'

export default combineReducers({
  user,
  mall,
  shopping
})
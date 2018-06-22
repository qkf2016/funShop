import { combineReducers } from 'redux'
import user from './user'
import mall from './mall'
import shoping from './shoping'

export default combineReducers({
  user,
  mall,
  shoping
})
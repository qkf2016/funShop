import { combineReducers } from 'redux'
import user from './user'
import shopCar from './shopCar'

export default combineReducers({
  user,
  shopCar
})
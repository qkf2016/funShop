import { createAction } from 'redux-actions'
// import wepy from 'wepy'
import 'wepy-async-function'
import { ADD_PRODUCT } from '../types/shopping'

export const addProduct = createAction(ADD_PRODUCT, (obj) => {
  return obj
})
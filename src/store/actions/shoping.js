import { createAction } from 'redux-actions'
// import wepy from 'wepy'
import 'wepy-async-function'
import { ADD_PRODUCT } from '../types/shoping'

export const addProduct = createAction(ADD_PRODUCT, (id) => {
  console.log(id)
  return []
})
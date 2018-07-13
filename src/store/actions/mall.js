import { createAction } from 'redux-actions'
// import wepy from 'wepy'
import 'wepy-async-function'
import { 
  GET_MALLINFO, 
  GET_CLASSONE, 
  GET_CLASSTWO, 
  GET_NEWPRODUCT, 
  GET_PRODUCTACTIVITY, 
  GET_HOTSALEPRODUCT,
  GET_PRODUCTDETAIL
} from '../types/mall'

// 获取店铺信息
export const getMallInfo = createAction(GET_MALLINFO, () => {
  const mallInfo = {
    avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/M1VPicpknMqwojc5OyNG0fJdeLWvpgP2ic0U6BHfA1Go7zZ3C5asp4MP3APbY3sukQdCic53bIBYKEvI9pO7XvXHQ/132',
    nickName: '屈凯飞的趣玩儿店',
    workTime: '09:00 ---- 18:00',
    address: '海口市琼山区龙昆南路99号海南师范大学',
    wxNumber: 'qukaifeia',
    notice: '开张笑纳城乡客，开业喜迎远近宾. 趣玩儿店欢迎您',
    activityImages: [
      'http://pakbe7by0.bkt.clouddn.com/funshop/images/haibao1.jpeg',
      'http://pakbe7by0.bkt.clouddn.com/funshop/images/haibao2.jpeg',
      'http://pakbe7by0.bkt.clouddn.com/funshop/images/haibao3.jpeg'
    ]
  }
  return mallInfo
})

// 获取店铺一级分类
export const getClassOne = createAction(GET_CLASSONE, () => {
  const classOne = [{
    id: 1,
    image: './images/lipin.svg',
    name: '精美礼品'
  }, {
    id: 2,
    image: './images/meizhuang.svg',
    name: '日系美妆'
  }, {
    id: 3,
    image: './images/yifu.svg',
    name: '人靠衣装'
  }, {
    id: 4,
    image: './images/show-desk.svg',
    name: '专柜代购'
  }, {
    id: 5,
    image: './images/hufupin.svg',
    name: '面部护理'
  }, {
    id: 6,
    image: './images/watch.svg',
    name: '时尚手表'
  }, {
    id: 7,
    image: './images/bage.svg',
    name: '真品包包'
  }, {
    id: 8,
    image: './images/tag.svg',
    name: '国际大牌'
  }, {
    id: 9,
    image: './images/drink.svg',
    name: '奇妙饮品'
  }, {
    image: './images/guide.svg',
    name: '查看更多'
  }]
  return classOne
})

// 获取店铺二级分类
export const getClassTwo = createAction(GET_CLASSTWO, () => {
  const classTwo = [{
    classOneId: 1,
    id: 1,
    name: '潮流短袖',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods2.jpeg'
  }, {
    classOneId: 1,
    id: 2,
    name: '电子数码',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods3.jpeg'
  }, {
    classOneId: 1,
    id: 3,
    name: '家用电器',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods4.jpeg'
  }, {
    classOneId: 1,  
    id: 4,
    name: '电子数码',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods3.jpeg'
  }, {
    classOneId: 1,
    id: 5,
    name: '居家旅行',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods4.jpeg'
  }, {
    classOneId: 1,
    id: 6,
    name: '潮流短袖',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods2.jpeg'
  }]
  return classTwo
})

// 获取店铺新品
export const getNewProduct = createAction(GET_NEWPRODUCT, () => {
  const newProduct = [{
    id: 1,
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods2.jpeg',
    name: '黑色短袖',
    spec: '这是一段商品描述',
    price: '99'
  }, {
    id: 2,
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods3.jpeg',
    name: '2017款苹果笔记本电脑',
    spec: '这是一段商品描述',
    price: '12999'
  }, {
    id: 3,
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods4.jpeg',
    name: '透明水壶',
    spec: '这是一段商品描述',
    price: '199'
  }, {
    id: 4,
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods5.jpeg',
    name: '精美拉杆箱',
    spec: '这是一段商品描述',
    price: '399'
  }, {
    id: 5,
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/main-goods6.jpeg',
    name: '曲奇饼',
    spec: '这是一段商品描述',
    price: '39'
  }]
  return newProduct
})

// 获取店铺信息
export const getProductActivity = createAction(GET_PRODUCTACTIVITY, () => {
  const productActivity = [{
    name: '数码宝贝',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/tags1.jpeg',
    spec: '这是活动的介绍'
  }, {
    name: '人气新品',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/tags2.jpeg',
    spec: '这是活动的介绍'
  }, {
    name: '买一赠一',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/tags3.jpeg',
    spec: '这是活动的介绍'
  }, {
    name: '数码宝贝',
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/tags4.jpeg',
    spec: '这是活动的介绍'
  }]
  return productActivity
})

// 获取店铺热卖商品
export const getHotSaleProduct = createAction(GET_HOTSALEPRODUCT, () => {
  const hotSaleProduct = [{
    id: 1,
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-biger1.jpeg',
    name: '令人心动的精美小夜灯',
    spec: '这是一段商品描述',
    unit: '个',
    standard: '箱子',
    price: '99'
  }, {
    id: 2,
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-biger2.jpeg',
    name: '结实耐用的黑色登山包',
    spec: '这是一段商品描述',
    unit: '个',
    standard: '箱子',
    price: '12999'
  }, {
    id: 3,
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-biger3.jpeg',
    name: '小巧玲珑的全自动牙刷',
    spec: '这是一段商品描述',
    unit: '个',
    standard: '箱子',
    price: '699'
  }, {
    id: 4,
    image: 'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-biger1.jpeg',
    name: '令人心动的精美小夜灯',
    spec: '这是一段商品描述',
    unit: '个',
    standard: '箱子',
    price: '99'
  }]
  return hotSaleProduct
})

// 获取商品详细
export const getProductDetail = createAction(GET_PRODUCTDETAIL, () => {
  const productDetail = {
    id: 1,
    name: '测试商品',
    spec: '这是一段商品的描述话语',
    price: 59,
    promotionsPrice: 49,
    mainImgs: [
      'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-detail1.jpeg',
      'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-detail2.jpeg',
      'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-detail3.jpeg'
    ],
    detailImgs: [
      'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-detail4.jpeg',
      'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-detail6.jpeg',
      'http://pakbe7by0.bkt.clouddn.com/funshop/images/goods-detail7.jpeg'
    ],
    options: [
      {
        name: '佩戴方式',
        content: '入耳式'
      }, {
        name: '产品重量',
        content: '50g'
      }, {
        name: '规格',
        content: '50mm x 50mm x 50mm'
      }, {
        name: '型号',
        content: 'Y1S93S20'
      }, {
        name: '产地',
        content: '海口'
      }
    ]
  }
  return productDetail
})


import Mock from "mockjs";

// import { Mock } from "mockjs"

let tableData = []
let min = 1
let max = 20
let num = Math.random() * (min - max) + max
let cardData = [
  {
    name: '今日支付订单',
    value: parseInt((Math.random() * (100 - 500) + 500).toFixed(0)),
    icon: 'document-copy',
    color: '#3498db',
  },
  {
    name: '今日收藏订单',
    value: parseInt((Math.random() * (10 - 200) + 200).toFixed(0)),
    icon: 'star-off',
    color: '#1abc9c',
  },
  {
    name: '今日未支付订单',
    value: parseInt((Math.random() * (10 - 50) + 50).toFixed(0)),
    icon: 'goods',
    color: '#409EFF',
  },
  {
    name: '本月支付订单',
    value: parseInt((Math.random() * (5000 - 50000) + 50000).toFixed(0)),
    icon: 's-marketing',
    color: '#fdcb6e',
  },
  {
    name: '本月收藏订单',
    value: parseInt((Math.random() * (500 - 20000) + 20000).toFixed(0)),
    icon: 'star-on',
    color: '#6c5ce7',
  },
  {
    name: '本月未支付订单',
    value: parseInt((Math.random() * (500 - 5000) + 5000).toFixed(0)),
    icon: 's-goods',
    color: '#636e72',
  },
]
let userData = [
  {
    date: '周一',
    new: parseInt(Math.random() * (min - max) + max),
    active: parseInt(Math.random() * (min - max) + max),
  },
  {
    date: '周二',
    new: parseInt(Math.random() * (min - max) + max),
    active: parseInt(Math.random() * (min - max) + max),
  },
  {
    date: '周三',
    new: parseInt(Math.random() * (min - max) + max),
    active: parseInt(Math.random() * (min - max) + max),
  },
  {
    date: '周四',
    new: parseInt(Math.random() * (min - max) + max),
    active: parseInt(Math.random() * (min - max) + max),
  },
  {
    date: '周五',
    new: parseInt(Math.random() * (min - max) + max),
    active: parseInt(Math.random() * (min - max) + max),
  },
  {
    date: '周六',
    new: parseInt(Math.random() * (min - max) + max),
    active: parseInt(Math.random() * (min - max) + max),
  },
  {
    date: '周日',
    new: parseInt(Math.random() * (min - max) + max),
    active: parseInt(Math.random() * (min - max) + max),
  },
]
let videoData = [
  {
    name: '华为',
    value: parseInt(Math.random() * (min - max) + max),
  },
  {
    name: '苹果',
    value: parseInt(Math.random() * (min - max) + max),
  },
  {
    name: '魅族',
    value: parseInt(Math.random() * (min - max) + max),
  },
  {
    name: '小米',
    value: parseInt(Math.random() * (min - max) + max),
  },
  {
    name: 'vivo',
    value: parseInt(Math.random() * (min - max) + max),
  },
  {
    name: 'oppo',
    value: parseInt(Math.random() * (min - max) + max),
  },
]
let lineData = {
  data: [],
  date: ['2022-10-05', '2022-10-06', '2022-10-07', '2022-10-08', '2022-10-09']
}
export default {
  getStaticData: () => {
    for (let i = 0; i < num; i++) {
      tableData.push(
        Mock.mock({
          date: `20${parseInt(num) > 9 ? parseInt(num) : '0' + parseInt(Math.random() * (min - max) + max)}-${parseInt(Math.random() * (min - max) + max)}-${i + 1}`,
          name: `小${i + 1}`,
          address: `郭吓${parseInt(Math.random() * (min - max) + max + 1)}区: ${num}`,
        })
      )
    }
    for (let i = 0; i < 5; i++) {
      lineData.data.push(Mock.mock({
        华为: parseInt(Math.random() * (min - max) + max),
        苹果: parseInt(Math.random() * (min - max) + max),
        小米: parseInt(Math.random() * (min - max) + max),
        vivo: parseInt(Math.random() * (min - max) + max),
        oppo: parseInt(Math.random() * (min - max) + max),
      }))
    }
    return {
      code: 20000,
      cardData,
      tableData,
      userData,
      videoData,
      lineData,
    }
  }
}
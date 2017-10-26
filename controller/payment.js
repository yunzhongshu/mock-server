const Result = require('../common/result')

exports.countPayments = (req, res, next) => {
  let count = 2
  res.send(Result.success(count))
  next()
}

exports.listPayments = (req, res, next) => {
  let list = [{
    payNo: '20171013PMvxtUE7K',
    type: '益倍嘉支付宝支付',
    amount: 2000.000,
    payTime: '2017-10-13 16:15:19',
    statusDesc: '成功',
    refNo: 'BL00010024492017101315160070',
    user: {
      name: '张三'
    },
    userId:123
  },{
    payNo: '20171013PMvxtUE7K',
    type: '益倍嘉支付宝支付',
    amount: 1000.000,
    payTime: '2017-10-13 16:14:19',
    statusDesc: '成功',
    refNo: 'BL00010024492017101315160070',
    user: {
      name: '张三'
    },
    userId:123
  }]
  res.send(Result.success(list))
  next()
}
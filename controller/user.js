const Result = require('../common/result')

exports.countUserList = (req, res, next) => {
  let count = 2
  res.send(Result.success(count))
  next()
}

exports.queryUserList = (req, res, next) => {
  let list = [
    {
      id: 1,
      name: '张三',
      sex: 1,
      sexDesc: '男',
      idNo: '330501199012121310',
      phone: '13500000000',
      source: 'wechat',
      status: 'normal',
      statusDesc: '正常',
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      thirdId:  123456
    },
    {
      id: 2,
      name: '李四',
      sex: 1,
      sexDesc: '男',
      idNo: '330501199012121311',
      phone: '13500000001',
      source: 'wechat',
      status: 'normal',
      statusDesc: '正常',
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      thirdId:  123456
    }
  ]
  res.send(Result.success(list))
  next()
}
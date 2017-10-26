const Result = require('../common/result')

exports.queryPostponementApplyList = (req, res, next) => {
  let list = [{
    id: 1,
    billNo: '20170910001421421421421',
    billId: 3,
    status: 'wait_audit',
    statusDesc: '等待审核',
    currentDueTime: '2017-09-28 10:00:00',
    postponeTime: '2017-10-01 10:00:00',
    payStatus: 'wait_pay',
    payTime: null,
    applyNo: '20170910001421421421421',
    createTime: '2017-09-20 10:00:00',
    updateTime: '2017-09-20 10:00:00',
    currentPostponeTimes: 1,
    userId: 1,
    user: {
      name: '张三',
      phone: '13500000001'
    },
    payAmount: 100
  }, {
    id: 2,
    billNo: '20170910001421421421421',
    billId: 3,
    status: 'wait_audit',
    statusDesc: '等待审核',
    currentDueTime: '2017-09-28 10:00:00',
    postponeTime: '2017-10-01 10:00:00',
    payStatus: 'wait_pay',
    payTime: null,
    applyNo: '20170910001421421421421',
    createTime: '2017-09-20 10:00:00',
    updateTime: '2017-09-20 10:00:00',
    currentPostponeTimes: 1,
    userId: 1,
    user: {
      name: '张三',
      phone: '13500000001'
    },
    payAmount: 100
  }]
  res.send(Result.success(list))
  next()
}

exports.countPostponementApplyList = (req, res, next) => {
  let count = 2
  res.send(Result.success(count))
  next()
}
const logger = require('log4js')
const Result = require('../common/result')

exports.queryList = (req, res, next) => {
  let list = [{
    id: 1,
    applyNo: '20170829001',
    applyTypeDesc: '成人贷',
    statusDesc: '审核通过',
    userId: 1,
    user: {
      id: 1,
      name: '张三',
      phone: '13500000000'
    },
    userRiskInfo: {
      labelName: '韩密天使贷'
    },
    userAccount: {
      totalCreditAmount: 1000,
      balanceCreditAmount: 800
    },
    period: 12,
    periodTypeDesc: '每月',
    applyTime: '2017-09-01 10:00:00',
    isAllowAutoGrant: true
  },
    {
      id: 2,
      applyNo: '20170829001',
      applyTypeDesc: '成人贷',
      statusDesc: '审核通过',
      userId: 1,
      user: {
        id: 1,
        name: '张三',
        phone: '13500000000'
      },
      userRiskInfo: {
        labelName: '韩密天使贷'
      },
      userAccount: {
        totalCreditAmount: 1000,
        balanceCreditAmount: 800
      },
      period: 12,
      periodTypeDesc: '每月',
      applyTime: '2017-09-01 10:00:00',
      isAllowAutoGrant: true
    }]
  res.send(Result.success(list))
  next()
}

exports.queryCount = (req, res, next) => {
  let count = 1
  res.send(Result.success(count))
  next()
}
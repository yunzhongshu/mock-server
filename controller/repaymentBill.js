const Result = require('../common/result')

exports.queryBillList = (req, res, next) => {
  let list = [
    {
      id: 1,
      title: '测试账单1',
      type: '',
      typeDesc: '账单类型',
      billNo: '账单号',
      userId: 1,
      user: {
        name: '张三',
        phone: '13500000000'
      },
      userRiskInfo: {
        labelName: '南条'
      },
      amount: 1000,
      interestAmount: 100,
      preCutInterestAmount: 50,
      dueTime: '2017-10-01 00:00:00',
      startTime: '2017-09-01 00:00:00',
      status: 'overdue',
      statusDesc: '逾期',
      penalSumAmount: '300',
      overdueDay: 4,
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      periodIndex: 1
    },
    {
      id: 2,
      title: '测试账单2',
      type: '',
      typeDesc: '账单类型',
      billNo: '账单号',
      userId: 2,
      user: {
        name: '张三',
        phone: '13500000000'
      },
      userRiskInfo: {
        labelName: '南条'
      },
      amount: 1000,
      interestAmount: 100,
      preCutInterestAmount: 50,
      dueTime: '2017-10-01 00:00:00',
      startTime: '2017-09-01 00:00:00',
      status: 'overdue',
      statusDesc: '逾期',
      penalSumAmount: '300',
      overdueDay: 4,
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      periodIndex: 1
    }
  ]
  res.send(Result.success(list))
  next()
}

exports.countBillList = (req, res, next) => {
  let count = 2
  res.send(Result.success(count))
  next()
}
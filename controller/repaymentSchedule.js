const Result = require('../common/result')

exports.countRepaymentSchdules = (req, res, next) => {
  let count = 2
  res.send(count)
  next
}


exports.queryRepaymentSchdule = (req, res, next) => {
  let list = [
    {
      id: 10,
      type: 'cash',
      typeDesc: '现金贷',
      schedule_no: '20170829',
      currentPeriod: 1,
      repaymentAmount: 1020,
      status: 'wait_pay',
      statusDesc: '待付款',
      amountInterest: 20,
      amountOutstanding: 1020,
      amountPrinciple: 1000,
      dueTime: '2017-09-01 00:00:00',
      createTime: '2017-08-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      lateCharge: 0.03,
      applyNo: '2017082901',
      penalSum: 100,
      penalTotalSum: 200,
      penalUpdateTime: '2017-09-01 00:00:00',
      payTime: null,
      memo: '',
      userId: 1,
      payTimes: 0,
      repaidTotalAmount: 0,
      isOverdue: false,
      billNo: '2017090101'
    },
    {
      id: 11,
      type: 'cash',
      typeDesc: '现金贷',
      schedule_no: '2017082902',
      currentPeriod: 2,
      repaymentAmount: 1020,
      status: 'wait_pay',
      statusDesc: '待付款',
      amountInterest: 20,
      amountOutstanding: 1020,
      amountPrinciple: 1000,
      dueTime: '2017-09-01 00:00:00',
      createTime: '2017-08-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      lateCharge: 0.03,
      applyNo: '2017082901',
      penalSum: 100,
      penalTotalSum: 200,
      penalUpdateTime: '2017-09-01 00:00:00',
      payTime: null,
      memo: '',
      userId: 1,
      payTimes: 0,
      repaidTotalAmount: 0,
      isOverdue: false,
      billNo: '2017090101'
    }
  ];
  res.send(Result.success(list));
  next()
}
const Result = require('../common/result')

exports.queryConstantData = (req, res, next) => {

  res.send(Result.success({
    cashApplyStatus: [],
    certProductType: [],
    loanAmountType: [{
      key: 'range',
      value: '区间'
    }, {
      key: 'fixed',
      value: '固定的'
    }],
    collectionCaseLevel: [
      {
        key: 'normal',
        value: '正常'
      }
    ],
    collectionCaseStatus: [{
      key: 'wait_assign',
      value: '待分配'
    }, {
      key: 'assigned',
      value: '已分配'
    }, {
      key: 'returned',
      value: '退回'
    }, {
      key: 'paused',
      value: '暂停'
    }, {
      key: 'processing',
      value: '处理中'
    }, {
      key: 'finished',
      value: '催收完成'
    }, {
      key: 'closed',
      value: '已关闭'
    }],
    collectionCaseAssignToType: [
      {
        key: 'employee',
        value: '员工'
      }, {
        key: 'group',
        value: '催收组'
      }
    ]
  }))

}
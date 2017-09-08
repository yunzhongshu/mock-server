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
    }]
  }))

}
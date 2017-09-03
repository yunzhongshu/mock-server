const Result = require('../common/result')

exports.queryConstantData = (req, res, next) => {

  res.send(Result.success({
    cashApplyStatus: [],
    certProductType: []
  }))

}